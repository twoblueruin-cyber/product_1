import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TEST_MODE = process.env.TEST_MODE === '1';

let client = null;
if (!TEST_MODE) {
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  client = new Anthropic();
}

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/nickname', async (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: '이름을 입력해주세요.' });
  }

  const cleanName = name.trim().slice(0, 20);

  // ── 테스트 모드 ────────────────────────────────────────────────
  if (TEST_MODE) {
    await new Promise(r => setTimeout(r, 800));
    return res.json({
      nicknames: [
        { nickname: `${cleanName}이`, category: '귀여운', reason: '이름 뒤에 "이"를 붙여 친근하고 귀엽게 부르는 방식이에요.' },
        { nickname: `${cleanName} 천재`, category: '재미있는', reason: '무엇이든 척척 해내는 만능 천재라는 뜻이에요!' },
        { nickname: `대장 ${cleanName}`, category: '멋진', reason: '리더십이 넘치는 카리스마 있는 별명이에요.' },
        { nickname: `${cleanName}짱`, category: '특별한', reason: '모든 면에서 최고라는 뜻을 담았어요.' },
        { nickname: `빛나는 ${cleanName}`, category: '의미', reason: '존재 자체로 빛나는 사람이라는 의미예요.' },
        { nickname: `${cleanName}별`, category: '발음', reason: '이름 뒤에 "별"을 붙여 반짝이는 느낌을 줘요.' },
      ],
    });
  }

  // ── 실제 모드: Anthropic 호출 ──────────────────────────────────
  const systemPrompt = `당신은 재미있고 창의적인 별명 생성 전문가입니다. 한국어와 영어 이름 모두 잘 알고 있습니다.
주어진 이름에 대해 다양한 스타일의 별명 6개를 생성해주세요.

규칙:
- 각 별명은 지정된 카테고리에 맞아야 합니다
- 별명은 재미있고, 기억하기 쉽고, 긍정적이어야 합니다
- reason은 1~2문장으로 왜 이 별명을 지었는지 재미있게 설명하세요
- 부정적이거나 비하하는 별명은 절대 만들지 마세요
- 영어 이름이라도 reason은 한국어로 작성하세요

반드시 아래 JSON 형식으로만 응답하세요 (다른 텍스트 없이):
{
  "nicknames": [
    {"nickname": "별명1", "category": "발음", "reason": "설명"},
    {"nickname": "별명2", "category": "의미", "reason": "설명"},
    {"nickname": "별명3", "category": "귀여운", "reason": "설명"},
    {"nickname": "별명4", "category": "재미있는", "reason": "설명"},
    {"nickname": "별명5", "category": "멋진", "reason": "설명"},
    {"nickname": "별명6", "category": "특별한", "reason": "설명"}
  ]
}

카테고리 설명:
- 발음: 이름의 발음이나 소리를 활용한 별명 (비슷하게 들리는 단어, 라임 등)
- 의미: 이름의 뜻이나 의미를 살린 별명
- 귀여운: 귀엽고 친근한 느낌의 별명 (애칭, 줄임말, ~이/야 등)
- 재미있는: 유머러스하고 재치 있는 별명
- 멋진: 멋있고 카리스마 넘치는 별명
- 특별한: 독특하고 창의적인 별명`;

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 700,
      system: systemPrompt,
      messages: [{ role: 'user', content: `이름: ${cleanName}` }],
    });

    const text = response.content[0].text.trim();
    let result;
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      result = JSON.parse(jsonMatch ? jsonMatch[0] : text);
    } catch {
      return res.status(500).json({ error: '별명 생성 중 오류가 발생했습니다. 다시 시도해주세요.' });
    }

    if (!result.nicknames || !Array.isArray(result.nicknames)) {
      return res.status(500).json({ error: '별명 형식이 올바르지 않습니다. 다시 시도해주세요.' });
    }

    res.json(result);
  } catch (error) {
    console.error('Anthropic API 오류:', error);
    const status = error.status ?? 500;
    let message = '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
    if (status === 401 || error.message?.includes('apiKey') || error.message?.includes('authentication')) {
      message = 'API 키가 설정되지 않았거나 올바르지 않습니다. ANTHROPIC_API_KEY 환경 변수를 확인하세요.';
    } else if (status === 429) {
      message = '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.';
    } else if (status === 529) {
      message = 'Claude 서버가 과부하 상태입니다. 잠시 후 다시 시도해주세요.';
    }
    res.status(status >= 400 ? status : 500).json({ error: message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  if (TEST_MODE) console.log('⚠️  TEST_MODE=1 — Anthropic API 미사용, 더미 응답으로 동작합니다');
  console.log(`✨ 별명 생성기 서버 실행 중: http://localhost:${PORT}`);
});

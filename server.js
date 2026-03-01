import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TEST_MODE = process.env.TEST_MODE === '1';

let client = null;
if (!TEST_MODE) {
  try {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    client = new Anthropic();
  } catch (e) {
    console.warn('⚠️  Anthropic 클라이언트 초기화 실패 — 로컬 생성기로 동작합니다:', e.message);
  }
}

// ── 로컬 별명 생성기 (API 키 없이 동작) ────────────────────────────
function hasBatchim(char) {
  const code = char.charCodeAt(0);
  if (code < 0xAC00 || code > 0xD7A3) return false;
  return (code - 0xAC00) % 28 !== 0;
}

function generateLocalNicknames(name) {
  const isKorean = /[\uAC00-\uD7A3]/.test(name);
  const chars = [...name];
  const first = chars[0];
  const last = chars[chars.length - 1];
  const seed = chars.reduce((s, c) => s + c.charCodeAt(0), 0);
  const pick = (arr, offset = 0) => arr[(seed + offset) % arr.length];

  if (isKorean) {
    // 귀여운: 받침 유무에 따라 '이' / '야' 선택
    const cutesuffix = hasBatchim(last) ? '이' : '야';
    const cute = pick([
      { nickname: `${last}${cutesuffix}`, reason: `"${name}"의 마지막 글자에 "${cutesuffix}"를 붙인 친근한 애칭이에요. 가까운 친구처럼 부를 수 있어요!` },
      { nickname: `${name}${cutefix(name)}`, reason: `이름 뒤에 귀여운 어미를 붙인 다정한 호칭이에요.` },
      { nickname: `${first}쨩`, reason: `이름의 첫 글자에 일본식 애칭 "쨩"을 붙인 귀여운 별명이에요.` },
    ], 0);

    // 발음: 음절 반복·변형 기반
    const sound = pick([
      { nickname: `${first}${last}${last}`, reason: `"${name}"의 마지막 글자를 한 번 더 반복해 리듬감 있게 만든 별명이에요.` },
      { nickname: `${first}${first}${last}`, reason: `첫 글자를 두 번 반복해 발음이 재미있는 별명을 만들었어요.` },
      { nickname: `${last}${last}이`, reason: `마지막 발음을 두 번 이어 붙여 독특한 느낌을 줬어요.` },
    ], 1);

    // 의미: 긍정적 수식어
    const meaning = pick([
      { nickname: `빛나는 ${name}`, reason: `주변을 환하게 밝히는 빛 같은 존재라는 의미예요. 어디서든 주목받는 사람!` },
      { nickname: `따뜻한 ${name}`, reason: `마음이 따뜻해서 주변 사람들에게 온기를 전하는 사람이라는 뜻이에요.` },
      { nickname: `행복한 ${name}`, reason: `늘 웃음과 긍정 에너지를 가져다주는 사람이라는 의미예요.` },
    ], 2);

    // 재미있는: 유머러스한 조합
    const funny = pick([
      { nickname: `${name} 천재`, reason: `뭐든지 척척 해내는 만능 천재! 모르는 게 없는 살아있는 백과사전이에요.` },
      { nickname: `전설의 ${name}`, reason: `이름만 들어도 전설이 되는 사람! 후대에 길이 남을 위대한 존재예요.` },
      { nickname: `${name} 대통령`, reason: `어디서든 중심이 되는 리더십의 소유자예요. 모두가 따르는 카리스마!` },
    ], 3);

    // 멋진: 강하고 쿨한 느낌
    const cool = pick([
      { nickname: `킹 ${name}`, reason: `왕처럼 당당하고 멋진 존재감을 가진 사람이라는 뜻이에요!` },
      { nickname: `레전드 ${name}`, reason: `이름 자체가 전설이 되는 대단한 사람이라는 뜻이에요.` },
      { nickname: `${name} 마스터`, reason: `모든 분야의 달인! 뭐든 잘하는 만능 마스터예요.` },
    ], 4);

    // 특별한: 창의적·독특한 조합
    const special = pick([
      { nickname: `${name}별`, reason: `밤하늘에서 가장 빛나는 별처럼 특별하고 아름다운 존재예요.` },
      { nickname: `무적의 ${name}`, reason: `어떤 상황에서도 흔들리지 않는 무적의 존재라는 뜻이에요!` },
      { nickname: `${name}짱`, reason: `모든 면에서 짱! 최고의 존재감을 가진 사람이에요.` },
    ], 5);

    return [
      { ...sound,   category: '발음' },
      { ...meaning, category: '의미' },
      { ...cute,    category: '귀여운' },
      { ...funny,   category: '재미있는' },
      { ...cool,    category: '멋진' },
      { ...special, category: '특별한' },
    ];
  } else {
    // 영어 이름
    const short = name.length > 5 ? name.slice(0, Math.ceil(name.length / 2)) : name;
    const initial = name[0].toUpperCase();

    const cute = pick([
      { nickname: `${short}y`, reason: `"${name}"을 짧게 줄이고 "y"를 붙인 영어식 귀여운 애칭이에요.` },
      { nickname: `${short}ie`, reason: `이름 앞부분에 "ie"를 붙인 영어식 다정한 별명이에요.` },
      { nickname: `${name}이`, reason: `영어 이름에 한국식 "이"를 붙여 친근하게 부르는 방식이에요.` },
    ], 0);

    const sound = pick([
      { nickname: `${initial}. ${name}`, reason: `이름의 이니셜을 앞에 붙여 멋스럽게 표현한 별명이에요.` },
      { nickname: `${short}-${short}`, reason: `이름의 앞부분을 반복해 발음하기 재미있는 별명이에요.` },
      { nickname: `${name.toUpperCase()}`, reason: `이름을 모두 대문자로 써서 강렬한 존재감을 표현했어요.` },
    ], 1);

    const meaning = pick([
      { nickname: `빛나는 ${name}`, reason: `주변을 밝히는 특별한 존재라는 의미예요. 항상 긍정적인 에너지를 주는 사람!` },
      { nickname: `따뜻한 ${name}`, reason: `마음이 따뜻해서 주변에 온기를 전하는 사람이라는 뜻이에요.` },
      { nickname: `행복한 ${name}`, reason: `늘 웃음과 행복을 가져다주는 사람이라는 의미예요.` },
    ], 2);

    const funny = pick([
      { nickname: `${name} 천재`, reason: `뭐든지 척척 해내는 만능 천재! 영어 이름에서 천재가 탄생했어요.` },
      { nickname: `전설의 ${name}`, reason: `이름만 들어도 전설이 되는 특별한 존재예요.` },
      { nickname: `${name} 대통령`, reason: `어디서든 중심이 되는 리더십의 소유자예요!` },
    ], 3);

    const cool = pick([
      { nickname: `킹 ${name}`, reason: `왕처럼 당당하고 멋진 카리스마를 가진 사람이라는 뜻이에요.` },
      { nickname: `${name} 마스터`, reason: `모든 분야의 달인! 뭐든 잘하는 만능 마스터예요.` },
      { nickname: `레전드 ${name}`, reason: `이름 자체가 전설이 되는 대단한 사람이에요.` },
    ], 4);

    const special = pick([
      { nickname: `${name}스타`, reason: `스타처럼 빛나는 존재감을 가진 사람이에요. 무대 위에서 빛나는 스타!` },
      { nickname: `무적의 ${name}`, reason: `어떤 상황에서도 흔들리지 않는 무적의 존재라는 뜻이에요!` },
      { nickname: `${name}별`, reason: `밤하늘의 별처럼 특별하고 반짝이는 존재라는 의미예요.` },
    ], 5);

    return [
      { ...sound,   category: '발음' },
      { ...meaning, category: '의미' },
      { ...cute,    category: '귀여운' },
      { ...funny,   category: '재미있는' },
      { ...cool,    category: '멋진' },
      { ...special, category: '특별한' },
    ];
  }
}

// '이' / '야' 어미 헬퍼
function cutefix(name) {
  const chars = [...name];
  return hasBatchim(chars[chars.length - 1]) ? '이' : '야';
}

// ── Express 앱 ────────────────────────────────────────────────────
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/nickname', async (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: '이름을 입력해주세요.' });
  }

  const cleanName = name.trim().slice(0, 20);

  // API 키 없거나 TEST_MODE → 로컬 생성기 사용
  if (TEST_MODE || !client) {
    await new Promise(r => setTimeout(r, 600));
    return res.json({ nicknames: generateLocalNicknames(cleanName) });
  }

  // ── Anthropic API 호출 ───────────────────────────────────────────
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
    // API 오류 시에도 로컬 생성기로 폴백
    console.warn('로컬 생성기로 폴백합니다.');
    return res.json({ nicknames: generateLocalNicknames(cleanName) });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const mode = (TEST_MODE || !client) ? '🔧 로컬 생성기 모드 (API 키 불필요)' : '🤖 Claude AI 모드';
  console.log(`✨ 별명 생성기 서버 실행 중: http://localhost:${PORT}  [${mode}]`);
});

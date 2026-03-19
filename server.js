// 로컬 개발용 정적 파일 서버
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(__dirname, {
  setHeaders(res, filePath) {
    if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
      res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    }
  }
}));

// 로컬에서 AI 해석 테스트 (ANTHROPIC_API_KEY 환경변수 필요)
app.post('/api/tarot', async (req, res) => {
  const { cards, probability } = req.body;

  if (!cards || cards.length !== 3) {
    return res.status(400).json({ error: '카드 정보가 올바르지 않습니다.' });
  }

  let client = null;
  try {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    client = new Anthropic();
  } catch {
    return res.json({ error: 'API_KEY_MISSING' });
  }

  const cardList = cards.map((c, i) =>
    `${i + 1}번째 카드: ${c.name}(${c.nameEn}) — ${c.positive ? '긍정' : '부정'} — 키워드: ${c.keyword}`
  ).join('\n');

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 800,
      system: `당신은 깊은 통찰력을 가진 타로 카드 해석 전문가입니다.
사용자가 선택한 3장의 타로카드를 바탕으로 재회 가능성에 대한 심층 해석을 제공합니다.
따뜻하고 공감적인 어조로, 구체적이고 실질적인 조언을 포함하여 한국어 400~500자로 작성하세요.`,
      messages: [{ role: 'user', content: `선택된 카드:\n${cardList}\n\n재회 확률: ${probability}%\n\n이 세 장의 카드를 종합하여 재회 가능성에 대한 타로 해석을 해주세요.` }],
    });
    res.json({ reading: response.content[0].text.trim() });
  } catch (e) {
    res.json({ error: 'API 오류: ' + e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔮 재회 타로 서버 실행 중: http://localhost:${PORT}`);
});

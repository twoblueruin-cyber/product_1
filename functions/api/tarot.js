// Cloudflare Pages Function — /api/tarot
// AI 타로 심층 해석 (Anthropic API 직접 호출)

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { cards, probability } = body;

    if (!cards || !Array.isArray(cards) || cards.length !== 3) {
      return json({ error: '카드 정보가 올바르지 않습니다.' }, 400);
    }

    const apiKey = env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return json({ error: 'API_KEY_MISSING' }, 200);
    }

    const cardList = cards.map((c, i) =>
      `${i + 1}번째 카드: ${c.name}(${c.nameEn}) — ${c.positive ? '긍정' : '부정'} — 키워드: ${c.keyword}`
    ).join('\n');

    const systemPrompt = `당신은 깊은 통찰력을 가진 타로 카드 해석 전문가입니다.
사용자가 선택한 3장의 타로카드를 바탕으로 재회 가능성에 대한 심층 해석을 제공합니다.

해석 규칙:
- 따뜻하고 공감적인 어조로 작성하세요
- 구체적이고 실질적인 조언을 포함하세요
- 희망적이되 현실적인 관점을 유지하세요
- 한국어로 작성하고, 존댓말을 사용하세요
- 400~500자 분량으로 작성하세요
- 세 카드의 상호 연관성을 중심으로 해석하세요
- 마지막에 한 줄의 핵심 메시지를 남겨주세요`;

    const userPrompt = `선택된 카드:\n${cardList}\n\n재회 확률: ${probability}%\n\n이 세 장의 카드를 종합하여 재회 가능성에 대한 타로 해석을 해주세요.`;

    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 800,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!apiRes.ok) {
      return json({ error: 'API 호출 실패' }, 200);
    }

    const apiData = await apiRes.json();
    const reading = apiData.content[0].text.trim();

    return json({ reading });

  } catch (e) {
    return json({ error: '서버 오류가 발생했습니다.' }, 500);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

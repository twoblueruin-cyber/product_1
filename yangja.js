// ── 78장 유니버셜 타로카드 데이터 ──────────────────────────────────────
const CARDS = [
  // ══ 메이저 아르카나 (22장) ══════════════════════════════════════════
  { id:  0, name: '바보',           nameEn: 'The Fool',           suit: 'major',     positive: true,  probability: 52, emoji: '🃏', keyword: '새로운 시작' },
  { id:  1, name: '마법사',         nameEn: 'The Magician',       suit: 'major',     positive: true,  probability: 68, emoji: '🪄', keyword: '의지와 실현' },
  { id:  2, name: '여사제',         nameEn: 'The High Priestess', suit: 'major',     positive: false, probability: 42, emoji: '🌙', keyword: '기다림과 직관' },
  { id:  3, name: '여황제',         nameEn: 'The Empress',        suit: 'major',     positive: true,  probability: 74, emoji: '🌹', keyword: '풍요로운 사랑' },
  { id:  4, name: '황제',           nameEn: 'The Emperor',        suit: 'major',     positive: false, probability: 48, emoji: '👑', keyword: '통제와 자존심' },
  { id:  5, name: '교황',           nameEn: 'The Hierophant',     suit: 'major',     positive: true,  probability: 63, emoji: '⛪', keyword: '전통과 약속' },
  { id:  6, name: '연인',           nameEn: 'The Lovers',         suit: 'major',     positive: true,  probability: 90, emoji: '💕', keyword: '운명적 사랑' },
  { id:  7, name: '전차',           nameEn: 'The Chariot',        suit: 'major',     positive: true,  probability: 70, emoji: '🏆', keyword: '의지와 전진' },
  { id:  8, name: '힘',             nameEn: 'Strength',           suit: 'major',     positive: true,  probability: 71, emoji: '🦁', keyword: '인내와 용기' },
  { id:  9, name: '은둔자',         nameEn: 'The Hermit',         suit: 'major',     positive: false, probability: 28, emoji: '🕯️', keyword: '고독과 내면' },
  { id: 10, name: '운명의 수레바퀴', nameEn: 'Wheel of Fortune',  suit: 'major',     positive: true,  probability: 65, emoji: '☸️', keyword: '운명의 전환' },
  { id: 11, name: '정의',           nameEn: 'Justice',            suit: 'major',     positive: false, probability: 50, emoji: '⚖️', keyword: '인과응보' },
  { id: 12, name: '매달린 남자',    nameEn: 'The Hanged Man',     suit: 'major',     positive: false, probability: 32, emoji: '⌛', keyword: '정체와 희생' },
  { id: 13, name: '죽음',           nameEn: 'Death',              suit: 'major',     positive: false, probability: 22, emoji: '💀', keyword: '끝과 변화' },
  { id: 14, name: '절제',           nameEn: 'Temperance',         suit: 'major',     positive: true,  probability: 62, emoji: '🌈', keyword: '균형과 치유' },
  { id: 15, name: '악마',           nameEn: 'The Devil',          suit: 'major',     positive: false, probability: 27, emoji: '😈', keyword: '집착과 속박' },
  { id: 16, name: '탑',             nameEn: 'The Tower',          suit: 'major',     positive: false, probability: 15, emoji: '⚡', keyword: '급격한 붕괴' },
  { id: 17, name: '별',             nameEn: 'The Star',           suit: 'major',     positive: true,  probability: 80, emoji: '⭐', keyword: '희망과 치유' },
  { id: 18, name: '달',             nameEn: 'The Moon',           suit: 'major',     positive: false, probability: 33, emoji: '🌕', keyword: '불확실과 혼란' },
  { id: 19, name: '태양',           nameEn: 'The Sun',            suit: 'major',     positive: true,  probability: 86, emoji: '☀️', keyword: '기쁨과 성공' },
  { id: 20, name: '심판',           nameEn: 'Judgement',          suit: 'major',     positive: true,  probability: 76, emoji: '📯', keyword: '부활과 각성' },
  { id: 21, name: '세계',           nameEn: 'The World',          suit: 'major',     positive: true,  probability: 83, emoji: '🌍', keyword: '완성과 성취' },
  // ══ 완드 (14장) ══════════════════════════════════════════════════
  { id: 22, name: '완드 에이스',    nameEn: 'Ace of Wands',       suit: 'wands',     positive: true,  probability: 70, emoji: '🔥', keyword: '열정의 시작' },
  { id: 23, name: '완드 2',         nameEn: 'Two of Wands',       suit: 'wands',     positive: true,  probability: 64, emoji: '🔥', keyword: '계획과 비전' },
  { id: 24, name: '완드 3',         nameEn: 'Three of Wands',     suit: 'wands',     positive: true,  probability: 67, emoji: '🔥', keyword: '기회 포착' },
  { id: 25, name: '완드 4',         nameEn: 'Four of Wands',      suit: 'wands',     positive: true,  probability: 78, emoji: '🔥', keyword: '축하와 귀환' },
  { id: 26, name: '완드 5',         nameEn: 'Five of Wands',      suit: 'wands',     positive: false, probability: 35, emoji: '🔥', keyword: '갈등과 경쟁' },
  { id: 27, name: '완드 6',         nameEn: 'Six of Wands',       suit: 'wands',     positive: true,  probability: 73, emoji: '🔥', keyword: '승리와 귀환' },
  { id: 28, name: '완드 7',         nameEn: 'Seven of Wands',     suit: 'wands',     positive: false, probability: 44, emoji: '🔥', keyword: '방어와 저항' },
  { id: 29, name: '완드 8',         nameEn: 'Eight of Wands',     suit: 'wands',     positive: true,  probability: 74, emoji: '🔥', keyword: '빠른 진전' },
  { id: 30, name: '완드 9',         nameEn: 'Nine of Wands',      suit: 'wands',     positive: false, probability: 42, emoji: '🔥', keyword: '지침과 경계' },
  { id: 31, name: '완드 10',        nameEn: 'Ten of Wands',       suit: 'wands',     positive: false, probability: 34, emoji: '🔥', keyword: '부담과 과부하' },
  { id: 32, name: '완드 페이지',    nameEn: 'Page of Wands',      suit: 'wands',     positive: true,  probability: 60, emoji: '🔥', keyword: '열정적 소식' },
  { id: 33, name: '완드 나이트',    nameEn: 'Knight of Wands',    suit: 'wands',     positive: true,  probability: 66, emoji: '🔥', keyword: '열정적 추구' },
  { id: 34, name: '완드 퀸',        nameEn: 'Queen of Wands',     suit: 'wands',     positive: true,  probability: 70, emoji: '🔥', keyword: '자신감과 매력' },
  { id: 35, name: '완드 킹',        nameEn: 'King of Wands',      suit: 'wands',     positive: true,  probability: 67, emoji: '🔥', keyword: '결단과 리더십' },
  // ══ 컵 (14장) ══════════════════════════════════════════════════
  { id: 36, name: '컵 에이스',      nameEn: 'Ace of Cups',        suit: 'cups',      positive: true,  probability: 82, emoji: '💧', keyword: '새로운 감정' },
  { id: 37, name: '컵 2',           nameEn: 'Two of Cups',        suit: 'cups',      positive: true,  probability: 88, emoji: '💧', keyword: '상호 이끌림' },
  { id: 38, name: '컵 3',           nameEn: 'Three of Cups',      suit: 'cups',      positive: true,  probability: 75, emoji: '💧', keyword: '축하와 재회' },
  { id: 39, name: '컵 4',           nameEn: 'Four of Cups',       suit: 'cups',      positive: false, probability: 35, emoji: '💧', keyword: '무관심과 성찰' },
  { id: 40, name: '컵 5',           nameEn: 'Five of Cups',       suit: 'cups',      positive: false, probability: 28, emoji: '💧', keyword: '상실과 슬픔' },
  { id: 41, name: '컵 6',           nameEn: 'Six of Cups',        suit: 'cups',      positive: true,  probability: 72, emoji: '💧', keyword: '추억과 그리움' },
  { id: 42, name: '컵 7',           nameEn: 'Seven of Cups',      suit: 'cups',      positive: false, probability: 40, emoji: '💧', keyword: '환상과 혼란' },
  { id: 43, name: '컵 8',           nameEn: 'Eight of Cups',      suit: 'cups',      positive: false, probability: 22, emoji: '💧', keyword: '포기와 이별' },
  { id: 44, name: '컵 9',           nameEn: 'Nine of Cups',       suit: 'cups',      positive: true,  probability: 78, emoji: '💧', keyword: '소원 성취' },
  { id: 45, name: '컵 10',          nameEn: 'Ten of Cups',        suit: 'cups',      positive: true,  probability: 85, emoji: '💧', keyword: '완전한 행복' },
  { id: 46, name: '컵 페이지',      nameEn: 'Page of Cups',       suit: 'cups',      positive: true,  probability: 64, emoji: '💧', keyword: '감성적 소식' },
  { id: 47, name: '컵 나이트',      nameEn: 'Knight of Cups',     suit: 'cups',      positive: true,  probability: 72, emoji: '💧', keyword: '낭만적 구애' },
  { id: 48, name: '컵 퀸',          nameEn: 'Queen of Cups',      suit: 'cups',      positive: true,  probability: 68, emoji: '💧', keyword: '공감과 직관' },
  { id: 49, name: '컵 킹',          nameEn: 'King of Cups',       suit: 'cups',      positive: true,  probability: 66, emoji: '💧', keyword: '감정적 성숙' },
  // ══ 소드 (14장) ══════════════════════════════════════════════════
  { id: 50, name: '소드 에이스',    nameEn: 'Ace of Swords',      suit: 'swords',    positive: false, probability: 55, emoji: '⚔️', keyword: '명확한 진실' },
  { id: 51, name: '소드 2',         nameEn: 'Two of Swords',      suit: 'swords',    positive: false, probability: 38, emoji: '⚔️', keyword: '결정 회피' },
  { id: 52, name: '소드 3',         nameEn: 'Three of Swords',    suit: 'swords',    positive: false, probability: 16, emoji: '⚔️', keyword: '상처와 배신' },
  { id: 53, name: '소드 4',         nameEn: 'Four of Swords',     suit: 'swords',    positive: false, probability: 44, emoji: '⚔️', keyword: '휴식과 회복' },
  { id: 54, name: '소드 5',         nameEn: 'Five of Swords',     suit: 'swords',    positive: false, probability: 20, emoji: '⚔️', keyword: '갈등과 패배' },
  { id: 55, name: '소드 6',         nameEn: 'Six of Swords',      suit: 'swords',    positive: false, probability: 48, emoji: '⚔️', keyword: '이행과 전환' },
  { id: 56, name: '소드 7',         nameEn: 'Seven of Swords',    suit: 'swords',    positive: false, probability: 24, emoji: '⚔️', keyword: '기만과 회피' },
  { id: 57, name: '소드 8',         nameEn: 'Eight of Swords',    suit: 'swords',    positive: false, probability: 30, emoji: '⚔️', keyword: '속박과 제한' },
  { id: 58, name: '소드 9',         nameEn: 'Nine of Swords',     suit: 'swords',    positive: false, probability: 22, emoji: '⚔️', keyword: '불안과 고통' },
  { id: 59, name: '소드 10',        nameEn: 'Ten of Swords',      suit: 'swords',    positive: false, probability: 12, emoji: '⚔️', keyword: '완전한 종결' },
  { id: 60, name: '소드 페이지',    nameEn: 'Page of Swords',     suit: 'swords',    positive: false, probability: 44, emoji: '⚔️', keyword: '관찰과 경계' },
  { id: 61, name: '소드 나이트',    nameEn: 'Knight of Swords',   suit: 'swords',    positive: false, probability: 50, emoji: '⚔️', keyword: '충동적 행동' },
  { id: 62, name: '소드 퀸',        nameEn: 'Queen of Swords',    suit: 'swords',    positive: false, probability: 40, emoji: '⚔️', keyword: '독립과 냉철' },
  { id: 63, name: '소드 킹',        nameEn: 'King of Swords',     suit: 'swords',    positive: false, probability: 45, emoji: '⚔️', keyword: '권위와 논리' },
  // ══ 펜타클 (14장) ══════════════════════════════════════════════════
  { id: 64, name: '펜타클 에이스',  nameEn: 'Ace of Pentacles',   suit: 'pentacles', positive: true,  probability: 64, emoji: '💎', keyword: '새로운 기회' },
  { id: 65, name: '펜타클 2',       nameEn: 'Two of Pentacles',   suit: 'pentacles', positive: false, probability: 50, emoji: '💎', keyword: '균형과 조절' },
  { id: 66, name: '펜타클 3',       nameEn: 'Three of Pentacles', suit: 'pentacles', positive: true,  probability: 60, emoji: '💎', keyword: '협력과 노력' },
  { id: 67, name: '펜타클 4',       nameEn: 'Four of Pentacles',  suit: 'pentacles', positive: false, probability: 40, emoji: '💎', keyword: '소유와 집착' },
  { id: 68, name: '펜타클 5',       nameEn: 'Five of Pentacles',  suit: 'pentacles', positive: false, probability: 26, emoji: '💎', keyword: '결핍과 고난' },
  { id: 69, name: '펜타클 6',       nameEn: 'Six of Pentacles',   suit: 'pentacles', positive: true,  probability: 60, emoji: '💎', keyword: '나눔과 균형' },
  { id: 70, name: '펜타클 7',       nameEn: 'Seven of Pentacles', suit: 'pentacles', positive: false, probability: 54, emoji: '💎', keyword: '인내와 기다림' },
  { id: 71, name: '펜타클 8',       nameEn: 'Eight of Pentacles', suit: 'pentacles', positive: true,  probability: 58, emoji: '💎', keyword: '헌신과 성장' },
  { id: 72, name: '펜타클 9',       nameEn: 'Nine of Pentacles',  suit: 'pentacles', positive: true,  probability: 62, emoji: '💎', keyword: '독립과 성공' },
  { id: 73, name: '펜타클 10',      nameEn: 'Ten of Pentacles',   suit: 'pentacles', positive: true,  probability: 72, emoji: '💎', keyword: '안정과 번영' },
  { id: 74, name: '펜타클 페이지',  nameEn: 'Page of Pentacles',  suit: 'pentacles', positive: true,  probability: 55, emoji: '💎', keyword: '배움과 성실' },
  { id: 75, name: '펜타클 나이트',  nameEn: 'Knight of Pentacles',suit: 'pentacles', positive: true,  probability: 58, emoji: '💎', keyword: '신중한 접근' },
  { id: 76, name: '펜타클 퀸',      nameEn: 'Queen of Pentacles', suit: 'pentacles', positive: true,  probability: 65, emoji: '💎', keyword: '현실적 돌봄' },
  { id: 77, name: '펜타클 킹',      nameEn: 'King of Pentacles',  suit: 'pentacles', positive: true,  probability: 65, emoji: '💎', keyword: '안정과 신뢰' },
];

// ── 5 포지션 정보 ─────────────────────────────────────────────────
const POSITIONS = [
  { label: '현재 상황',      icon: '🔮', color: '#a78bfa', desc: '지금 두 사람 사이의 상황과 에너지를 나타냅니다' },
  { label: '재회의 과정',    icon: '💜', color: '#8b5cf6', desc: '그 사람과 다시 이어지기 위해 거쳐야 할 과정입니다' },
  { label: '재회의 결과',    icon: '🌹', color: '#7c3aed', desc: '재회가 이루어졌을 때 두 사람의 미래를 보여줍니다' },
  { label: '새인연의 과정',  icon: '🌟', color: '#f59e0b', desc: '새로운 인연을 만나는 과정에서 겪게 될 일입니다' },
  { label: '새인연의 결과',  icon: '🌸', color: '#fb923c', desc: '새로운 사람과 함께했을 때 펼쳐질 미래입니다' },
];

// ── 앱 상태 ──────────────────────────────────────────────────────────
let selectedCards = [];

// ── 유틸 ─────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = '';
  });
  const el = $(id);
  el.style.display = 'flex';
  el.classList.add('active');
  el.scrollTop = 0;
  window.scrollTo(0, 0);
}

// ── 테마 토글 ─────────────────────────────────────────────────────────
const themeBtn = $('theme-toggle');
const savedTheme = localStorage.getItem('tarot-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
themeBtn.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('tarot-theme', next);
  themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ── Fisher-Yates 셔플 ─────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── 포지션별 카드 해석 생성 ───────────────────────────────────────────
function getPositionReading(card, posIdx) {
  const { keyword, suit, positive } = card;

  const suitFlavor = {
    major:     { domain: '운명적 차원에서',       pos: '강렬한 운명의 힘이',   neg: '운명적인 도전이' },
    cups:      { domain: '감정과 사랑의 영역에서', pos: '따뜻한 감정의 흐름이', neg: '감정적인 혼란이' },
    wands:     { domain: '열정과 의지의 영역에서', pos: '뜨거운 열정이',         neg: '갈등과 충돌이' },
    swords:    { domain: '이성과 생각의 영역에서', pos: '명확한 진실의 힘이',    neg: '날카로운 갈등이' },
    pentacles: { domain: '현실과 안정의 영역에서', pos: '단단한 현실의 토대가',  neg: '현실적 어려움이' },
  };

  const sf = suitFlavor[suit];

  const readings = [
    // 0: 현재 상황
    positive
      ? `지금 두 사람 사이에 '${keyword}'의 에너지가 흐르고 있어요. ${sf.domain} ${sf.pos} 현재 상황을 감싸고 있으며, 어떤 선택을 하든 이 에너지가 큰 영향을 미칠 것입니다.`
      : `지금 이 순간 '${keyword}'의 에너지가 상황을 지배하고 있어요. ${sf.domain} ${sf.neg} 작용하고 있으며, 이 상황을 인식하고 신중하게 방향을 잡는 것이 중요합니다.`,

    // 1: 재회의 과정
    positive
      ? `재회를 향해 나아간다면 '${keyword}'의 에너지가 그 여정을 이끌어줄 것입니다. ${sf.domain} ${sf.pos} 두 사람이 다시 가까워지는 과정을 도와줄 것이에요. 자연스러운 흐름에 몸을 맡겨보세요.`
      : `재회로 가는 길에 '${keyword}'이라는 도전이 기다리고 있어요. ${sf.domain} ${sf.neg} 그 과정을 복잡하게 만들 수 있습니다. 이 장벽을 함께 넘을 준비가 되어있는지 스스로에게 물어보세요.`,

    // 2: 재회의 결과
    positive
      ? `두 사람이 다시 만난다면 '${keyword}'이 그 관계를 빛나게 해줄 것입니다. 과거보다 더 성숙하고 깊은 사랑이 ${sf.domain} 피어날 수 있어요. 재회 후의 미래에 따뜻한 에너지가 흐르고 있습니다.`
      : `재회가 이루어진다 해도 '${keyword}'의 에너지는 여전히 관계 안에 남아있을 수 있어요. ${sf.domain} ${sf.neg} 다시 고개를 들 수 있으니, 과거의 문제를 진심으로 해결하지 않으면 같은 상처를 반복할 수 있습니다.`,

    // 3: 새로운 인연의 과정
    positive
      ? `새로운 사람을 만나는 여정에서 '${keyword}'의 에너지가 함께할 것입니다. ${sf.domain} ${sf.pos} 당신 앞으로 흘러들어오고 있어요. 마음을 열고 새로운 가능성을 받아들일 준비를 해보세요.`
      : `새로운 인연을 찾는 과정에서 '${keyword}'이라는 시련이 있을 수 있어요. ${sf.domain} ${sf.neg} 새로운 시작을 어렵게 만들 수 있지만, 이 과정을 통해 당신이 진정으로 원하는 사랑의 모습을 더 명확히 알게 될 것입니다.`,

    // 4: 새로운 인연의 결과
    positive
      ? `새로운 인연이 이어진다면 '${keyword}'이라는 빛나는 미래가 기다리고 있어요. ${sf.domain} ${sf.pos} 새로운 관계를 탄탄하게 받쳐줄 것입니다. 새로운 사람과의 만남이 삶을 더욱 풍요롭게 만들어줄 수 있습니다.`
      : `새로운 인연도 '${keyword}'의 에너지를 품고 있어요. ${sf.domain} ${sf.neg} 처음에는 어려움이 있을 수 있지만, 이 경험을 통해 더욱 성장하고 결국 진정한 행복을 찾게 될 것입니다.`,
  ];

  return readings[posIdx];
}

// ── 경로 에너지 점수 계산 ──────────────────────────────────────────
function calcPathScore(cards, startIdx, endIdx) {
  const pathCards = cards.slice(startIdx, endIdx + 1);
  const avg = pathCards.reduce((s, c) => s + c.probability, 0) / pathCards.length;
  const posCount = pathCards.filter(c => c.positive).length;
  const modifier = (posCount - 1) * 5;
  return Math.max(1, Math.min(99, Math.round(avg + modifier)));
}

function getPathColor(score) {
  if (score <= 30) return '#f87171';
  if (score <= 55) return '#fb923c';
  if (score <= 75) return '#facc15';
  return '#4ade80';
}

// ── 종합 해석 및 타로 추천 ─────────────────────────────────────────
function getOverallReading(cards, reunionScore, newLoveScore) {
  const statusCard = cards[0];
  const diff = reunionScore - newLoveScore;

  const cardNames = cards.map((c, i) => `[${POSITIONS[i].label}] ${c.name}`).join(', ');
  let msg = `선택하신 카드: ${cardNames}\n\n`;

  // 현재 상황 해석
  msg += `현재 상황 카드 '${statusCard.name}'(${statusCard.keyword})은 지금 두 사람의 에너지를 보여줍니다.\n\n`;

  // 재회 경로 해석
  const reunionCards = cards.slice(1, 3);
  const reunionPos = reunionCards.filter(c => c.positive).length;
  msg += `💜 재회 경로 (에너지 ${reunionScore}%): `;
  if (reunionPos === 2) {
    msg += `재회를 향한 길에 강한 긍정적 에너지가 흐르고 있어요. '${reunionCards[0].name}'과 '${reunionCards[1].name}'이 함께 재회를 지지하고 있습니다.\n\n`;
  } else if (reunionPos === 0) {
    msg += `재회로 가는 길에 '${reunionCards[0].name}'과 '${reunionCards[1].name}'이 나타내는 도전들이 있어요. 두 사람 모두 큰 변화가 필요한 상황입니다.\n\n`;
  } else {
    const posCard = reunionCards.find(c => c.positive);
    const negCard = reunionCards.find(c => !c.positive);
    msg += `'${posCard.name}'의 긍정적 에너지가 있지만 '${negCard.name}'의 도전도 함께 있어요. 노력 여하에 따라 결과가 달라질 수 있습니다.\n\n`;
  }

  // 새인연 경로 해석
  const newLoveCards = cards.slice(3, 5);
  const newLovePos = newLoveCards.filter(c => c.positive).length;
  msg += `🌟 새로운 인연 경로 (에너지 ${newLoveScore}%): `;
  if (newLovePos === 2) {
    msg += `새로운 만남의 길에 빛나는 에너지가 가득해요. '${newLoveCards[0].name}'과 '${newLoveCards[1].name}'이 새로운 사랑의 가능성을 열어주고 있습니다.\n\n`;
  } else if (newLovePos === 0) {
    msg += `새로운 인연을 찾는 과정에도 '${newLoveCards[0].name}'과 '${newLoveCards[1].name}'의 도전이 있어요. 먼저 자신을 치유하는 시간이 필요할 수 있습니다.\n\n`;
  } else {
    const posCard = newLoveCards.find(c => c.positive);
    const negCard = newLoveCards.find(c => !c.positive);
    msg += `'${posCard.name}'의 가능성이 보이지만 '${negCard.name}'이 나타내는 어려움도 있어요. 준비가 되면 자연스럽게 새로운 인연이 찾아올 것입니다.\n\n`;
  }

  // 최종 추천
  const absDiff = Math.abs(diff);
  if (absDiff < 8) {
    msg += `타로는 두 길의 에너지가 비슷하다고 말하고 있어요. 어느 쪽을 선택하든 당신의 진심과 노력이 가장 중요합니다. 결국 가장 중요한 것은 지금 당신의 마음이 무엇을 원하는지입니다.`;
  } else if (diff > 0) {
    if (reunionScore > 70) {
      msg += `타로는 재회를 강하게 지지하고 있어요. 두 사람 사이의 인연이 아직 끝나지 않았습니다. 용기를 내어 그 사람에게 진심을 전해보세요.`;
    } else {
      msg += `타로는 재회 쪽으로 에너지가 더 강하다고 말하고 있어요. 하지만 무작정 달려가기보다는 충분히 준비하고 때를 기다리는 것이 현명합니다.`;
    }
  } else {
    if (newLoveScore > 70) {
      msg += `타로는 새로운 인연을 강하게 지지하고 있어요. 지금 당신 앞에 새로운 가능성의 문이 열리고 있습니다. 마음을 열고 새로운 만남을 받아들여보세요.`;
    } else {
      msg += `타로는 새로운 인연 쪽으로 에너지가 더 강하다고 말하고 있어요. 과거를 아름다운 추억으로 간직하되, 새로운 가능성에 마음을 열어보는 것을 권합니다.`;
    }
  }

  return msg;
}

function getVerdictInfo(reunionScore, newLoveScore) {
  const diff = reunionScore - newLoveScore;
  const absDiff = Math.abs(diff);

  if (absDiff < 8) {
    return { winner: 'tie', icon: '⚖️', label: '두 길의 에너지가 비슷해요', color: '#a78bfa', sub: '어느 쪽이든 당신의 선택과 노력이 운명을 만듭니다' };
  }
  if (diff > 0) {
    return { winner: 'reunion', icon: '💜', label: '타로가 추천하는 길: 재회', color: '#8b5cf6', sub: `재회 에너지가 ${absDiff}% 더 강해요` };
  }
  return { winner: 'newlove', icon: '🌟', label: '타로가 추천하는 길: 새로운 인연', color: '#f59e0b', sub: `새로운 인연 에너지가 ${absDiff}% 더 강해요` };
}

// ── 카드 그리드 렌더링 ─────────────────────────────────────────────
function renderGrid() {
  const grid = $('cards-grid');
  grid.innerHTML = '';
  const shuffled = shuffle(CARDS);

  shuffled.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card-item';
    el.dataset.id = card.id;

    const isSelected = !!selectedCards.find(c => c.id === card.id);
    if (!isSelected) {
      const rot = (Math.random() * 10 - 5).toFixed(1);
      el.style.setProperty('--rot', `${rot}deg`);
    }
    if (isSelected) el.classList.add('flipped', 'selected');

    el.innerHTML = `
      <div class="card-inner">
        <div class="card-back card-back-yangja"></div>
        <div class="card-front suit-${card.suit}">
          <span class="card-emoji">${card.emoji}</span>
          <span class="card-name">${card.name}</span>
          <span class="card-nameen">${card.nameEn}</span>
        </div>
      </div>
    `;
    el.addEventListener('click', () => toggleCard(card, el));
    grid.appendChild(el);
  });
}

// ── 카드 선택/해제 ─────────────────────────────────────────────────
function toggleCard(card, el) {
  const idx = selectedCards.findIndex(c => c.id === card.id);

  if (idx !== -1) {
    selectedCards.splice(idx, 1);
    el.classList.remove('selected', 'flipped');
  } else {
    if (selectedCards.length >= 5) {
      el.animate([
        { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' },
        { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' },
        { transform: 'translateX(0)' }
      ], { duration: 300, easing: 'ease' });
      return;
    }
    selectedCards.push(card);
    el.classList.add('flipped', 'selected');
  }

  updateSelectionUI();
}

function updateSelectionUI() {
  const n = selectedCards.length;
  $('sel-count').textContent = `${n} / 5`;

  for (let i = 0; i < 5; i++) {
    const slot = $(`prev-${i}`);
    if (selectedCards[i]) {
      const c = selectedCards[i];
      const pos = POSITIONS[i];
      slot.className = `preview-slot filled suit-${c.suit}`;
      slot.innerHTML = `
        <div class="mini-pos-label" style="color:${pos.color}">${pos.icon}</div>
        <div class="mini-card">
          <span class="mini-emoji">${c.emoji}</span>
          <span class="mini-name">${c.name}</span>
        </div>`;
    } else {
      const pos = POSITIONS[i];
      slot.className = 'preview-slot';
      slot.innerHTML = `
        <div class="mini-pos-label" style="color:${pos.color};opacity:0.5">${pos.icon}</div>
        <span class="prev-empty">?</span>`;
    }
  }

  $('btn-result').disabled = n < 5;
}

// ── 결과 화면 렌더링 ──────────────────────────────────────────────
function showResult() {
  const reunionScore = calcPathScore(selectedCards, 1, 2);
  const newLoveScore = calcPathScore(selectedCards, 3, 4);
  const verdict = getVerdictInfo(reunionScore, newLoveScore);

  showScreen('screen-result');

  // ── 현재 상황 카드 ──
  const statusCard = selectedCards[0];
  $('status-card').innerHTML = `
    <div class="result-card result-card-status suit-${statusCard.suit}">
      <div class="pos-tag" style="background: ${POSITIONS[0].color}22; color: ${POSITIONS[0].color}; border-color: ${POSITIONS[0].color}44">
        ${POSITIONS[0].icon} ${POSITIONS[0].label}
      </div>
      <div class="result-card-emoji">${statusCard.emoji}</div>
      <div class="result-card-name">${statusCard.name}</div>
      <div class="result-card-nameen">${statusCard.nameEn}</div>
      <span class="result-card-badge ${statusCard.positive ? 'badge-pos' : 'badge-neg'}">${statusCard.keyword}</span>
    </div>
  `;

  // ── 두 경로 카드 ──
  function renderPathCards(containerEl, startIdx, endIdx) {
    containerEl.innerHTML = selectedCards.slice(startIdx, endIdx + 1).map((c, rel) => {
      const posIdx = startIdx + rel;
      const pos = POSITIONS[posIdx];
      return `
        <div class="result-card suit-${c.suit}">
          <div class="pos-tag" style="background: ${pos.color}22; color: ${pos.color}; border-color: ${pos.color}44">
            ${pos.icon} ${pos.label}
          </div>
          <div class="result-card-emoji">${c.emoji}</div>
          <div class="result-card-name">${c.name}</div>
          <div class="result-card-nameen">${c.nameEn}</div>
          <span class="result-card-badge ${c.positive ? 'badge-pos' : 'badge-neg'}">${c.keyword}</span>
        </div>
      `;
    }).join('');
  }
  renderPathCards($('reunion-cards'), 1, 2);
  renderPathCards($('newlove-cards'), 3, 4);

  // ── 에너지 바 애니메이션 ──
  function animateBar(barEl, pctEl, targetScore, color) {
    barEl.style.background = `linear-gradient(90deg, ${color}88, ${color})`;
    let cur = 0;
    const step = () => {
      if (cur < targetScore) {
        cur = Math.min(cur + 2, targetScore);
        barEl.style.width = `${cur}%`;
        pctEl.textContent = `${cur}%`;
        pctEl.style.color = color;
        requestAnimationFrame(step);
      }
    };
    setTimeout(() => requestAnimationFrame(step), 300);
  }

  const rColor = getPathColor(reunionScore);
  const nColor = getPathColor(newLoveScore);
  animateBar($('reunion-bar'), $('reunion-pct'), reunionScore, rColor);
  animateBar($('newlove-bar'), $('newlove-pct'), newLoveScore, nColor);

  // ── 판정 박스 ──
  $('verdict-box').innerHTML = `
    <div class="verdict-inner" style="border-color: ${verdict.color}55; background: ${verdict.color}11">
      <span class="verdict-icon">${verdict.icon}</span>
      <div class="verdict-text">
        <div class="verdict-label" style="color: ${verdict.color}">${verdict.label}</div>
        <div class="verdict-sub">${verdict.sub}</div>
      </div>
    </div>
  `;

  // ── 카드별 해석 ──
  $('card-readings').innerHTML = selectedCards.map((c, i) => {
    const pos = POSITIONS[i];
    return `
      <div class="reading-item">
        <div class="reading-icon suit-${c.suit}">
          <span class="r-emoji">${c.emoji}</span>
          <span class="r-mini">${c.name}</span>
        </div>
        <div class="reading-body">
          <div class="reading-pos-label" style="color: ${pos.color}">${pos.icon} ${pos.label}</div>
          <div class="reading-name">${c.name} <small style="opacity:0.6;font-size:0.75em">${c.nameEn}</small></div>
          <span class="reading-keyword ${c.positive ? 'kw-pos' : 'kw-neg'}">${c.keyword}</span>
          <div class="reading-meaning">${getPositionReading(c, i)}</div>
        </div>
      </div>
    `;
  }).join('');

  // ── 종합 해석 ──
  $('overall').textContent = getOverallReading(selectedCards, reunionScore, newLoveScore);
}

// ── 카카오톡 공유 ─────────────────────────────────────────────────
$('btn-share').addEventListener('click', async () => {
  const reunionScore = calcPathScore(selectedCards, 1, 2);
  const newLoveScore = calcPathScore(selectedCards, 3, 4);
  const verdict = getVerdictInfo(reunionScore, newLoveScore);
  const cardNames = selectedCards.map((c, i) => `${POSITIONS[i].label}: ${c.name}`).join('\n');
  const shareText = `🔮 재회 vs 새로운 인연 양자택일 타로!\n\n${cardNames}\n\n💜 재회 에너지: ${reunionScore}%\n🌟 새인연 에너지: ${newLoveScore}%\n\n${verdict.label}\n\n당신도 확인해보세요!`;
  const shareUrl = location.href;

  if (navigator.share) {
    try {
      await navigator.share({ title: '재회 vs 새로운 인연 — 양자택일 타로', text: shareText, url: shareUrl });
    } catch { /* 취소 */ }
  } else {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      const msg = $('share-msg');
      msg.textContent = '✅ 링크가 복사되었어요! 카카오톡에 붙여넣기 하세요.';
      msg.classList.remove('hidden');
      setTimeout(() => msg.classList.add('hidden'), 3000);
    } catch {
      const msg = $('share-msg');
      msg.textContent = `공유할 주소: ${shareUrl}`;
      msg.classList.remove('hidden');
    }
  }
});

// ── 이벤트 연결 ──────────────────────────────────────────────────
$('btn-start').addEventListener('click', () => {
  selectedCards = [];
  renderGrid();
  updateSelectionUI();
  showScreen('screen-select');
});

$('btn-back').addEventListener('click', () => showScreen('screen-welcome'));

$('btn-result').addEventListener('click', showResult);

$('btn-restart').addEventListener('click', () => {
  selectedCards = [];
  renderGrid();
  updateSelectionUI();
  showScreen('screen-select');
});

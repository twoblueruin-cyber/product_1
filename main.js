// ── 78장 유니버셜 타로카드 데이터 ──────────────────────────────────────
// positive: 재회 관점에서 긍정/부정  probability: 1~100
const CARDS = [
  // ══ 메이저 아르카나 (22장) ══════════════════════════════════════════
  { id:  0, name: '바보',           nameEn: 'The Fool',           suit: 'major',     positive: true,  probability: 52, emoji: '🃏', keyword: '새로운 시작', meaning: '예상치 못한 방식으로 재회가 찾아올 수 있어요. 두 사람 모두 과거를 내려놓고 새롭게 시작할 준비가 될 수 있습니다.' },
  { id:  1, name: '마법사',         nameEn: 'The Magician',       suit: 'major',     positive: true,  probability: 68, emoji: '🪄', keyword: '의지와 실현', meaning: '강한 의지만 있다면 재회를 현실로 만들 수 있어요. 지금이 적극적으로 행동해야 할 시점입니다.' },
  { id:  2, name: '여사제',         nameEn: 'The High Priestess', suit: 'major',     positive: false, probability: 42, emoji: '🌙', keyword: '기다림과 직관', meaning: '지금은 조용히 기다려야 할 때예요. 상대방의 마음이 아직 정해지지 않았을 가능성이 높습니다.' },
  { id:  3, name: '여황제',         nameEn: 'The Empress',        suit: 'major',     positive: true,  probability: 74, emoji: '🌹', keyword: '풍요로운 사랑', meaning: '따뜻하고 포용적인 사랑이 재회를 이끌어줄 것입니다. 서로에 대한 감정이 여전히 살아있어요.' },
  { id:  4, name: '황제',           nameEn: 'The Emperor',        suit: 'major',     positive: false, probability: 48, emoji: '👑', keyword: '통제와 자존심', meaning: '감정보다 현실적인 판단을 우선시하는 경향이 있어요. 재회를 위해서는 자존심을 내려놓는 것이 필요합니다.' },
  { id:  5, name: '교황',           nameEn: 'The Hierophant',     suit: 'major',     positive: true,  probability: 63, emoji: '⛪', keyword: '전통과 약속', meaning: '두 사람 사이의 깊은 인연이 재회를 가능하게 합니다. 전통적인 방식으로 진심을 표현해보세요.' },
  { id:  6, name: '연인',           nameEn: 'The Lovers',         suit: 'major',     positive: true,  probability: 90, emoji: '💕', keyword: '운명적 사랑', meaning: '재회에 가장 강력한 카드! 두 사람의 감정이 여전히 강하게 이어져 있으며 재회 가능성이 매우 높습니다.' },
  { id:  7, name: '전차',           nameEn: 'The Chariot',        suit: 'major',     positive: true,  probability: 70, emoji: '🏆', keyword: '의지와 전진', meaning: '강한 의지를 갖고 앞으로 나아가면 재회를 이룰 수 있어요. 포기하지 않는 마음이 중요합니다.' },
  { id:  8, name: '힘',             nameEn: 'Strength',           suit: 'major',     positive: true,  probability: 71, emoji: '🦁', keyword: '인내와 용기', meaning: '부드러운 인내심으로 상대방의 마음을 열 수 있어요. 조급해하지 말고 꾸준히 신뢰를 쌓아가세요.' },
  { id:  9, name: '은둔자',         nameEn: 'The Hermit',         suit: 'major',     positive: false, probability: 28, emoji: '🕯️', keyword: '고독과 내면', meaning: '상대방이 지금 혼자만의 시간이 필요한 상태예요. 당분간 거리를 두고 기다려주는 것이 현명합니다.' },
  { id: 10, name: '운명의 수레바퀴', nameEn: 'Wheel of Fortune',  suit: 'major',     positive: true,  probability: 65, emoji: '☸️', keyword: '운명의 전환', meaning: '운명이 두 사람을 다시 이어줄 시기가 다가오고 있어요. 뜻밖의 계기로 재회가 이루어질 수 있습니다.' },
  { id: 11, name: '정의',           nameEn: 'Justice',            suit: 'major',     positive: false, probability: 50, emoji: '⚖️', keyword: '인과응보', meaning: '과거의 행동에 대한 결과가 나타나는 시기예요. 솔직하고 진실한 소통이 재회의 열쇠입니다.' },
  { id: 12, name: '매달린 남자',    nameEn: 'The Hanged Man',     suit: 'major',     positive: false, probability: 32, emoji: '⌛', keyword: '정체와 희생', meaning: '현재 상황이 정체되어 있어요. 새로운 관점이나 희생 없이는 재회가 어려울 수 있습니다.' },
  { id: 13, name: '죽음',           nameEn: 'Death',              suit: 'major',     positive: false, probability: 22, emoji: '💀', keyword: '끝과 변화', meaning: '이 관계는 큰 변화를 필요로 해요. 두 사람 모두 근본적으로 달라지지 않으면 재회가 어렵습니다.' },
  { id: 14, name: '절제',           nameEn: 'Temperance',         suit: 'major',     positive: true,  probability: 62, emoji: '🌈', keyword: '균형과 치유', meaning: '시간이 상처를 치유하고 있어요. 서두르지 않고 균형 잡힌 접근을 한다면 재회가 가능합니다.' },
  { id: 15, name: '악마',           nameEn: 'The Devil',          suit: 'major',     positive: false, probability: 27, emoji: '😈', keyword: '집착과 속박', meaning: '건강하지 않은 집착이나 미련이 관계를 복잡하게 만들고 있어요. 서로에게 진정한 자유가 필요합니다.' },
  { id: 16, name: '탑',             nameEn: 'The Tower',          suit: 'major',     positive: false, probability: 15, emoji: '⚡', keyword: '급격한 붕괴', meaning: '두 사람 사이에 큰 충격이나 변화가 있었어요. 현재로서는 재회보다 각자의 회복이 우선입니다.' },
  { id: 17, name: '별',             nameEn: 'The Star',           suit: 'major',     positive: true,  probability: 80, emoji: '⭐', keyword: '희망과 치유', meaning: '희망의 빛이 보이기 시작해요. 상처가 치유되면서 재회의 가능성이 점점 높아지고 있습니다.' },
  { id: 18, name: '달',             nameEn: 'The Moon',           suit: 'major',     positive: false, probability: 33, emoji: '🌕', keyword: '불확실과 혼란', meaning: '상황이 불명확하고 감정이 혼란스러워요. 현실을 직시하기 전까지는 재회 여부를 판단하기 어렵습니다.' },
  { id: 19, name: '태양',           nameEn: 'The Sun',            suit: 'major',     positive: true,  probability: 86, emoji: '☀️', keyword: '기쁨과 성공', meaning: '밝고 긍정적인 에너지가 재회를 향해 흐르고 있어요. 두 사람 모두 행복한 재결합을 원할 가능성이 높습니다.' },
  { id: 20, name: '심판',           nameEn: 'Judgement',          suit: 'major',     positive: true,  probability: 76, emoji: '📯', keyword: '부활과 각성', meaning: '과거를 청산하고 새롭게 시작할 기회가 왔어요. 진심 어린 사과와 용서가 재회를 만들어줄 것입니다.' },
  { id: 21, name: '세계',           nameEn: 'The World',          suit: 'major',     positive: true,  probability: 83, emoji: '🌍', keyword: '완성과 성취', meaning: '두 사람의 관계가 완전한 형태로 재결합할 가능성이 높아요. 모든 것이 올바른 방향으로 흘러가고 있습니다.' },

  // ══ 완드 (14장) ══════════════════════════════════════════════════
  { id: 22, name: '완드 에이스',    nameEn: 'Ace of Wands',       suit: 'wands',     positive: true,  probability: 70, emoji: '🔥', keyword: '열정의 시작', meaning: '새로운 열정과 에너지가 재회를 향해 타오르고 있어요. 지금 행동을 시작하기에 좋은 시기입니다.' },
  { id: 23, name: '완드 2',         nameEn: 'Two of Wands',       suit: 'wands',     positive: true,  probability: 64, emoji: '🔥', keyword: '계획과 비전', meaning: '미래를 함께 꿈꾸는 마음이 아직 남아있어요. 재회 후 함께할 미래를 그려보는 것이 도움이 됩니다.' },
  { id: 24, name: '완드 3',         nameEn: 'Three of Wands',     suit: 'wands',     positive: true,  probability: 67, emoji: '🔥', keyword: '기회 포착', meaning: '재회의 기회가 서서히 만들어지고 있어요. 멀리서 지켜보며 타이밍을 기다리는 것이 중요합니다.' },
  { id: 25, name: '완드 4',         nameEn: 'Four of Wands',      suit: 'wands',     positive: true,  probability: 78, emoji: '🔥', keyword: '축하와 귀환', meaning: '집으로 돌아오는 것을 상징하는 카드예요. 재회 후 안정적이고 행복한 관계를 맺을 수 있을 것입니다.' },
  { id: 26, name: '완드 5',         nameEn: 'Five of Wands',      suit: 'wands',     positive: false, probability: 35, emoji: '🔥', keyword: '갈등과 경쟁', meaning: '아직 두 사람 사이에 해결되지 않은 갈등이 남아있어요. 먼저 근본적인 문제를 해결해야 합니다.' },
  { id: 27, name: '완드 6',         nameEn: 'Six of Wands',       suit: 'wands',     positive: true,  probability: 73, emoji: '🔥', keyword: '승리와 귀환', meaning: '당당하게 돌아오는 에너지를 가진 카드예요. 자신감을 갖고 연락한다면 좋은 반응을 얻을 수 있습니다.' },
  { id: 28, name: '완드 7',         nameEn: 'Seven of Wands',     suit: 'wands',     positive: false, probability: 44, emoji: '🔥', keyword: '방어와 저항', meaning: '상대방이 아직 마음의 문을 열지 않은 상태예요. 억지로 접근하기보다 스스로를 발전시키는 것이 좋습니다.' },
  { id: 29, name: '완드 8',         nameEn: 'Eight of Wands',     suit: 'wands',     positive: true,  probability: 74, emoji: '🔥', keyword: '빠른 진전', meaning: '상황이 빠르게 전개될 것 같아요. 기다리던 연락이나 만남이 곧 이루어질 가능성이 높습니다.' },
  { id: 30, name: '완드 9',         nameEn: 'Nine of Wands',      suit: 'wands',     positive: false, probability: 42, emoji: '🔥', keyword: '지침과 경계', meaning: '두 사람 모두 지쳐있는 상태예요. 서로에게 충분한 회복 시간이 필요합니다.' },
  { id: 31, name: '완드 10',        nameEn: 'Ten of Wands',       suit: 'wands',     positive: false, probability: 34, emoji: '🔥', keyword: '부담과 과부하', meaning: '재회를 원하지만 현실적인 부담감이 너무 커요. 당장 재회보다는 각자의 짐을 내려놓는 것이 먼저입니다.' },
  { id: 32, name: '완드 페이지',    nameEn: 'Page of Wands',      suit: 'wands',     positive: true,  probability: 60, emoji: '🔥', keyword: '열정적 소식', meaning: '열정적인 소식이나 연락이 올 수 있어요. 새로운 시작에 대한 설레는 에너지가 느껴집니다.' },
  { id: 33, name: '완드 나이트',    nameEn: 'Knight of Wands',    suit: 'wands',     positive: true,  probability: 66, emoji: '🔥', keyword: '열정적 추구', meaning: '재회를 향해 열정적으로 나아가는 에너지가 있어요. 다소 충동적일 수 있으니 신중하게 행동하세요.' },
  { id: 34, name: '완드 퀸',        nameEn: 'Queen of Wands',     suit: 'wands',     positive: true,  probability: 70, emoji: '🔥', keyword: '자신감과 매력', meaning: '자신감 넘치는 매력이 상대방을 끌어당겨요. 스스로를 빛나게 가꾸면 재회 가능성이 높아집니다.' },
  { id: 35, name: '완드 킹',        nameEn: 'King of Wands',      suit: 'wands',     positive: true,  probability: 67, emoji: '🔥', keyword: '결단과 리더십', meaning: '결단력 있는 행동이 재회를 만들어낼 수 있어요. 주도적으로 움직이는 것이 효과적입니다.' },

  // ══ 컵 (14장) ══════════════════════════════════════════════════
  { id: 36, name: '컵 에이스',      nameEn: 'Ace of Cups',        suit: 'cups',      positive: true,  probability: 82, emoji: '💧', keyword: '새로운 감정', meaning: '감정의 새로운 시작을 알리는 카드예요. 두 사람 모두 서로를 향한 감정이 다시 샘솟고 있습니다.' },
  { id: 37, name: '컵 2',           nameEn: 'Two of Cups',        suit: 'cups',      positive: true,  probability: 88, emoji: '💧', keyword: '상호 이끌림', meaning: '재회에 가장 좋은 카드 중 하나! 두 사람이 서로를 향한 감정이 균형을 이루며 재회를 강하게 암시합니다.' },
  { id: 38, name: '컵 3',           nameEn: 'Three of Cups',      suit: 'cups',      positive: true,  probability: 75, emoji: '💧', keyword: '축하와 재회', meaning: '기쁜 재결합을 축하하는 에너지가 느껴져요. 주변의 도움이나 어떤 계기로 자연스럽게 재회할 수 있습니다.' },
  { id: 39, name: '컵 4',           nameEn: 'Four of Cups',       suit: 'cups',      positive: false, probability: 35, emoji: '💧', keyword: '무관심과 성찰', meaning: '상대방이 현재 관계에 대해 무관심하거나 지쳐있는 상태예요. 강하게 어필하는 것은 역효과가 날 수 있습니다.' },
  { id: 40, name: '컵 5',           nameEn: 'Five of Cups',       suit: 'cups',      positive: false, probability: 28, emoji: '💧', keyword: '상실과 슬픔', meaning: '두 사람 모두 이별의 슬픔을 느끼고 있어요. 아직 감정의 회복이 필요한 시기입니다.' },
  { id: 41, name: '컵 6',           nameEn: 'Six of Cups',        suit: 'cups',      positive: true,  probability: 72, emoji: '💧', keyword: '추억과 그리움', meaning: '아름다운 추억이 재회를 이끌어줄 수 있어요. 함께했던 행복한 순간들이 두 사람을 다시 가깝게 할 것입니다.' },
  { id: 42, name: '컵 7',           nameEn: 'Seven of Cups',      suit: 'cups',      positive: false, probability: 40, emoji: '💧', keyword: '환상과 혼란', meaning: '감정이 혼란스럽고 현실을 직시하지 못하고 있어요. 이상과 현실의 차이를 인식하는 것이 먼저입니다.' },
  { id: 43, name: '컵 8',           nameEn: 'Eight of Cups',      suit: 'cups',      positive: false, probability: 22, emoji: '💧', keyword: '포기와 이별', meaning: '상대방이 이 관계를 뒤로하고 떠나는 에너지가 강해요. 재회보다는 자신의 성장에 집중하는 것이 좋습니다.' },
  { id: 44, name: '컵 9',           nameEn: 'Nine of Cups',       suit: 'cups',      positive: true,  probability: 78, emoji: '💧', keyword: '소원 성취', meaning: '간절히 바라는 재회가 이루어질 가능성이 높아요. 마음의 소원이 이루어지는 행운의 카드입니다.' },
  { id: 45, name: '컵 10',          nameEn: 'Ten of Cups',        suit: 'cups',      positive: true,  probability: 85, emoji: '💧', keyword: '완전한 행복', meaning: '완전한 감정적 행복과 재결합을 나타내요. 두 사람이 다시 만나 행복한 미래를 함께 그릴 수 있습니다.' },
  { id: 46, name: '컵 페이지',      nameEn: 'Page of Cups',       suit: 'cups',      positive: true,  probability: 64, emoji: '💧', keyword: '감성적 소식', meaning: '달콤하고 감성적인 연락이나 소식이 올 수 있어요. 진심 어린 감정 표현이 재회의 문을 열 것입니다.' },
  { id: 47, name: '컵 나이트',      nameEn: 'Knight of Cups',     suit: 'cups',      positive: true,  probability: 72, emoji: '💧', keyword: '낭만적 구애', meaning: '낭만적이고 감성적인 방식으로 재회가 이루어질 수 있어요. 진심을 담은 고백이 효과적입니다.' },
  { id: 48, name: '컵 퀸',          nameEn: 'Queen of Cups',      suit: 'cups',      positive: true,  probability: 68, emoji: '💧', keyword: '공감과 직관', meaning: '감정에 민감하고 공감 능력이 뛰어나요. 상대방의 감정을 세심하게 배려한다면 재회가 가능합니다.' },
  { id: 49, name: '컵 킹',          nameEn: 'King of Cups',       suit: 'cups',      positive: true,  probability: 66, emoji: '💧', keyword: '감정적 성숙', meaning: '감정적으로 성숙하고 안정된 관계가 가능해요. 두 사람 모두 더 성숙해진 모습으로 재회할 수 있습니다.' },

  // ══ 소드 (14장) ══════════════════════════════════════════════════
  { id: 50, name: '소드 에이스',    nameEn: 'Ace of Swords',      suit: 'swords',    positive: false, probability: 55, emoji: '⚔️', keyword: '명확한 진실', meaning: '냉철한 진실과 명확한 소통이 필요해요. 솔직하게 감정을 털어놓는다면 재회의 실마리를 찾을 수 있습니다.' },
  { id: 51, name: '소드 2',         nameEn: 'Two of Swords',      suit: 'swords',    positive: false, probability: 38, emoji: '⚔️', keyword: '결정 회피', meaning: '두 사람 모두 결정을 내리지 못하고 있어요. 눈을 가린 채 외면하지 말고 현실을 직시해야 합니다.' },
  { id: 52, name: '소드 3',         nameEn: 'Three of Swords',    suit: 'swords',    positive: false, probability: 16, emoji: '⚔️', keyword: '상처와 배신', meaning: '깊은 감정적 상처가 있어요. 재회 전에 먼저 이 상처를 충분히 치유하는 시간이 필요합니다.' },
  { id: 53, name: '소드 4',         nameEn: 'Four of Swords',     suit: 'swords',    positive: false, probability: 44, emoji: '⚔️', keyword: '휴식과 회복', meaning: '지금은 재회보다 휴식이 필요한 시기예요. 충분한 회복 후에 다시 생각해보는 것이 좋습니다.' },
  { id: 54, name: '소드 5',         nameEn: 'Five of Swords',     suit: 'swords',    positive: false, probability: 20, emoji: '⚔️', keyword: '갈등과 패배', meaning: '승패에 집착하는 관계가 서로를 힘들게 했어요. 진심 어린 화해 없이는 재회가 어렵습니다.' },
  { id: 55, name: '소드 6',         nameEn: 'Six of Swords',      suit: 'swords',    positive: false, probability: 48, emoji: '⚔️', keyword: '이행과 전환', meaning: '상처로부터 회복하며 새로운 곳으로 나아가는 중이에요. 재회 가능성은 낮지 않지만 시간이 필요합니다.' },
  { id: 56, name: '소드 7',         nameEn: 'Seven of Swords',    suit: 'swords',    positive: false, probability: 24, emoji: '⚔️', keyword: '기만과 회피', meaning: '진실하지 못한 태도가 관계를 어렵게 만들고 있어요. 솔직함 없이는 건강한 재회가 불가능합니다.' },
  { id: 57, name: '소드 8',         nameEn: 'Eight of Swords',    suit: 'swords',    positive: false, probability: 30, emoji: '⚔️', keyword: '속박과 제한', meaning: '두려움과 제한이 재회를 막고 있어요. 스스로 만든 울타리를 벗어나는 용기가 필요합니다.' },
  { id: 58, name: '소드 9',         nameEn: 'Nine of Swords',     suit: 'swords',    positive: false, probability: 22, emoji: '⚔️', keyword: '불안과 고통', meaning: '과도한 불안과 걱정이 앞을 막고 있어요. 마음을 안정시키지 않으면 재회가 어렵습니다.' },
  { id: 59, name: '소드 10',        nameEn: 'Ten of Swords',      suit: 'swords',    positive: false, probability: 12, emoji: '⚔️', keyword: '완전한 종결', meaning: '관계가 끝난 것을 받아들여야 할 시기일 수 있어요. 재회보다는 새로운 시작을 준비하는 것이 현명할 수 있습니다.' },
  { id: 60, name: '소드 페이지',    nameEn: 'Page of Swords',     suit: 'swords',    positive: false, probability: 44, emoji: '⚔️', keyword: '관찰과 경계', meaning: '상황을 예의주시하며 조심스럽게 접근해야 해요. 말보다는 행동으로 신뢰를 쌓는 것이 중요합니다.' },
  { id: 61, name: '소드 나이트',    nameEn: 'Knight of Swords',   suit: 'swords',    positive: false, probability: 50, emoji: '⚔️', keyword: '충동적 행동', meaning: '충동적이고 빠른 결정이 상황을 복잡하게 만들 수 있어요. 신중하게 접근해야 합니다.' },
  { id: 62, name: '소드 퀸',        nameEn: 'Queen of Swords',    suit: 'swords',    positive: false, probability: 40, emoji: '⚔️', keyword: '독립과 냉철', meaning: '감정보다 이성이 앞서는 상태예요. 재회를 위해서는 마음의 문을 조금 더 열 필요가 있습니다.' },
  { id: 63, name: '소드 킹',        nameEn: 'King of Swords',     suit: 'swords',    positive: false, probability: 45, emoji: '⚔️', keyword: '권위와 논리', meaning: '이성적인 판단이 감정을 압도하고 있어요. 재회보다는 현실적인 결론을 내리려 할 수 있습니다.' },

  // ══ 펜타클 (14장) ══════════════════════════════════════════════════
  { id: 64, name: '펜타클 에이스',  nameEn: 'Ace of Pentacles',   suit: 'pentacles', positive: true,  probability: 64, emoji: '💎', keyword: '새로운 기회', meaning: '새로운 현실적 기회가 찾아올 수 있어요. 안정적이고 실용적인 방식으로 재회를 접근해보세요.' },
  { id: 65, name: '펜타클 2',       nameEn: 'Two of Pentacles',   suit: 'pentacles', positive: false, probability: 50, emoji: '💎', keyword: '균형과 조절', meaning: '많은 것을 동시에 처리하느라 바쁜 상태예요. 현재 상황이 안정되면 재회에 대해 생각해볼 수 있습니다.' },
  { id: 66, name: '펜타클 3',       nameEn: 'Three of Pentacles', suit: 'pentacles', positive: true,  probability: 60, emoji: '💎', keyword: '협력과 노력', meaning: '두 사람이 함께 노력한다면 좋은 관계를 다시 만들 수 있어요. 꾸준한 노력이 재회를 가능하게 합니다.' },
  { id: 67, name: '펜타클 4',       nameEn: 'Four of Pentacles',  suit: 'pentacles', positive: false, probability: 40, emoji: '💎', keyword: '소유와 집착', meaning: '지나친 집착이나 통제욕이 관계를 힘들게 했을 수 있어요. 상대방에게 자유를 주는 것이 필요합니다.' },
  { id: 68, name: '펜타클 5',       nameEn: 'Five of Pentacles',  suit: 'pentacles', positive: false, probability: 26, emoji: '💎', keyword: '결핍과 고난', meaning: '현실적인 어려움이 재회를 방해하고 있어요. 기반이 안정될 때까지 시간이 필요합니다.' },
  { id: 69, name: '펜타클 6',       nameEn: 'Six of Pentacles',   suit: 'pentacles', positive: true,  probability: 60, emoji: '💎', keyword: '나눔과 균형', meaning: '서로 주고받는 균형이 맞아야 좋은 관계가 될 수 있어요. 일방적인 노력이 아닌 상호적인 관심이 필요합니다.' },
  { id: 70, name: '펜타클 7',       nameEn: 'Seven of Pentacles', suit: 'pentacles', positive: false, probability: 54, emoji: '💎', keyword: '인내와 기다림', meaning: '씨앗을 심고 기다리는 카드예요. 당장은 결과가 보이지 않지만 꾸준히 노력하면 재회가 가능합니다.' },
  { id: 71, name: '펜타클 8',       nameEn: 'Eight of Pentacles', suit: 'pentacles', positive: true,  probability: 58, emoji: '💎', keyword: '헌신과 성장', meaning: '자신을 발전시키는 노력이 상대방의 눈에 띌 수 있어요. 꾸준한 자기계발이 재회를 이끌어줄 것입니다.' },
  { id: 72, name: '펜타클 9',       nameEn: 'Nine of Pentacles',  suit: 'pentacles', positive: true,  probability: 62, emoji: '💎', keyword: '독립과 성공', meaning: '스스로 빛나는 모습이 상대방을 다시 끌어당길 수 있어요. 자신의 삶을 충실히 살면 재회의 기회가 올 것입니다.' },
  { id: 73, name: '펜타클 10',      nameEn: 'Ten of Pentacles',   suit: 'pentacles', positive: true,  probability: 72, emoji: '💎', keyword: '안정과 번영', meaning: '장기적이고 안정적인 관계로 발전할 가능성을 보여줘요. 재회 후 탄탄한 기반 위의 사랑을 할 수 있습니다.' },
  { id: 74, name: '펜타클 페이지',  nameEn: 'Page of Pentacles',  suit: 'pentacles', positive: true,  probability: 55, emoji: '💎', keyword: '배움과 성실', meaning: '과거의 실수에서 배우는 자세가 중요해요. 성실하게 관계를 다시 쌓아간다면 재회가 가능합니다.' },
  { id: 75, name: '펜타클 나이트',  nameEn: 'Knight of Pentacles',suit: 'pentacles', positive: true,  probability: 58, emoji: '💎', keyword: '신중한 접근', meaning: '천천히 하지만 확실하게 다가가는 것이 효과적이에요. 성실하고 믿음직한 태도가 재회를 이끌어줄 것입니다.' },
  { id: 76, name: '펜타클 퀸',      nameEn: 'Queen of Pentacles', suit: 'pentacles', positive: true,  probability: 65, emoji: '💎', keyword: '현실적 돌봄', meaning: '따뜻하고 현실적인 방식으로 상대방을 배려해보세요. 실질적인 관심과 지지가 재회를 가능하게 합니다.' },
  { id: 77, name: '펜타클 킹',      nameEn: 'King of Pentacles',  suit: 'pentacles', positive: true,  probability: 65, emoji: '💎', keyword: '안정과 신뢰', meaning: '믿음직하고 안정적인 사람으로 자신을 보여주세요. 실용적이고 성숙한 접근이 재회를 이끌어줄 것입니다.' },
];

// ── 앱 상태 ──────────────────────────────────────────────────────────
let selectedCards = [];
let currentFilter = 'all';

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

// ── 카드 그리드 렌더링 ─────────────────────────────────────────────
function renderGrid() {
  const grid = $('cards-grid');
  grid.innerHTML = '';

  CARDS.forEach(card => {
    const el = document.createElement('div');
    el.className = `card-item suit-${card.suit}`;
    el.dataset.id = card.id;
    el.innerHTML = `
      <span class="card-emoji">${card.emoji}</span>
      <span class="card-name">${card.name}</span>
      <span class="card-nameen">${card.nameEn}</span>
    `;
    if (selectedCards.find(c => c.id === card.id)) el.classList.add('selected');
    if (currentFilter !== 'all' && card.suit !== currentFilter) el.classList.add('filtered-out');
    el.addEventListener('click', () => toggleCard(card, el));
    grid.appendChild(el);
  });
}

// ── 카드 선택/해제 ─────────────────────────────────────────────────
function toggleCard(card, el) {
  const idx = selectedCards.findIndex(c => c.id === card.id);

  if (idx !== -1) {
    // 해제
    selectedCards.splice(idx, 1);
    el.classList.remove('selected');
  } else {
    if (selectedCards.length >= 3) {
      el.animate([
        { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' },
        { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' },
        { transform: 'translateX(0)' }
      ], { duration: 300, easing: 'ease' });
      return;
    }
    selectedCards.push(card);
    el.classList.add('selected');
  }

  updateSelectionUI();
}

function updateSelectionUI() {
  const n = selectedCards.length;
  $('sel-count').textContent = `${n} / 3`;

  // 미리보기 슬롯
  for (let i = 0; i < 3; i++) {
    const slot = $(`prev-${i}`);
    if (selectedCards[i]) {
      const c = selectedCards[i];
      slot.className = `preview-slot filled suit-${c.suit}`;
      slot.innerHTML = `
        <div class="mini-card">
          <span class="mini-emoji">${c.emoji}</span>
          <span class="mini-name">${c.name}</span>
        </div>`;
    } else {
      slot.className = 'preview-slot';
      slot.innerHTML = '<span class="prev-empty">?</span>';
    }
  }

  $('btn-result').disabled = n < 3;
}

// ── 필터 ──────────────────────────────────────────────────────────
document.querySelectorAll('.fil').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fil').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.card-item').forEach(el => {
      const card = CARDS.find(c => c.id === +el.dataset.id);
      if (currentFilter === 'all' || card.suit === currentFilter) {
        el.classList.remove('filtered-out');
      } else {
        el.classList.add('filtered-out');
      }
    });
  });
});

// ── 확률 계산 ──────────────────────────────────────────────────────
function calcProbability(cards) {
  const avg = cards.reduce((s, c) => s + c.probability, 0) / cards.length;
  const posCount = cards.filter(c => c.positive).length;
  const modifier = (posCount - 1.5) * 3; // -4.5 ~ +4.5
  return Math.max(1, Math.min(99, Math.round(avg + modifier)));
}

function getProbColor(p) {
  if (p <= 30) return '#f87171';
  if (p <= 55) return '#fb923c';
  if (p <= 75) return '#facc15';
  return '#4ade80';
}

function getProbMessage(p) {
  if (p <= 20) return '재회 가능성이 매우 낮습니다. 이별을 받아들이고 새로운 시작을 준비하는 것이 좋을 수 있어요.';
  if (p <= 40) return '재회를 위해서는 두 사람 모두 큰 변화와 노력이 필요합니다. 시간을 두고 천천히 접근해보세요.';
  if (p <= 60) return '재회 가능성이 반반이에요. 상황과 타이밍에 따라 결과가 크게 달라질 수 있습니다.';
  if (p <= 80) return '재회 가능성이 높습니다! 진심을 다해 다가간다면 좋은 결과가 있을 거예요.';
  return '재회 가능성이 매우 높습니다! 두 사람의 인연이 아직 끝나지 않았어요. 용기를 내어 다가가보세요.';
}

function getOverallReading(cards, prob) {
  const pos = cards.filter(c => c.positive);
  const neg = cards.filter(c => !c.positive);

  let msg = `선택하신 ${cards.map(c => `'${c.name}'`).join(', ')} 카드를 종합적으로 분석했습니다.\n\n`;

  if (pos.length === 3) {
    msg += '세 장 모두 긍정적인 에너지를 가진 카드예요. ';
    msg += '두 사람의 재회를 향한 긍정적인 흐름이 강하게 느껴집니다. ';
  } else if (neg.length === 3) {
    msg += '세 장 모두 재회에 있어 도전적인 에너지를 가진 카드예요. ';
    msg += '지금 당장보다는 충분한 시간을 두고 서로를 바라보는 것이 중요합니다. ';
  } else if (pos.length === 2) {
    msg += `긍정적인 '${pos.map(c=>c.name).join(', ')}' 카드가 힘을 보태주고 있어요. `;
    msg += `'${neg[0].name}'이 나타내는 어려움도 있지만, 극복할 수 있는 가능성이 있습니다. `;
  } else {
    msg += `'${pos[0].name}'의 긍정적인 에너지가 있지만, `;
    msg += `'${neg.map(c=>c.name).join(', ')}'이 나타내는 어려움들을 먼저 해소해야 합니다. `;
  }

  msg += `\n\n재회 확률 ${prob}%는 `;
  if (prob > 65) msg += '희망적인 결과를 암시해요. 상대방에게 진심을 담아 다가가보세요. 타이밍을 잘 선택하는 것도 중요합니다.';
  else if (prob > 40) msg += '노력 여하에 따라 충분히 달라질 수 있어요. 자신을 먼저 사랑하고 내면을 성장시키는 것이 재회로 가는 가장 빠른 길입니다.';
  else msg += '현재 시점에서의 어려움을 보여주고 있어요. 자신을 위한 시간을 먼저 가져보세요. 모든 이별이 새로운 시작의 씨앗이 됩니다.';

  return msg;
}

// ── 결과 화면 렌더링 ──────────────────────────────────────────────
function showResult() {
  const prob = calcProbability(selectedCards);
  const color = getProbColor(prob);

  showScreen('screen-result');

  // 선택 카드 3장
  const rcEl = $('result-cards');
  rcEl.innerHTML = selectedCards.map(c => `
    <div class="result-card suit-${c.suit}">
      <div class="result-card-emoji">${c.emoji}</div>
      <div class="result-card-name">${c.name}</div>
      <div class="result-card-nameen">${c.nameEn}</div>
      <span class="result-card-badge ${c.positive ? 'badge-pos' : 'badge-neg'}">${c.positive ? '긍정' : '부정'}</span>
    </div>
  `).join('');

  // 확률 애니메이션
  const bar = $('prob-bar');
  const pct = $('prob-pct');
  bar.style.background = `linear-gradient(90deg, ${color}88, ${color})`;

  let current = 0;
  const step = () => {
    if (current < prob) {
      current = Math.min(current + 2, prob);
      bar.style.width = `${current}%`;
      pct.textContent = `${current}%`;
      pct.style.color = color;
      requestAnimationFrame(step);
    }
  };
  setTimeout(() => requestAnimationFrame(step), 300);

  $('prob-msg').textContent = getProbMessage(prob);

  // 밸런스
  const posCount = selectedCards.filter(c => c.positive).length;
  $('balance').innerHTML = `
    <div class="balance-item"><span class="dot-pos"></span> 긍정 카드 ${posCount}장</div>
    <div class="balance-item"><span class="dot-neg"></span> 부정 카드 ${3 - posCount}장</div>
  `;

  // 카드별 해석
  $('card-readings').innerHTML = selectedCards.map(c => `
    <div class="reading-item">
      <div class="reading-icon suit-${c.suit}">
        <span class="r-emoji">${c.emoji}</span>
        <span class="r-mini">${c.name}</span>
      </div>
      <div class="reading-body">
        <div class="reading-name">${c.name} <small style="opacity:0.6;font-size:0.75em">${c.nameEn}</small></div>
        <span class="reading-keyword ${c.positive ? 'kw-pos' : 'kw-neg'}">${c.keyword}</span>
        <div class="reading-meaning">${c.meaning}</div>
      </div>
    </div>
  `).join('');

  // 종합 해석
  $('overall').textContent = getOverallReading(selectedCards, prob);

  // AI 버튼 초기화
  $('btn-ai').disabled = false;
  $('btn-ai').textContent = '✨ AI 타로 심층 해석 받기';
  $('ai-spinner').classList.add('hidden');
  $('ai-text').classList.add('hidden');
}

// ── AI 해석 ───────────────────────────────────────────────────────
$('btn-ai').addEventListener('click', async () => {
  $('btn-ai').disabled = true;
  $('btn-ai').textContent = '해석 중...';
  $('ai-spinner').classList.remove('hidden');
  $('ai-text').classList.add('hidden');

  try {
    const res = await fetch('/api/tarot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cards: selectedCards.map(c => ({ name: c.name, nameEn: c.nameEn, positive: c.positive, keyword: c.keyword })),
        probability: calcProbability(selectedCards),
      }),
    });

    const data = await res.json();
    $('ai-spinner').classList.add('hidden');

    if (data.reading) {
      $('ai-text').textContent = data.reading;
      $('ai-text').classList.remove('hidden');
      $('btn-ai').textContent = '✅ AI 해석 완료';
    } else {
      $('btn-ai').textContent = '⚠️ 해석 불가 (API 키 필요)';
      $('btn-ai').disabled = false;
    }
  } catch {
    $('ai-spinner').classList.add('hidden');
    $('btn-ai').textContent = '⚠️ 연결 오류';
    $('btn-ai').disabled = false;
  }
});

// ── 이벤트 연결 ──────────────────────────────────────────────────
$('btn-start').addEventListener('click', () => {
  selectedCards = [];
  currentFilter = 'all';
  document.querySelectorAll('.fil').forEach(b => b.classList.remove('active'));
  document.querySelector('.fil[data-filter="all"]').classList.add('active');
  renderGrid();
  updateSelectionUI();
  showScreen('screen-select');
});

$('btn-back').addEventListener('click', () => showScreen('screen-welcome'));

$('btn-result').addEventListener('click', showResult);

$('btn-restart').addEventListener('click', () => {
  selectedCards = [];
  currentFilter = 'all';
  document.querySelectorAll('.fil').forEach(b => b.classList.remove('active'));
  document.querySelector('.fil[data-filter="all"]').classList.add('active');
  renderGrid();
  updateSelectionUI();
  showScreen('screen-select');
});

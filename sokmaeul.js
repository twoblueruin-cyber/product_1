// ── 78장 유니버셜 타로카드 데이터 (속마음 해석 버전) ──────────────────────
// heartScore: 상대방이 당신을 마음속에 담고 있는 정도 (1~100)
// heartMood: 감정 유형 (그리움/미련/기다림/갈등/새출발/혼란/분노/후회/무관심)
// heartPositive: 긍정적 에너지 여부
const CARDS = [
  // ══ 메이저 아르카나 (22장) ══════════════════════════════════════════
  { id:  0, name: '바보',           nameEn: 'The Fool',           suit: 'major',     heartScore: 55, heartMood: '새출발', heartPositive: false, emoji: '🃏', heartKeyword: '해방감', heartMeaning: '상대방은 과거를 내려놓고 자유롭게 새 출발을 꿈꾸고 있어요. 당신에 대한 감정이 완전히 사라진 건 아니지만, 지금은 가볍게 앞으로 나아가고 싶은 마음이 강합니다.' },
  { id:  1, name: '마법사',         nameEn: 'The Magician',       suit: 'major',     heartScore: 72, heartMood: '기다림', heartPositive: true,  emoji: '🪄', heartKeyword: '행동 욕구', heartMeaning: '상대방은 무언가를 하고 싶다는 충동을 느끼고 있어요. 당신에게 연락하거나 다가오고 싶은 마음이 내면에 있으며, 그것을 실행할 능력도 갖추고 있습니다.' },
  { id:  2, name: '여사제',         nameEn: 'The High Priestess', suit: 'major',     heartScore: 60, heartMood: '혼란',   heartPositive: false, emoji: '🌙', heartKeyword: '숨겨진 감정', heartMeaning: '상대방은 자신의 감정을 드러내지 않고 있어요. 겉으로는 괜찮은 척하지만 내면 깊은 곳에 당신에 대한 감정이 남아있습니다. 스스로도 그 감정을 정확히 모를 수 있어요.' },
  { id:  3, name: '여황제',         nameEn: 'The Empress',        suit: 'major',     heartScore: 78, heartMood: '그리움', heartPositive: true,  emoji: '🌹', heartKeyword: '따뜻한 기억', heartMeaning: '상대방은 당신과의 따뜻하고 풍요로운 기억을 그리워하고 있어요. 함께했던 행복한 시간들이 마음속에 생생히 살아있으며, 그 온기가 좀처럼 사라지지 않습니다.' },
  { id:  4, name: '황제',           nameEn: 'The Emperor',        suit: 'major',     heartScore: 45, heartMood: '갈등',   heartPositive: false, emoji: '👑', heartKeyword: '자존심', heartMeaning: '상대방은 자존심 때문에 감정을 표현하지 못하고 있어요. 당신을 생각하면서도 먼저 연락하거나 감정을 드러내는 것을 꺼리는 상태입니다. 내면의 자존심과 감정이 충돌하고 있습니다.' },
  { id:  5, name: '교황',           nameEn: 'The Hierophant',     suit: 'major',     heartScore: 65, heartMood: '미련',   heartPositive: true,  emoji: '⛪', heartKeyword: '도덕적 갈등', heartMeaning: '상대방은 당신에 대한 미련과 현실 사이에서 갈등하고 있어요. 관계를 회복하고 싶은 마음이 있지만 체면이나 주변의 시선을 신경쓰며 쉽게 행동하지 못하고 있습니다.' },
  { id:  6, name: '연인',           nameEn: 'The Lovers',         suit: 'major',     heartScore: 88, heartMood: '그리움', heartPositive: true,  emoji: '💕', heartKeyword: '강한 끌림', heartMeaning: '상대방은 당신에 대한 강한 감정을 느끼고 있어요. 아직도 마음이 당신을 향해 있으며, 이 감정을 무시하기 어려운 상태입니다. 두 사람 사이의 연결 고리가 여전히 선명하게 느껴집니다.' },
  { id:  7, name: '전차',           nameEn: 'The Chariot',        suit: 'major',     heartScore: 70, heartMood: '기다림', heartPositive: true,  emoji: '🏆', heartKeyword: '내면의 결단', heartMeaning: '상대방은 마음속으로 어떤 결단을 내리려 하고 있어요. 당신에 관한 감정을 어떻게 처리할지 고민하며 방향을 잡으려 하는 상태입니다. 의지력으로 감정을 다스리고 있습니다.' },
  { id:  8, name: '힘',             nameEn: 'Strength',           suit: 'major',     heartScore: 74, heartMood: '미련',   heartPositive: true,  emoji: '🦁', heartKeyword: '억누른 감정', heartMeaning: '상대방은 당신에 대한 감정을 꾹 억누르고 있어요. 강해 보이려 하지만 내면에는 부드럽고 따뜻한 감정이 여전히 자리잡고 있습니다. 그 감정은 쉽게 사그라들지 않습니다.' },
  { id:  9, name: '은둔자',         nameEn: 'The Hermit',         suit: 'major',     heartScore: 35, heartMood: '혼란',   heartPositive: false, emoji: '🕯️', heartKeyword: '내면 탐색', heartMeaning: '상대방은 지금 혼자만의 시간이 필요한 상태예요. 당신에 대한 감정보다는 자기 자신에 대해 생각하는 시간을 보내고 있습니다. 감정을 차단하고 내면으로 들어간 상태입니다.' },
  { id: 10, name: '운명의 수레바퀴', nameEn: 'Wheel of Fortune',  suit: 'major',     heartScore: 68, heartMood: '기다림', heartPositive: true,  emoji: '☸️', heartKeyword: '운명적 연결', heartMeaning: '상대방은 두 사람의 인연이 아직 끝나지 않았다는 느낌을 받고 있어요. 시간이 지나면서 당신 생각이 자연스럽게 떠오르곤 합니다. 운명적인 연결감을 완전히 지우지 못하고 있습니다.' },
  { id: 11, name: '정의',           nameEn: 'Justice',            suit: 'major',     heartScore: 52, heartMood: '갈등',   heartPositive: false, emoji: '⚖️', heartKeyword: '냉철한 판단', heartMeaning: '상대방은 감정보다는 이성적으로 상황을 판단하려 해요. 당신에 대한 감정이 있지만 현실적인 문제들을 함께 고려하며 균형 잡힌 판단을 내리려 하고 있습니다.' },
  { id: 12, name: '매달린 남자',    nameEn: 'The Hanged Man',     suit: 'major',     heartScore: 45, heartMood: '혼란',   heartPositive: false, emoji: '⌛', heartKeyword: '정지된 감정', heartMeaning: '상대방은 자신의 감정이 어딘가에 걸려있는 느낌이에요. 당신에 대한 감정을 어떻게 해야 할지 모른 채 멈춰있는 상태입니다. 새로운 관점이 생기기 전까지는 변화가 어렵습니다.' },
  { id: 13, name: '죽음',           nameEn: 'Death',              suit: 'major',     heartScore: 28, heartMood: '새출발', heartPositive: false, emoji: '💀', heartKeyword: '마무리', heartMeaning: '상대방은 이 관계를 하나의 챕터로 마무리지으려는 마음이 있어요. 당신과의 기억을 소중히 하면서도 새로운 시작을 바라보고 있습니다. 완전한 끝이라기보다 변화를 받아들이는 중입니다.' },
  { id: 14, name: '절제',           nameEn: 'Temperance',         suit: 'major',     heartScore: 62, heartMood: '미련',   heartPositive: true,  emoji: '🌈', heartKeyword: '균형 추구', heartMeaning: '상대방은 감정과 이성 사이에서 균형을 찾으려 해요. 당신에 대한 마음이 완전히 식지 않았으며, 서두르지 않고 상황을 조용히 지켜보고 있습니다.' },
  { id: 15, name: '악마',           nameEn: 'The Devil',          suit: 'major',     heartScore: 38, heartMood: '갈등',   heartPositive: false, emoji: '😈', heartKeyword: '집착과 두려움', heartMeaning: '상대방은 당신에 대한 감정에서 벗어나고 싶으면서도 벗어나지 못하는 상태예요. 건강하지 않은 집착이나 감정적 두려움이 내면에 자리잡고 있어 스스로도 힘든 상태입니다.' },
  { id: 16, name: '탑',             nameEn: 'The Tower',          suit: 'major',     heartScore: 22, heartMood: '분노',   heartPositive: false, emoji: '⚡', heartKeyword: '충격과 혼란', heartMeaning: '상대방은 과거 두 사람 사이의 상처에서 아직 회복 중이에요. 당신에 대한 복잡하고 혼란스러운 감정이 내면에 남아있으며, 그 충격이 아직 가라앉지 않은 상태입니다.' },
  { id: 17, name: '별',             nameEn: 'The Star',           suit: 'major',     heartScore: 82, heartMood: '그리움', heartPositive: true,  emoji: '⭐', heartKeyword: '치유된 마음', heartMeaning: '상대방은 상처가 서서히 치유되면서 당신을 긍정적이고 희망적으로 떠올리고 있어요. 마음속에 따뜻하고 빛나는 감정이 자리잡기 시작했습니다.' },
  { id: 18, name: '달',             nameEn: 'The Moon',           suit: 'major',     heartScore: 42, heartMood: '혼란',   heartPositive: false, emoji: '🌕', heartKeyword: '감정의 미로', heartMeaning: '상대방은 자신의 감정을 정확히 파악하지 못하고 있어요. 당신에 대한 감정이 있는 것 같지만 무엇인지 스스로도 혼란스러운 상태입니다. 불확실한 감정이 마음속을 맴돌고 있습니다.' },
  { id: 19, name: '태양',           nameEn: 'The Sun',            suit: 'major',     heartScore: 85, heartMood: '그리움', heartPositive: true,  emoji: '☀️', heartKeyword: '밝은 기억', heartMeaning: '상대방은 당신과의 시간을 밝고 행복한 기억으로 간직하고 있어요. 당신 생각을 하면 따뜻하고 긍정적인 감정이 밀려옵니다. 두 사람의 기억이 빛처럼 선명하게 남아있습니다.' },
  { id: 20, name: '심판',           nameEn: 'Judgement',          suit: 'major',     heartScore: 78, heartMood: '후회',   heartPositive: true,  emoji: '📯', heartKeyword: '각성과 후회', heartMeaning: '상대방은 과거를 돌아보며 후회하는 부분이 있어요. 당신에게 더 잘했어야 했다는 생각이 내면 깊은 곳에 자리잡고 있으며, 새롭게 시작하고 싶은 마음이 깨어나고 있습니다.' },
  { id: 21, name: '세계',           nameEn: 'The World',          suit: 'major',     heartScore: 80, heartMood: '미련',   heartPositive: true,  emoji: '🌍', heartKeyword: '완전한 기억', heartMeaning: '상대방은 당신과의 관계를 완전하고 소중한 경험으로 기억하고 있어요. 아직도 당신에 대한 감정이 마음속에 온전히 남아있으며, 그것이 쉽게 채워지지 않는 빈 자리를 만들고 있습니다.' },

  // ══ 완드 (14장) ══════════════════════════════════════════════════
  { id: 22, name: '완드 에이스',    nameEn: 'Ace of Wands',       suit: 'wands',     heartScore: 72, heartMood: '기다림', heartPositive: true,  emoji: '🔥', heartKeyword: '새로운 열정', heartMeaning: '상대방의 마음속에 당신을 향한 새로운 열정이 싹트고 있어요. 무언가 시작하고 싶은 충동이 느껴지며, 그 에너지의 방향이 당신을 향하고 있습니다.' },
  { id: 23, name: '완드 2',         nameEn: 'Two of Wands',       suit: 'wands',     heartScore: 65, heartMood: '기다림', heartPositive: true,  emoji: '🔥', heartKeyword: '원거리 시선', heartMeaning: '상대방은 먼 곳에서 당신을 바라보는 듯한 감정을 갖고 있어요. 다음 단계를 계획하거나 적절한 기회를 기다리며 마음속으로 당신을 생각하고 있습니다.' },
  { id: 24, name: '완드 3',         nameEn: 'Three of Wands',     suit: 'wands',     heartScore: 68, heartMood: '기다림', heartPositive: true,  emoji: '🔥', heartKeyword: '관망', heartMeaning: '상대방은 상황을 지켜보며 적절한 시기를 기다리고 있어요. 멀리서도 당신을 관찰하는 마음이 있으며 그 감정이 내면에서 천천히 자라고 있습니다.' },
  { id: 25, name: '완드 4',         nameEn: 'Four of Wands',      suit: 'wands',     heartScore: 76, heartMood: '그리움', heartPositive: true,  emoji: '🔥', heartKeyword: '함께한 행복', heartMeaning: '상대방은 당신과 함께했던 행복하고 안정적인 시간을 그리워하고 있어요. 그 따뜻함이 기억 속에 선명히 남아 있으며, 다시 그런 시간을 갖고 싶다는 마음이 있습니다.' },
  { id: 26, name: '완드 5',         nameEn: 'Five of Wands',      suit: 'wands',     heartScore: 40, heartMood: '갈등',   heartPositive: false, emoji: '🔥', heartKeyword: '내면의 싸움', heartMeaning: '상대방의 내면에는 당신에 대한 상충되는 감정들이 싸우고 있어요. 당신을 그리워하는 마음과 거리를 두고 싶은 마음이 충돌하며 아직 감정이 정리되지 않은 혼란스러운 상태입니다.' },
  { id: 27, name: '완드 6',         nameEn: 'Six of Wands',       suit: 'wands',     heartScore: 74, heartMood: '미련',   heartPositive: true,  emoji: '🔥', heartKeyword: '당당한 기억', heartMeaning: '상대방은 당신과의 관계를 긍정적이고 자랑스럽게 기억하고 있어요. 당신에 대해 좋은 감정을 갖고 있으며, 언제든 다시 당당하게 다가올 수 있다는 자신감이 있습니다.' },
  { id: 28, name: '완드 7',         nameEn: 'Seven of Wands',     suit: 'wands',     heartScore: 45, heartMood: '갈등',   heartPositive: false, emoji: '🔥', heartKeyword: '방어적 태도', heartMeaning: '상대방은 마음의 문을 굳게 닫고 있어요. 감정이 없는 것이 아니라, 상처받기 싫어서 스스로를 보호하고 있습니다. 다가오는 것에 방어적으로 반응할 수 있습니다.' },
  { id: 29, name: '완드 8',         nameEn: 'Eight of Wands',     suit: 'wands',     heartScore: 75, heartMood: '기다림', heartPositive: true,  emoji: '🔥', heartKeyword: '빠른 감정', heartMeaning: '상대방의 당신을 향한 감정이 빠르게 움직이고 있어요. 생각이 자주 그리고 갑작스럽게 떠오르며, 곧 무언가 행동으로 이어질 가능성이 있습니다.' },
  { id: 30, name: '완드 9',         nameEn: 'Nine of Wands',      suit: 'wands',     heartScore: 44, heartMood: '갈등',   heartPositive: false, emoji: '🔥', heartKeyword: '지친 마음', heartMeaning: '상대방은 감정적으로 지쳐있어요. 당신을 생각하면서도 또 다시 상처받을까봐 두려워하며 경계를 치고 있습니다. 지금은 회복이 필요한 시기입니다.' },
  { id: 31, name: '완드 10',        nameEn: 'Ten of Wands',       suit: 'wands',     heartScore: 36, heartMood: '갈등',   heartPositive: false, emoji: '🔥', heartKeyword: '무거운 감정', heartMeaning: '상대방은 당신에 대한 감정이 짐처럼 느껴지고 있어요. 감정을 내려놓고 싶지만 완전히 놓아버리기도 어려운 상태입니다. 과부하가 걸린 마음이 힘들어하고 있습니다.' },
  { id: 32, name: '완드 페이지',    nameEn: 'Page of Wands',      suit: 'wands',     heartScore: 62, heartMood: '기다림', heartPositive: true,  emoji: '🔥', heartKeyword: '설레는 마음', heartMeaning: '상대방은 당신에 관한 소식이나 연락을 기대하는 마음이 있어요. 열정적이고 설레는 감정이 내면에 남아있으며, 새로운 시작에 대한 기대감도 있습니다.' },
  { id: 33, name: '완드 나이트',    nameEn: 'Knight of Wands',    suit: 'wands',     heartScore: 68, heartMood: '기다림', heartPositive: true,  emoji: '🔥', heartKeyword: '충동적 감정', heartMeaning: '상대방은 충동적으로 당신에게 달려가고 싶은 마음이 있어요. 뜨겁게 타오르는 감정이 있지만 아직 행동으로 옮기지 못하고 있습니다.' },
  { id: 34, name: '완드 퀸',        nameEn: 'Queen of Wands',     suit: 'wands',     heartScore: 72, heartMood: '그리움', heartPositive: true,  emoji: '🔥', heartKeyword: '빛나는 기억', heartMeaning: '상대방은 당신을 매력적이고 빛나는 존재로 기억하고 있어요. 당신의 모습이 자주 생각나며, 그 매력에 여전히 끌리는 마음이 있습니다.' },
  { id: 35, name: '완드 킹',        nameEn: 'King of Wands',      suit: 'wands',     heartScore: 68, heartMood: '미련',   heartPositive: true,  emoji: '🔥', heartKeyword: '리더의 후회', heartMeaning: '상대방은 관계에서 더 잘 이끌지 못했다는 아쉬움이 있어요. 당신에 대한 책임감과 함께 더 나은 모습을 보여주고 싶었다는 마음이 남아있습니다.' },

  // ══ 컵 (14장) ══════════════════════════════════════════════════
  { id: 36, name: '컵 에이스',      nameEn: 'Ace of Cups',        suit: 'cups',      heartScore: 84, heartMood: '그리움', heartPositive: true,  emoji: '💧', heartKeyword: '순수한 감정', heartMeaning: '상대방의 마음에 당신을 향한 순수하고 깊은 감정이 차오르고 있어요. 처음 느꼈던 그 감정이 다시 솟아나고 있으며, 당신이 특별한 존재라는 것을 느끼고 있습니다.' },
  { id: 37, name: '컵 2',           nameEn: 'Two of Cups',        suit: 'cups',      heartScore: 88, heartMood: '그리움', heartPositive: true,  emoji: '💧', heartKeyword: '상호적 끌림', heartMeaning: '상대방도 두 사람이 서로를 생각하고 있다는 것을 느끼고 있어요. 마음이 당신을 향해 균형 있게 흐르고 있으며, 서로의 에너지가 연결되는 것을 감지하고 있습니다.' },
  { id: 38, name: '컵 3',           nameEn: 'Three of Cups',      suit: 'cups',      heartScore: 76, heartMood: '그리움', heartPositive: true,  emoji: '💧', heartKeyword: '함께한 추억', heartMeaning: '상대방은 당신과 함께했던 즐겁고 행복한 기억들을 소중히 간직하고 있어요. 주변 사람들과 있을 때도 당신과의 좋은 순간들이 자연스럽게 떠오릅니다.' },
  { id: 39, name: '컵 4',           nameEn: 'Four of Cups',       suit: 'cups',      heartScore: 35, heartMood: '무관심', heartPositive: false, emoji: '💧', heartKeyword: '권태와 거리', heartMeaning: '상대방은 지금 감정적으로 무관심하거나 지쳐있는 상태예요. 당신을 생각하고는 있지만 적극적인 감정을 느끼지 못하고 있어요. 자신의 내면에 집중하는 시간을 보내고 있습니다.' },
  { id: 40, name: '컵 5',           nameEn: 'Five of Cups',       suit: 'cups',      heartScore: 32, heartMood: '후회',   heartPositive: false, emoji: '💧', heartKeyword: '상실의 슬픔', heartMeaning: '상대방은 이별에 대한 슬픔과 상실감을 느끼고 있어요. 잃어버린 것에 집중하느라 아직 앞으로 나아가지 못하고 있으며, 두 사람의 관계를 아쉬워하고 있습니다.' },
  { id: 41, name: '컵 6',           nameEn: 'Six of Cups',        suit: 'cups',      heartScore: 75, heartMood: '그리움', heartPositive: true,  emoji: '💧', heartKeyword: '달콤한 추억', heartMeaning: '상대방은 당신과의 아름다운 추억을 자주 떠올리고 있어요. 어린 시절 같은 순수하고 따뜻한 감정으로 당신을 기억하며, 그 달콤함이 마음속에 살아있습니다.' },
  { id: 42, name: '컵 7',           nameEn: 'Seven of Cups',      suit: 'cups',      heartScore: 42, heartMood: '혼란',   heartPositive: false, emoji: '💧', heartKeyword: '감정의 미혹', heartMeaning: '상대방은 당신에 대한 여러 가지 감정과 상상이 뒤섞여 있어요. 현실과 이상 사이에서 헤매며 무엇이 진짜 마음인지 스스로도 잘 모르는 혼란스러운 상태입니다.' },
  { id: 43, name: '컵 8',           nameEn: 'Eight of Cups',      suit: 'cups',      heartScore: 25, heartMood: '새출발', heartPositive: false, emoji: '💧', heartKeyword: '작별의 감정', heartMeaning: '상대방은 이 관계에서 충분히 느끼고 이제는 앞으로 나아가려는 마음이 강해요. 미련이 완전히 없는 것은 아니지만, 자신을 위한 새로운 출발을 선택하려 하고 있습니다.' },
  { id: 44, name: '컵 9',           nameEn: 'Nine of Cups',       suit: 'cups',      heartScore: 78, heartMood: '그리움', heartPositive: true,  emoji: '💧', heartKeyword: '소원의 마음', heartMeaning: '상대방은 당신과 관련된 소원이나 바람을 마음속에 갖고 있어요. 이루어졌으면 하는 간절한 마음이 내면 깊이 자리잡고 있으며, 그것이 당신을 향해 있습니다.' },
  { id: 45, name: '컵 10',          nameEn: 'Ten of Cups',        suit: 'cups',      heartScore: 82, heartMood: '그리움', heartPositive: true,  emoji: '💧', heartKeyword: '완전한 행복', heartMeaning: '상대방은 당신과의 관계에서 진정한 행복을 느꼈어요. 그 완전하고 충만했던 감정이 다른 어떤 것으로도 쉽게 채워지지 않는 빈 자리를 만들고 있습니다.' },
  { id: 46, name: '컵 페이지',      nameEn: 'Page of Cups',       suit: 'cups',      heartScore: 65, heartMood: '그리움', heartPositive: true,  emoji: '💧', heartKeyword: '감성적 그리움', heartMeaning: '상대방은 감성적이고 부드러운 방식으로 당신을 그리워하고 있어요. 진심을 담은 감정이 내면에서 솟아오르고 있으며, 그것을 표현하고 싶은 마음이 있습니다.' },
  { id: 47, name: '컵 나이트',      nameEn: 'Knight of Cups',     suit: 'cups',      heartScore: 72, heartMood: '그리움', heartPositive: true,  emoji: '💧', heartKeyword: '낭만적 기억', heartMeaning: '상대방은 당신과의 낭만적인 순간들을 자주 떠올리고 있어요. 감성적이고 꿈꾸는 방식으로 당신을 생각하며, 다가가고 싶은 마음을 품고 있습니다.' },
  { id: 48, name: '컵 퀸',          nameEn: 'Queen of Cups',      suit: 'cups',      heartScore: 70, heartMood: '미련',   heartPositive: true,  emoji: '💧', heartKeyword: '공감과 연민', heartMeaning: '상대방은 당신을 향한 깊은 공감과 이해를 갖고 있어요. 당신이 어떻게 지내는지 걱정하고 있으며, 세심하게 돌봐주고 싶은 따뜻한 마음이 남아있습니다.' },
  { id: 49, name: '컵 킹',          nameEn: 'King of Cups',       suit: 'cups',      heartScore: 68, heartMood: '미련',   heartPositive: true,  emoji: '💧', heartKeyword: '성숙한 감정', heartMeaning: '상대방은 당신에 대한 감정을 성숙하고 차분하게 간직하고 있어요. 쉽게 흔들리지는 않지만 마음 깊이 당신을 소중히 여기는 감정이 조용히 자리잡고 있습니다.' },

  // ══ 소드 (14장) ══════════════════════════════════════════════════
  { id: 50, name: '소드 에이스',    nameEn: 'Ace of Swords',      suit: 'swords',    heartScore: 56, heartMood: '갈등',   heartPositive: false, emoji: '⚔️', heartKeyword: '냉철한 결단', heartMeaning: '상대방은 당신에 대한 감정을 냉철하게 분석하고 있어요. 진실을 직면하려는 마음과 감정 사이에서 갈등하며, 명확한 결단을 내리려 하고 있습니다.' },
  { id: 51, name: '소드 2',         nameEn: 'Two of Swords',      suit: 'swords',    heartScore: 40, heartMood: '혼란',   heartPositive: false, emoji: '⚔️', heartKeyword: '결정 불능', heartMeaning: '상대방은 당신에 대한 감정을 인정하기 두려운 상태예요. 감정을 외면하며 스스로 눈을 가리고 있는 상태입니다. 결정을 내리지 못하고 정체되어 있습니다.' },
  { id: 52, name: '소드 3',         nameEn: 'Three of Swords',    suit: 'swords',    heartScore: 28, heartMood: '분노',   heartPositive: false, emoji: '⚔️', heartKeyword: '깊은 상처', heartMeaning: '상대방은 두 사람 사이에서 입은 감정적 상처가 아직 아물지 않았어요. 당신 생각을 하면 그 아픔이 함께 떠올라 상처받은 마음이 여전히 쓰라린 상태입니다.' },
  { id: 53, name: '소드 4',         nameEn: 'Four of Swords',     suit: 'swords',    heartScore: 45, heartMood: '혼란',   heartPositive: false, emoji: '⚔️', heartKeyword: '감정 휴식', heartMeaning: '상대방은 지금 감정적으로 쉬고 있는 시기예요. 당신에 대해 생각은 하지만, 그 감정을 처리할 에너지가 없는 상태입니다. 충분한 회복이 필요한 시간입니다.' },
  { id: 54, name: '소드 5',         nameEn: 'Five of Swords',     suit: 'swords',    heartScore: 24, heartMood: '분노',   heartPositive: false, emoji: '⚔️', heartKeyword: '상처와 원망', heartMeaning: '상대방은 과거의 갈등이나 충돌로 인해 상처와 원망이 남아있어요. 당신에 대한 부정적인 감정이 아직 정리되지 않은 상태이며, 감정의 치유가 먼저 필요합니다.' },
  { id: 55, name: '소드 6',         nameEn: 'Six of Swords',      suit: 'swords',    heartScore: 50, heartMood: '새출발', heartPositive: false, emoji: '⚔️', heartKeyword: '조용한 이행', heartMeaning: '상대방은 과거의 감정에서 서서히 벗어나는 중이에요. 당신을 완전히 잊은 것은 아니지만, 고통에서 멀어지며 조용히 앞으로 나아가고 있습니다.' },
  { id: 56, name: '소드 7',         nameEn: 'Seven of Swords',    suit: 'swords',    heartScore: 30, heartMood: '갈등',   heartPositive: false, emoji: '⚔️', heartKeyword: '숨겨진 진심', heartMeaning: '상대방은 자신의 진짜 감정을 숨기고 있어요. 겉으로 드러내지 않는 감정이 마음속에 있을 가능성이 높으며, 솔직하게 말하지 못하는 이유가 있습니다.' },
  { id: 57, name: '소드 8',         nameEn: 'Eight of Swords',    suit: 'swords',    heartScore: 35, heartMood: '갈등',   heartPositive: false, emoji: '⚔️', heartKeyword: '스스로 가둔 감정', heartMeaning: '상대방은 자신의 감정을 스스로 억압하고 있어요. 당신에 대한 마음이 있지만, 두려움과 제약으로 인해 자신을 가두고 그 감정을 외면하고 있습니다.' },
  { id: 58, name: '소드 9',         nameEn: 'Nine of Swords',     suit: 'swords',    heartScore: 26, heartMood: '분노',   heartPositive: false, emoji: '⚔️', heartKeyword: '걱정과 죄책감', heartMeaning: '상대방은 당신과의 관계와 관련된 걱정이나 죄책감을 갖고 있어요. 과거의 일로 마음이 편치 않으며 불안한 생각이 머릿속을 맴도는 상태입니다.' },
  { id: 59, name: '소드 10',        nameEn: 'Ten of Swords',      suit: 'swords',    heartScore: 15, heartMood: '새출발', heartPositive: false, emoji: '⚔️', heartKeyword: '완전한 종결', heartMeaning: '상대방은 이 관계를 마음속에서 완전히 정리한 것처럼 보여요. 감정적인 챕터를 닫고 앞으로 나아가는 중입니다. 가장 힘든 시간은 지났으며 새로운 시작이 기다리고 있습니다.' },
  { id: 60, name: '소드 페이지',    nameEn: 'Page of Swords',     suit: 'swords',    heartScore: 46, heartMood: '갈등',   heartPositive: false, emoji: '⚔️', heartKeyword: '관찰하는 눈', heartMeaning: '상대방은 멀리서 당신의 상황을 조심스럽게 살펴보고 있어요. 직접 다가오지는 않지만 관심을 완전히 거두지 못하고 있습니다. 신중하게 지켜보는 중입니다.' },
  { id: 61, name: '소드 나이트',    nameEn: 'Knight of Swords',   suit: 'swords',    heartScore: 52, heartMood: '갈등',   heartPositive: false, emoji: '⚔️', heartKeyword: '충동적 갈등', heartMeaning: '상대방은 당신에 대한 감정이 충동적으로 치솟았다가 사그라들기를 반복하고 있어요. 불안정하게 요동치는 감정 상태로 어떻게 해야 할지 모르고 있습니다.' },
  { id: 62, name: '소드 퀸',        nameEn: 'Queen of Swords',    suit: 'swords',    heartScore: 38, heartMood: '새출발', heartPositive: false, emoji: '⚔️', heartKeyword: '냉정한 독립', heartMeaning: '상대방은 감정보다 이성을 우선시하며 독립적으로 살아가려 해요. 당신에 대한 감정을 이성으로 잘라내려는 상태이며, 감정보다 명확한 논리를 선택하고 있습니다.' },
  { id: 63, name: '소드 킹',        nameEn: 'King of Swords',     suit: 'swords',    heartScore: 42, heartMood: '갈등',   heartPositive: false, emoji: '⚔️', heartKeyword: '이성적 거리', heartMeaning: '상대방은 매우 이성적이고 냉철하게 상황을 판단하고 있어요. 감정보다 논리로 당신과의 관계를 정리하려 하며, 감정에 흔들리지 않으려는 강한 의지가 있습니다.' },

  // ══ 펜타클 (14장) ══════════════════════════════════════════════════
  { id: 64, name: '펜타클 에이스',  nameEn: 'Ace of Pentacles',   suit: 'pentacles', heartScore: 65, heartMood: '미련',   heartPositive: true,  emoji: '💎', heartKeyword: '현실적 기회', heartMeaning: '상대방은 당신과의 관계에 새로운 기회가 있을 수 있다고 느끼고 있어요. 현실적인 가능성을 타진하고 있으며 실질적인 방식으로 관계를 회복하고 싶은 마음이 있습니다.' },
  { id: 65, name: '펜타클 2',       nameEn: 'Two of Pentacles',   suit: 'pentacles', heartScore: 52, heartMood: '혼란',   heartPositive: false, emoji: '💎', heartKeyword: '균형의 혼란', heartMeaning: '상대방은 당신에 대한 감정과 현실적인 상황 사이에서 균형을 잡으려 해요. 여러 가지 일에 치여 감정을 정리할 여유가 없는 상태이며, 지금 당장은 여유가 없습니다.' },
  { id: 66, name: '펜타클 3',       nameEn: 'Three of Pentacles', suit: 'pentacles', heartScore: 62, heartMood: '미련',   heartPositive: true,  emoji: '💎', heartKeyword: '노력의 기억', heartMeaning: '상대방은 두 사람이 함께 노력했던 기억을 갖고 있어요. 당신과의 관계를 의미 있는 경험으로 기억하며, 함께 쌓아온 것들이 소중하게 남아있습니다.' },
  { id: 67, name: '펜타클 4',       nameEn: 'Four of Pentacles',  suit: 'pentacles', heartScore: 42, heartMood: '갈등',   heartPositive: false, emoji: '💎', heartKeyword: '감정 통제', heartMeaning: '상대방은 자신의 감정을 단단히 움켜쥐고 있어요. 당신에 대한 마음을 쉽게 내보이지 않으려고 스스로를 통제하며, 감정을 놓아버리는 것을 두려워하고 있습니다.' },
  { id: 68, name: '펜타클 5',       nameEn: 'Five of Pentacles',  suit: 'pentacles', heartScore: 28, heartMood: '갈등',   heartPositive: false, emoji: '💎', heartKeyword: '결핍과 외로움', heartMeaning: '상대방은 지금 외롭거나 부족함을 느끼고 있어요. 당신이 없는 빈 자리를 느끼면서도 쉽게 채울 방법을 찾지 못하고 있습니다. 현실적인 어려움도 감정을 힘들게 하고 있습니다.' },
  { id: 69, name: '펜타클 6',       nameEn: 'Six of Pentacles',   suit: 'pentacles', heartScore: 62, heartMood: '미련',   heartPositive: true,  emoji: '💎', heartKeyword: '균형 잡힌 마음', heartMeaning: '상대방은 당신에 대한 감정을 주고받는 균형 속에서 바라보고 있어요. 일방적이지 않은 적절한 감정적 균형을 유지하려는 상태이며, 서로에 대한 배려가 남아있습니다.' },
  { id: 70, name: '펜타클 7',       nameEn: 'Seven of Pentacles', suit: 'pentacles', heartScore: 56, heartMood: '기다림', heartPositive: false, emoji: '💎', heartKeyword: '인내하는 마음', heartMeaning: '상대방은 무언가를 기다리고 있어요. 당신에 대한 감정을 바로 행동으로 옮기지 않고 때를 보는 중입니다. 씨앗을 심고 결과를 기다리는 인내의 시간을 보내고 있습니다.' },
  { id: 71, name: '펜타클 8',       nameEn: 'Eight of Pentacles', suit: 'pentacles', heartScore: 60, heartMood: '미련',   heartPositive: true,  emoji: '💎', heartKeyword: '노력하는 마음', heartMeaning: '상대방은 자신을 발전시키면서 언젠가 당신에게 더 좋은 모습을 보여주고 싶은 마음이 있어요. 조용하지만 꾸준히 노력하며 변화하고 있는 중입니다.' },
  { id: 72, name: '펜타클 9',       nameEn: 'Nine of Pentacles',  suit: 'pentacles', heartScore: 62, heartMood: '새출발', heartPositive: true,  emoji: '💎', heartKeyword: '자립의 여유', heartMeaning: '상대방은 스스로 풍요롭고 독립적으로 살아가면서 당신을 여유롭게 생각하고 있어요. 자신의 삶에 충실하면서 당신을 긍정적으로 바라보는 여유가 생겼습니다.' },
  { id: 73, name: '펜타클 10',      nameEn: 'Ten of Pentacles',   suit: 'pentacles', heartScore: 72, heartMood: '그리움', heartPositive: true,  emoji: '💎', heartKeyword: '안정된 기억', heartMeaning: '상대방은 당신과의 관계에서 안정감과 깊은 행복을 느꼈어요. 그 기억이 마음속에 단단하고 소중하게 자리잡고 있으며, 쉽게 사라지지 않습니다.' },
  { id: 74, name: '펜타클 페이지',  nameEn: 'Page of Pentacles',  suit: 'pentacles', heartScore: 56, heartMood: '미련',   heartPositive: true,  emoji: '💎', heartKeyword: '배우는 마음', heartMeaning: '상대방은 두 사람의 관계에서 많은 것을 배웠다고 느끼고 있어요. 당신에 대한 감사함이나 그리움이 조용히 남아있으며, 더 잘할 수 있었다는 아쉬움도 있습니다.' },
  { id: 75, name: '펜타클 나이트',  nameEn: 'Knight of Pentacles',suit: 'pentacles', heartScore: 60, heartMood: '기다림', heartPositive: true,  emoji: '💎', heartKeyword: '신중한 기다림', heartMeaning: '상대방은 천천히, 신중하게 당신에 대한 감정을 키우고 있어요. 충분히 생각한 뒤 행동하려는 성실한 마음이 있으며, 적절한 때를 기다리고 있습니다.' },
  { id: 76, name: '펜타클 퀸',      nameEn: 'Queen of Pentacles', suit: 'pentacles', heartScore: 66, heartMood: '그리움', heartPositive: true,  emoji: '💎', heartKeyword: '현실적 돌봄', heartMeaning: '상대방은 현실적이고 따뜻한 방식으로 당신을 그리워하고 있어요. 당신이 잘 지내는지 걱정하고 있으며, 실질적으로 돌봐주고 싶은 따뜻한 마음이 남아있습니다.' },
  { id: 77, name: '펜타클 킹',      nameEn: 'King of Pentacles',  suit: 'pentacles', heartScore: 66, heartMood: '미련',   heartPositive: true,  emoji: '💎', heartKeyword: '안정적 감정', heartMeaning: '상대방은 당신에 대한 감정을 안정적이고 성숙하게 간직하고 있어요. 쉽게 변하지 않는 깊고 묵직한 감정이 마음속에 조용히 자리잡고 있습니다.' },
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

// ── 카드 그리드 렌더링 ─────────────────────────────────────────────
function renderGrid() {
  const grid = $('cards-grid');
  grid.innerHTML = '';

  // 완전 랜덤 셔플 — DOM 삽입 순서 자체를 매번 새로 섞음
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
        <div class="card-back card-back-heart"></div>
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
    if (selectedCards.length >= 3) {
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
  $('sel-count').textContent = `${n} / 3`;

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

// ── 속마음 지수 계산 ──────────────────────────────────────────────
function calcHeartScore(cards) {
  const avg = cards.reduce((s, c) => s + c.heartScore, 0) / cards.length;
  const posCount = cards.filter(c => c.heartPositive).length;
  const modifier = (posCount - 1.5) * 3;
  return Math.max(1, Math.min(99, Math.round(avg + modifier)));
}

// ── 지배적 감정 계산 ──────────────────────────────────────────────
function getDominantMood(cards) {
  const moodCount = {};
  cards.forEach(c => {
    moodCount[c.heartMood] = (moodCount[c.heartMood] || 0) + 1;
  });
  return Object.entries(moodCount).sort((a, b) => b[1] - a[1])[0][0];
}

const MOOD_INFO = {
  '그리움':  { emoji: '💜', color: '#a855f7', desc: '상대방은 지금 당신을 그리워하고 있어요. 두 사람이 함께했던 기억이 마음속에 선명하게 남아있으며, 그 따뜻함이 쉽게 사라지지 않는 상태입니다.' },
  '미련':    { emoji: '💭', color: '#8b5cf6', desc: '상대방은 관계에 대한 아쉬움과 미련을 마음속에 간직하고 있어요. 완전히 마음을 정리하지 못한 채 당신에 대한 감정이 남아있는 상태입니다.' },
  '기다림':  { emoji: '⏳', color: '#06b6d4', desc: '상대방은 조용히 때를 기다리고 있어요. 적절한 시기나 계기가 생기면 행동하려는 마음이 내면에 있으며, 당신을 생각하는 시간을 보내고 있습니다.' },
  '갈등':    { emoji: '⚡', color: '#f59e0b', desc: '상대방은 내면에서 복잡한 감정들이 충돌하고 있어요. 당신을 향한 마음과 현실적인 이유들이 싸우며 어느 방향으로 가야 할지 혼란스러운 상태입니다.' },
  '새출발':  { emoji: '🌱', color: '#22c55e', desc: '상대방은 새로운 시작을 향해 마음을 정리하고 있어요. 과거와 거리를 두며 앞으로 나아가려는 의지가 강해지고 있는 상태입니다.' },
  '혼란':    { emoji: '🌀', color: '#64748b', desc: '상대방은 자신의 감정을 정확히 파악하지 못하고 혼란스러운 상태예요. 당신에 대한 감정이 있지만 그게 무엇인지 스스로도 모르고 있습니다.' },
  '분노':    { emoji: '🔥', color: '#ef4444', desc: '상대방의 마음속에 과거의 상처나 아픔으로 인한 감정이 남아있어요. 당신을 생각하면 복잡한 감정이 올라오는 상태이며, 감정의 치유가 필요한 시기입니다.' },
  '후회':    { emoji: '😔', color: '#78716c', desc: '상대방은 두 사람의 관계에서 후회하는 부분이 있어요. 더 잘했어야 했다는 아쉬움이 마음속에 남아있으며, 그것이 당신에 대한 감정으로 이어지고 있습니다.' },
  '무관심':  { emoji: '😶', color: '#94a3b8', desc: '상대방은 지금 당신과 일정한 거리를 두고 있어요. 완전히 감정이 없는 것은 아니지만, 현재는 적극적인 감정을 갖지 않으려 하는 상태입니다.' },
};

function getHeartColor(score) {
  if (score <= 30) return '#f87171';
  if (score <= 55) return '#fb923c';
  if (score <= 75) return '#a78bfa';
  return '#e879f9';
}

function getHeartMessage(score) {
  if (score <= 20) return '상대방의 마음이 많이 멀어진 상태예요. 지금은 각자의 시간이 필요한 시기일 수 있습니다.';
  if (score <= 40) return '상대방은 지금 감정을 정리하는 중이에요. 아직 완전히 마음을 닫지는 않았습니다.';
  if (score <= 60) return '상대방은 복잡한 마음을 갖고 있어요. 당신 생각이 가끔씩 떠오르는 상태입니다.';
  if (score <= 80) return '상대방은 당신을 자주 생각하고 있어요. 마음속에 당신에 대한 감정이 살아있습니다.';
  return '상대방의 마음속에 당신이 가득해요. 깊고 강한 감정이 내면에 자리잡고 있는 상태입니다.';
}

function getOverallReading(cards, score) {
  const mood = getDominantMood(cards);
  const moodInfo = MOOD_INFO[mood] || MOOD_INFO['혼란'];
  const pos = cards.filter(c => c.heartPositive);
  const neg = cards.filter(c => !c.heartPositive);

  let msg = `선택하신 ${cards.map(c => `'${c.name}'`).join(', ')} 카드를 종합적으로 분석했습니다.\n\n`;

  if (pos.length === 3) {
    msg += '세 장 모두 긍정적인 감정 에너지를 가진 카드예요. ';
    msg += '상대방의 마음속에 당신을 향한 따뜻하고 긍정적인 감정이 강하게 흐르고 있습니다. ';
  } else if (neg.length === 3) {
    msg += '세 장 모두 복잡하거나 어려운 감정 에너지를 가진 카드예요. ';
    msg += '상대방이 지금 감정적으로 힘든 시기를 보내고 있을 수 있습니다. ';
  } else if (pos.length === 2) {
    msg += `긍정적인 '${pos.map(c=>c.name).join(', ')}' 카드가 따뜻한 에너지를 더해주고 있어요. `;
    msg += `'${neg[0].name}'이 나타내는 어려움도 있지만, 그것을 넘어서는 감정이 존재합니다. `;
  } else {
    msg += `'${pos[0].name}'의 긍정적인 에너지가 있지만, `;
    msg += `'${neg.map(c=>c.name).join(', ')}'이 나타내는 복잡한 감정들도 함께 있습니다. `;
  }

  msg += `\n\n지배적인 감정은 '${mood}'이에요. ${moodInfo.desc}`;

  msg += `\n\n속마음 지수 ${score}%는 `;
  if (score > 65) msg += '상대방이 마음속에 당신을 담고 있다는 신호예요. 두 사람 사이의 감정적 연결이 아직 살아있습니다.';
  else if (score > 40) msg += '상대방의 마음이 완전히 닫히지 않았음을 보여줘요. 상황과 타이밍에 따라 감정이 움직일 수 있습니다.';
  else msg += '상대방이 지금은 거리를 두고 있음을 나타내요. 자신을 먼저 사랑하고 성장하는 것이 두 사람 모두에게 중요한 시기입니다.';

  return msg;
}

// ── 결과 화면 렌더링 ──────────────────────────────────────────────
function showResult() {
  const score = calcHeartScore(selectedCards);
  const color = getHeartColor(score);
  const mood = getDominantMood(selectedCards);
  const moodInfo = MOOD_INFO[mood] || MOOD_INFO['혼란'];

  showScreen('screen-result');

  // 선택 카드 3장
  const rcEl = $('result-cards');
  rcEl.innerHTML = selectedCards.map(c => `
    <div class="result-card suit-${c.suit}">
      <div class="result-card-emoji">${c.emoji}</div>
      <div class="result-card-name">${c.name}</div>
      <div class="result-card-nameen">${c.nameEn}</div>
      <span class="result-card-badge ${c.heartPositive ? 'badge-pos' : 'badge-neg'}">${c.heartKeyword}</span>
    </div>
  `).join('');

  // 속마음 지수 애니메이션
  const bar = $('prob-bar');
  const pct = $('prob-pct');
  bar.style.background = `linear-gradient(90deg, ${color}88, ${color})`;

  let current = 0;
  const step = () => {
    if (current < score) {
      current = Math.min(current + 2, score);
      bar.style.width = `${current}%`;
      pct.textContent = `${current}%`;
      pct.style.color = color;
      requestAnimationFrame(step);
    }
  };
  setTimeout(() => requestAnimationFrame(step), 300);

  $('prob-msg').textContent = getHeartMessage(score);

  // 지배 감정 박스
  $('mood-box').innerHTML = `
    <div class="mood-dominant" style="--mood-color: ${moodInfo.color}">
      <span class="mood-emoji">${moodInfo.emoji}</span>
      <div class="mood-content">
        <div class="mood-label">지배적인 감정</div>
        <div class="mood-name">${mood}</div>
        <div class="mood-desc">${moodInfo.desc}</div>
      </div>
    </div>
  `;

  // 밸런스 (긍정/복잡 카드 수)
  const posCount = selectedCards.filter(c => c.heartPositive).length;
  $('balance').innerHTML = `
    <div class="balance-item"><span class="dot-pos"></span> 따뜻한 에너지 ${posCount}장</div>
    <div class="balance-item"><span class="dot-neg"></span> 복잡한 에너지 ${3 - posCount}장</div>
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
        <span class="reading-keyword ${c.heartPositive ? 'kw-pos' : 'kw-neg'}">${c.heartKeyword}</span>
        <div class="reading-meaning">${c.heartMeaning}</div>
      </div>
    </div>
  `).join('');

  // 종합 해석
  $('overall').textContent = getOverallReading(selectedCards, score);

  // AI 심층 해석 시도
  fetchAIReading(selectedCards, score, mood);
}

// ── AI 심층 해석 ──────────────────────────────────────────────────
async function fetchAIReading(cards, score, mood) {
  const section = $('ai-reading-section');
  const box = $('ai-reading');
  section.style.display = 'block';

  try {
    const res = await fetch('/api/sokmaeul', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cards: cards.map(c => ({
        name: c.name, nameEn: c.nameEn,
        heartPositive: c.heartPositive, heartKeyword: c.heartKeyword, heartMood: c.heartMood
      })), score, mood }),
    });
    const data = await res.json();
    if (data.reading) {
      box.innerHTML = `<p class="ai-text">${data.reading.replace(/\n/g, '<br>')}</p>`;
    } else {
      section.style.display = 'none';
    }
  } catch {
    section.style.display = 'none';
  }
}

// ── 카카오톡 공유 ─────────────────────────────────────────────────
$('btn-share').addEventListener('click', async () => {
  const score = calcHeartScore(selectedCards);
  const mood = getDominantMood(selectedCards);
  const cardNames = selectedCards.map(c => c.name).join(', ');
  const shareText = `💜 타로 카드로 그 사람의 속마음을 알아봤어요!\n선택한 카드: ${cardNames}\n💜 속마음 지수: ${score}% (${mood})\n\n당신도 확인해보세요!`;
  const shareUrl = location.href;

  if (navigator.share) {
    try {
      await navigator.share({ title: '그 사람은 지금 무슨 생각을 할까?', text: shareText, url: shareUrl });
    } catch {
      // 사용자가 공유 취소한 경우 무시
    }
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

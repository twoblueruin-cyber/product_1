const nameInput    = document.getElementById('name-input');
const generateBtn  = document.getElementById('generate-btn');
const loadingEl    = document.getElementById('loading');
const loadingText  = document.getElementById('loading-text');
const errorBox     = document.getElementById('error-box');
const errorMsg     = document.getElementById('error-msg');
const resultsEl    = document.getElementById('results');
const resultsTitle = document.getElementById('results-title');
const nicknamesGrid = document.getElementById('nicknames-grid');
const regenerateBtn = document.getElementById('regenerate-btn');

// 카테고리별 색상 테마
const CATEGORY_COLORS = {
  '발음':     { bg: '#dbeafe', color: '#1e40af', border: '#bfdbfe' },
  '의미':     { bg: '#d1fae5', color: '#065f46', border: '#a7f3d0' },
  '귀여운':   { bg: '#fce7f3', color: '#9d174d', border: '#fbcfe8' },
  '재미있는': { bg: '#fef3c7', color: '#92400e', border: '#fde68a' },
  '멋진':     { bg: '#ede9fe', color: '#5b21b6', border: '#ddd6fe' },
  '특별한':   { bg: '#fee2e2', color: '#991b1b', border: '#fecaca' },
};
const DEFAULT_COLOR = { bg: '#f3f4f6', color: '#374151', border: '#d1d5db' };

function show(el) { el.classList.remove('hidden'); }
function hide(el) { el.classList.add('hidden'); }

function showError(msg) {
  errorMsg.textContent = msg;
  show(errorBox);
  hide(loadingEl);
  generateBtn.disabled = false;
}

function renderNicknames(name, nicknames) {
  resultsTitle.textContent = `"${name}"의 별명들 🎉`;
  nicknamesGrid.innerHTML = '';

  nicknames.forEach((item, i) => {
    const color = CATEGORY_COLORS[item.category] ?? DEFAULT_COLOR;
    const card = document.createElement('div');
    card.className = 'nickname-card';
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <span class="nickname-badge" style="background:${color.bg};color:${color.color};border-color:${color.border}">${item.category}</span>
      <div class="nickname-text">${item.nickname}</div>
      <div class="nickname-reason">${item.reason}</div>
      <button class="btn-copy" data-nickname="${item.nickname.replace(/"/g, '&quot;')}">📋 복사</button>
    `;
    nicknamesGrid.appendChild(card);
  });

  // 복사 버튼
  nicknamesGrid.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.nickname);
        btn.textContent = '✅ 복사됨!';
        setTimeout(() => { btn.textContent = '📋 복사'; }, 1500);
      } catch {
        btn.textContent = '❌ 복사 실패';
        setTimeout(() => { btn.textContent = '📋 복사'; }, 1500);
      }
    });
  });

  hide(loadingEl);
  show(resultsEl);
}

async function generate() {
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.focus();
    nameInput.classList.add('shake');
    setTimeout(() => nameInput.classList.remove('shake'), 400);
    return;
  }

  hide(errorBox);
  hide(resultsEl);
  show(loadingEl);
  generateBtn.disabled = true;

  // 로딩 메시지 순환
  const loadingMsgs = [
    'AI가 별명을 생각하는 중...',
    '창의력 엔진 가동 중...',
    '독특한 별명을 고안하는 중...',
    '거의 다 됐어요!',
  ];
  let msgIdx = 0;
  const msgInterval = setInterval(() => {
    msgIdx = (msgIdx + 1) % loadingMsgs.length;
    loadingText.textContent = loadingMsgs[msgIdx];
  }, 1200);

  try {
    const res = await fetch('/api/nickname', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    clearInterval(msgInterval);

    if (!res.ok) {
      showError(data.error ?? '오류가 발생했습니다. 다시 시도해주세요.');
      return;
    }

    renderNicknames(name, data.nicknames);
  } catch {
    clearInterval(msgInterval);
    showError('서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.');
  } finally {
    generateBtn.disabled = false;
  }
}

generateBtn.addEventListener('click', generate);
regenerateBtn.addEventListener('click', generate);
nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') generate(); });

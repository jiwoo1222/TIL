import { useState, useEffect, useMemo, useRef } from "react";

import {
  Home,
  BookOpen,
  XCircle,
  PenLine,
  ArrowLeft,
  Play,
  ChevronRight,
  Plus,
  Trash2,
  Check,
  X as CloseIcon,
  Volume2,
  RefreshCw,
  Eye,
  Save,
  ListChecks,
  Loader2,
  Keyboard,
  Languages,
  Type,
} from "lucide-react";

const QUIZ_MODES = [
  {
    id: "en-choice",
    title: "영어 4지선다",
    desc: "뜻을 보고 알맞은 영어 단어를 골라요",
    icon: ListChecks,
  },
  {
    id: "ko-choice",
    title: "한국어 4지선다",
    desc: "영어 단어를 보고 알맞은 뜻을 골라요",
    icon: Languages,
  },
  {
    id: "en-input",
    title: "영어 직접 입력",
    desc: "뜻을 보고 영어 단어를 직접 입력해요",
    icon: Keyboard,
  },
  {
    id: "ko-input",
    title: "한국어로 입력",
    desc: "영어 단어를 보고 뜻을 직접 입력해요",
    icon: Type,
  },
];
function isChoiceMode(mode) {
  return mode === "en-choice" || mode === "ko-choice";
}
function answerLangOf(mode) {
  return mode === "en-choice" || mode === "en-input" ? "en" : "ko";
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2);
}
function speak(text) {
  try {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = 0.92;
      window.speechSynthesis.speak(u);
    }
  } catch (e) {}
}
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

async function listKeys(prefix) {
  try {
    const keys = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && key.startsWith(prefix)) {
        keys.push(key);
      }
    }

    return keys;
  } catch (e) {
    console.error("storage list failed:", e);
    return [];
  }
}

async function getJSON(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error("storage get failed:", e);
    return null;
  }
}

async function setJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.error("storage set failed:", e);
    return false;
  }
}

async function deleteKey(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error("storage delete failed:", e);
    return false;
  }
}

async function loadAllPacks() {
  const keys = await listKeys("pack:");
  const packs = [];
  for (const k of keys) {
    const p = await getJSON(k);
    if (p) packs.push(p);
  }
  packs.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  return packs;
}
async function loadWrongMap() {
  const keys = await listKeys("wrongnote:");
  const map = {};
  for (const k of keys) {
    const packId = k.slice("wrongnote:".length);
    const words = await getJSON(k);
    if (words && words.length) map[packId] = words;
  }
  return map;
}

function parseBulkLines(text) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const parsed = [];
  for (const line of lines) {
    if (parsed.length >= 60) break;
    const idx = line.indexOf(",");
    if (idx === -1) continue;
    const en = line.slice(0, idx).trim();
    const ko = line.slice(idx + 1).trim();
    if (en && ko) parsed.push({ id: uid(), en, ko });
  }
  return parsed;
}

function Turtle({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="22" rx="13" ry="10" fill="#4FB3A9" />
      <circle cx="13" cy="19" r="1.6" fill="#2E8880" />
      <circle cx="20" cy="15" r="1.6" fill="#2E8880" />
      <circle cx="27" cy="19" r="1.6" fill="#2E8880" />
      <circle cx="20" cy="26" r="1.6" fill="#2E8880" />
      <circle cx="30" cy="16" r="3.4" fill="#66C4BA" />
      <ellipse cx="8" cy="27" rx="3.2" ry="2.2" fill="#66C4BA" />
      <ellipse cx="32" cy="27" rx="3.2" ry="2.2" fill="#66C4BA" />
      <ellipse cx="13" cy="31" rx="2.6" ry="2" fill="#66C4BA" />
    </svg>
  );
}
function Shell({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20 8C11 8 6 16 6 24c0 5 5 8 14 8s14-3 14-8c0-8-5-16-14-16z" fill="#FF8A65" />
      <path d="M20 14v18M14 16c2 5 2 11 0 15M26 16c-2 5-2 11 0 15" stroke="#E8663F" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function StarFish({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4l4.4 10.6L35 17l-8.4 7.4L29 35l-9-6-9 6 2.4-10.6L5 17l10.6-2.4z"
        fill="#FFB74D"
      />
      <circle cx="20" cy="21" r="2.4" fill="#F08C2A" />
    </svg>
  );
}
function Fish({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <ellipse cx="18" cy="20" rx="12" ry="8" fill="#2E6FBE" />
      <path d="M30 20l7-6v12z" fill="#2E6FBE" />
      <circle cx="12" cy="18" r="1.8" fill="#fff" />
      <path d="M8 20c-2 1-3 3-3 5" stroke="#1B4F91" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function Jellyfish({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M8 16a12 10 0 0124 0c0 4-5 6-12 6S8 20 8 16z" fill="#8FA0E6" />
      <path
        d="M13 22c0 4-2 5-2 9M20 23c0 4 1 6 1 10M27 22c0 4 2 5 2 9"
        stroke="#6C82D6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function Whale({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path
        d="M8 34c0-10 10-18 24-18 12 0 22 6 24 14-2 6-8 10-16 11l-2 5-4-4c-10 1-26-2-26-8z"
        fill="#2E6FBE"
      />
      <circle cx="20" cy="30" r="2" fill="#fff" />
      <path d="M30 12c0-4 2-6 2-6s2 2 2 6" stroke="#8FB4E8" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
function Coral({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M10 36V22c0-4 4-6 4-10M14 36V26c0-3 3-4 3-8M20 36V20c0-5 5-7 5-12M26 36V24c0-3 3-4 3-8M30 36V26c0-3 2-4 2-7"
        stroke="#FF8A65"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
const PACK_ICONS = [Turtle, Shell, StarFish, Fish, Jellyfish];

function TrophyIllustration() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
      <path
        d="M30 18h28v14c0 9-6 16-14 16s-14-7-14-16V18z"
        fill="#FFB74D"
      />
      <rect x="38" y="48" width="12" height="10" fill="#F08C2A" />
      <rect x="30" y="58" width="28" height="6" rx="2" fill="#F08C2A" />
      <path d="M30 22h-8c0 8 3 13 8 14" stroke="#F08C2A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M58 22h8c0 8-3 13-8 14" stroke="#F08C2A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M14 14l2.4 5.6L22 22l-5.6 2.4L14 30l-2.4-5.6L6 22l5.6-2.4z" fill="#FF8A65" />
      <path d="M72 30l1.8 4.2L78 36l-4.2 1.8L72 42l-1.8-4.2L66 36l4.2-1.8z" fill="#8FA0E6" />
    </svg>
  );
}
function ConfettiFish() {
  return (
    <svg width="96" height="88" viewBox="0 0 96 88" fill="none">
      <ellipse cx="48" cy="50" rx="20" ry="14" fill="#FF8A65" />
      <path d="M68 50l12-10v20z" fill="#FF8A65" />
      <circle cx="40" cy="46" r="2.6" fill="#fff" />
      <circle cx="10" cy="10" r="3" fill="#FFB74D" />
      <circle cx="86" cy="14" r="2.4" fill="#4FB3A9" />
      <circle cx="16" cy="30" r="2" fill="#2E6FBE" />
      <circle cx="80" cy="34" r="2.6" fill="#8FA0E6" />
      <rect x="24" y="8" width="4" height="4" rx="1" fill="#8FA0E6" transform="rotate(20 24 8)" />
      <rect x="68" y="6" width="4" height="4" rx="1" fill="#FF8A65" transform="rotate(-15 68 6)" />
    </svg>
  );
}

function TopBar({ title, onBack, right }) {
  return (
    <div className="flex items-center gap-2 px-5 pt-6 pb-3">
      {onBack && (
        <button onClick={onBack} className="p-1.5 -ml-1.5 rounded-full hover:bg-[#DDEBFA] text-[#1E2A3A] transition-colors">
          <ArrowLeft size={20} />
        </button>
      )}
      <h1 className="text-[21px] text-[#1E2A3A] font-bold flex-1">{title}</h1>
      {right}
    </div>
  );
}
function PillButton({ children, onClick, variant = "primary", disabled, className = "", type = "button" }) {
  const styles = {
    primary: "bg-[#2E6FBE] text-white",
    outline: "bg-white border border-[#2E6FBE] text-[#2E6FBE]",
    soft: "bg-[#DDEBFA] text-[#1E2A3A]",
    ghost: "text-[#7A879C]",
    danger: "bg-white border border-[#F3C9C3] text-[#E2574A]",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-2xl px-4 py-3 font-semibold text-[15px] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform disabled:opacity-50 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
function EmptyState({ Icon, title, body }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 py-16 px-8">
      <div className="w-16 h-16 rounded-full bg-[#DDEBFA] flex items-center justify-center">
        <Icon size={36} />
      </div>
      <p className="text-[#1E2A3A] font-semibold">{title}</p>
      <p className="text-[#7A879C] text-sm leading-relaxed max-w-[240px]">{body}</p>
    </div>
  );
}

function NavBar({ view, setView, wrongCount }) {
  const items = [
    { key: "home", label: "메인", icon: Home },
    { key: "packs", label: "단어팩", icon: BookOpen },
    { key: "wrongnote", label: "오답노트", icon: XCircle, badge: wrongCount },
  ];

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-[#E3EDF7] min-h-screen flex flex-col">
      
      <div className="px-8 py-8">
        <p className="text-[13px] tracking-widest text-[#2E6FBE] font-bold uppercase">
          Vocab Cards
        </p>
        <h1 className="text-[22px] font-bold text-[#1E2A3A] mt-1">
          단어 학습
        </h1>
      </div>
      
      <nav className="px-4 flex flex-col gap-2">
        {items.map((it) => {
          const active = view === it.key;
          const Icon = it.icon;

          return (
            <button
              key={it.key}
              onClick={() => setView(it.key)}
              className={`
                w-full flex items-center gap-3 px-4 py-3.5 rounded-xl
                transition-colors text-left
                ${
                  active
                    ? "bg-[#EAF3FB] text-[#2E6FBE]"
                    : "text-[#7A879C] hover:bg-[#F5F8FC]"
                }
              `}
            >
              <div className="relative">
                <Icon
                  size={21}
                  strokeWidth={active ? 2.4 : 1.8}
                />

                {it.badge > 0 && (
                  <span className="absolute -top-2 -right-3 min-w-[17px] h-[17px] px-1 rounded-full bg-[#E2574A] text-white text-[10px] font-semibold flex items-center justify-center">
                    {it.badge > 99 ? "99+" : it.badge}
                  </span>
                )}
              </div>

              <span className={`text-[14px] ${
                active ? "font-semibold" : "font-medium"
              }`}>
                {it.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function HomeScreen({ packs, loading, wrongMap, onStart, onGoPacks, onGoWrongnote }) {
  const totalWrong = Object.values(wrongMap).reduce((s, arr) => s + arr.length, 0);
  return (
    <div>
      <div className="flex items-start justify-between px-5 pt-6">
        <div>
          <p className="text-[12px] tracking-widest text-[#2E6FBE] font-bold uppercase">Vocab Cards</p>
          <h1 className="text-[24px] text-[#1E2A3A] font-bold leading-snug mt-1">
            오늘은 어떤 단어를
            <br />
            외워볼까요?
          </h1>
        </div>
      </div>

      <div className="px-5 flex gap-3 mt-5 mb-6">
        <button onClick={onGoPacks} className="flex-1 bg-white rounded-2xl px-4 py-3.5 shadow-sm text-left active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-1.5 mb-1">
            <Fish size={16} />
          </div>
          <p className="text-[22px] font-bold text-[#1E2A3A]">{packs.length}개</p>
          <p className="text-[12px] text-[#7A879C]">보유 단어팩</p>
        </button>
        <button onClick={onGoWrongnote} className="flex-1 bg-white rounded-2xl px-4 py-3.5 shadow-sm text-left active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-1.5 mb-1">
            <Fish size={16} />
          </div>
          <p className="text-[22px] font-bold text-[#1E2A3A]">{totalWrong}개</p>
          <p className="text-[12px] text-[#7A879C]">오답노트 단어</p>
        </button>
      </div>

      <div className="px-5 flex items-center justify-between mb-3">
        <p className="text-[15px] font-bold text-[#1E2A3A]">내 단어팩</p>
        <button onClick={onGoPacks} className="text-[13px] text-[#2E6FBE] font-semibold flex items-center gap-0.5">
          전체 보기 <ChevronRight size={14} />
        </button>
      </div>

      <div className="px-5 flex flex-col gap-3">
        {loading && (
          <div className="flex items-center gap-2 text-[#7A879C] text-sm py-8 justify-center">
            <Loader2 size={16} className="animate-spin" /> 불러오는 중...
          </div>
        )}
        {!loading && packs.length === 0 && (
          <EmptyState Icon={Jellyfish} title="아직 단어팩이 없어요" body="주제를 입력하면 AI가 단어를 추천해주거나, 직접 입력해서 나만의 팩을 만들 수 있어요." />
        )}
        {packs.slice(0, 5).map((p, i) => {
          const Icon = PACK_ICONS[i % PACK_ICONS.length];
          return (
            <div key={p.id} className="w-full bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-sm">
              <Icon size={34} />
              <div className="flex-1 min-w-0">
                <p className="text-[#1E2A3A] font-semibold truncate">{p.name}</p>
                <p className="text-[12px] text-[#7A879C]">{p.words.length}개 단어</p>
              </div>
              <button onClick={() => onStart(p)} className="shrink-0 bg-[#2E6FBE] text-white text-[13px] font-semibold px-4 py-2 rounded-full active:scale-[0.96] transition-transform">
                학습하기
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PacksListScreen({ packs, loading, onStart, onGoManual, onEdit, onDelete }) {
  return (
    <div>
      <div className="flex items-center justify-between px-5 pt-6 pb-1">
        <h1 className="text-[21px] text-[#1E2A3A] font-bold">단어팩</h1>
        <Jellyfish size={34} />
      </div>

      <div className="px-5 flex flex-col gap-3 mt-3 mb-6">
        <button onClick={onGoManual} className="w-full bg-white rounded-2xl px-5 py-5 flex items-center justify-between shadow-sm text-left active:scale-[0.98] transition-transform">
          <div>
            <p className="text-[17px] font-bold text-[#1E2A3A] mb-1">직접 입력하기</p>
            <p className="text-[13px] text-[#7A879C] leading-relaxed">직접 단어를 입력하고
              <br />
              나만의 단어팩을 만들어요.</p>
          </div>
          <div className="flex items-end gap-1">
          </div>
        </button>
      </div>

      <div className="px-5 flex flex-col gap-3">
        {loading && (
          <div className="flex items-center gap-2 text-[#7A879C] text-sm py-8 justify-center">
            <Loader2 size={16} className="animate-spin" /> 불러오는 중...
          </div>
        )}
        {packs.map((p, i) => {
          const Icon = PACK_ICONS[i % PACK_ICONS.length];
          return (
            <div key={p.id} className="bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-sm">
              <Icon size={30} />
              <div className="flex-1 min-w-0" onClick={() => onStart(p)}>
                <p className="text-[#1E2A3A] font-semibold truncate">{p.name}</p>
                <p className="text-[12px] text-[#7A879C]">{p.words.length}개 단어</p>
              </div>
              <button onClick={() => onStart(p)} className="w-8 h-8 rounded-full bg-[#2E6FBE] flex items-center justify-center text-white shrink-0">
                <Play size={12} fill="currentColor" />
              </button>
              <button onClick={() => onEdit(p)} className="text-[#B7C4D6] hover:text-[#2E6FBE] shrink-0">
                <PenLine size={16} />
              </button>
              <button onClick={() => onDelete(p.id)} className="text-[#B7C4D6] hover:text-[#E2574A] shrink-0">
                <Trash2 size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const BULK_EXAMPLE = "apple,사과\nbook,책\nhappy,행복한";

function ManualInputScreen({ onBack, onParsed }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const count = useMemo(() => parseBulkLines(text).length, [text]);

  function handlePreview() {
    const parsed = parseBulkLines(text);
    if (parsed.length === 0) {
      setError('형식을 확인해주세요. 예: apple,사과');
      return;
    }
    setError("");
    onParsed(parsed);
  }

  return (
    <div>
      <div className="flex items-center px-5 pt-6">
        <button onClick={onBack} className="p-1.5 -ml-1.5 rounded-full hover:bg-[#DDEBFA] text-[#1E2A3A]">
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className="px-5 pt-2 pb-8">
        <h1 className="text-[22px] font-bold text-[#1E2A3A] mb-3">직접 입력하기</h1>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[13px] text-[#7A879C] leading-relaxed">
            영어,뜻 형식으로 입력해주세요.
            <br />
            (최대 60개)
          </p>
          <button onClick={() => setText(BULK_EXAMPLE)} className="text-[12px] text-[#2E6FBE] font-semibold shrink-0 flex items-center gap-1">
            <Eye size={13} /> 입력 예시
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={BULK_EXAMPLE}
          rows={10}
          className="w-full bg-white rounded-2xl px-4 py-3.5 text-[#1E2A3A] placeholder-[#B7C4D6] outline-none shadow-sm mb-1.5 font-mono text-[14px] leading-relaxed"
        />
        <p className="text-right text-[12px] text-[#B7C4D6] mb-5">{count}/60</p>

        {error && <p className="text-[13px] text-[#E2574A] mb-3">{error}</p>}

        <PillButton onClick={handlePreview} className="w-full py-3.5">
          <Eye size={17} /> 미리보기
        </PillButton>
      </div>
    </div>
  );
}

function PreviewScreen({ initialName, initialWords, onBack, onSave, saving }) {
  const [name, setName] = useState(initialName || "");
  const [words, setWords] = useState(initialWords);
  const [error, setError] = useState("");

  function update(id, field, value) {
    setWords((w) => w.map((x) => (x.id === id ? { ...x, [field]: value } : x)));
  }
  function remove(id) {
    setWords((w) => w.filter((x) => x.id !== id));
  }
  function addRow() {
    if (words.length >= 60) return;
    setWords((w) => [...w, { id: uid(), en: "", ko: "" }]);
  }
  function clearAll() {
    setWords([]);
  }
  function handleSave() {
    if (!name.trim()) {
      setError("팩 이름을 입력해주세요.");
      return;
    }
    const clean = words.filter((w) => w.en.trim() && w.ko.trim());
    if (clean.length === 0) {
      setError("단어를 1개 이상 입력해주세요.");
      return;
    }
    setError("");
    onSave(name.trim(), clean.slice(0, 60));
  }

  return (
    <div>
      <div className="flex items-center justify-between px-5 pt-6">
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="p-1.5 -ml-1.5 rounded-full hover:bg-[#DDEBFA] text-[#1E2A3A]">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-[19px] font-bold text-[#1E2A3A]">미리보기 ({words.length}/60)</h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-[#2E6FBE] text-white text-[13px] font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 disabled:opacity-60"
        >
          {saving ? <Loader2 size={13} className="animate-spin" /> : <Save size={13} />}
          저장
        </button>
      </div>

      <div className="px-5 pt-1 pb-8">
        <p className="text-[13px] text-[#7A879C] mb-3">내용을 확인하고 수정할 수 있어요.</p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="팩 이름을 입력하세요"
          className="w-full bg-white rounded-xl px-4 py-2.5 text-[#1E2A3A] placeholder-[#B7C4D6] outline-none shadow-sm mb-4 font-semibold"
        />

        {error && <p className="text-[13px] text-[#E2574A] mb-3">{error}</p>}

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
          <div className="flex flex-col divide-y divide-[#EEF3FA] max-h-[380px] overflow-y-auto">
            {words.map((w, i) => (
              <div key={w.id} className="flex items-center gap-2 px-4 py-2.5">
                <span className="text-[12px] text-[#B7C4D6] w-5 shrink-0 text-right">{i + 1}</span>
                <input
                  value={w.en}
                  onChange={(e) => update(w.id, "en", e.target.value)}
                  placeholder="영어"
                  className="flex-1 min-w-0 bg-transparent outline-none text-[#1E2A3A] text-sm font-medium"
                />
                <input
                  value={w.ko}
                  onChange={(e) => update(w.id, "ko", e.target.value)}
                  placeholder="뜻"
                  className="flex-1 min-w-0 bg-transparent outline-none text-[#7A879C] text-sm"
                />
                <button onClick={() => remove(w.id)} className="text-[#B7C4D6] hover:text-[#E2574A] shrink-0">
                  <CloseIcon size={15} />
                </button>
              </div>
            ))}
            {words.length === 0 && <p className="text-center text-[#B7C4D6] text-sm py-8">단어가 없어요.</p>}
          </div>
        </div>

        <div className="flex gap-3">
          <PillButton onClick={addRow} variant="soft" className="flex-1" disabled={words.length >= 60}>
            <Plus size={16} /> 단어 추가
          </PillButton>
          <PillButton onClick={clearAll} variant="danger" className="flex-1">
            <Trash2 size={15} /> 전체 삭제
          </PillButton>
        </div>
      </div>
    </div>
  );
}

function SuccessScreen({ pack, onEdit, onStart }) {
  const Icon = Fish;
  return (
    <div className="px-5 pt-14 pb-8 flex flex-col items-center text-center">
      <ConfettiFish />
      <p className="text-[19px] font-bold text-[#1E2A3A] mt-4 mb-6">단어팩이 저장되었어요!</p>

      <div className="w-full bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-sm mb-8">
        <Icon size={34} />
        <div className="text-left">
          <p className="text-[#1E2A3A] font-semibold">{pack.name}</p>
          <p className="text-[12px] text-[#7A879C]">{pack.words.length}개 단어</p>
        </div>
      </div>

      <div className="w-full flex gap-3">
        <PillButton onClick={onEdit} variant="outline" className="flex-1">
          팩 수정
        </PillButton>
        <PillButton onClick={() => onStart(pack)} className="flex-1">
          <Play size={15} fill="currentColor" /> 학습 시작하기
        </PillButton>
      </div>
    </div>
  );
}

function ModeSelectScreen({ title, count, onBack, onSelect }) {
  return (
    <div>
      <TopBar title="학습 방식 선택" onBack={onBack} />
      {title && (
        <p className="px-5 text-[13px] text-[#7A879C] -mt-1 mb-4 truncate">
          {title} · {count}개 단어
        </p>
      )}
      <div className="px-5 flex flex-col gap-3 pb-8">
        {QUIZ_MODES.map((m) => {
          const Icon = m.icon;
          return (
            <button
              key={m.id}
              onClick={() => onSelect(m.id)}
              className="w-full flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm text-left active:scale-[0.98] transition-transform"
            >
              <span className="w-10 h-10 rounded-full bg-[#EAF3FB] text-[#2E6FBE] flex items-center justify-center shrink-0">
                <Icon size={19} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[#1E2A3A] font-semibold">{m.title}</p>
                <p className="text-[12px] text-[#7A879C]">{m.desc}</p>
              </div>
              <ChevronRight size={18} className="text-[#B7C4D6] shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function QuizScreen({ words, label, mode, onFinish, onExit }) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState([]);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [wasCorrect, setWasCorrect] = useState(false);
  const startRef = useRef(Date.now());
  const inputRef = useRef(null);

  const choice = isChoiceMode(mode);
  const answerLang = answerLangOf(mode);
  const current = words[idx];
  const correctAnswer = current ? (answerLang === "en" ? current.en : current.ko) : "";
  const promptText = current ? (answerLang === "en" ? current.ko : current.en) : "";
  const promptIsEnglish = answerLang === "ko";

  const options = useMemo(() => {
    if (!current || !choice) return [];
    const pool =
      answerLang === "en"
        ? (current.distractorsEn || [])
        : (current.distractors || current.distractorsKo || []);
    return shuffle([correctAnswer, ...pool.slice(0, 3)]);
  }, [idx]);

  useEffect(() => {
    if (current && promptIsEnglish) speak(current.en);
  }, [idx]);

  useEffect(() => {
    setInputValue("");
    if (!choice && inputRef.current) {
      inputRef.current.focus();
    }
  }, [idx]);

  if (!current) return null;

  function advance(correct, wrongEntry) {
    const finalScore = correct ? score + 1 : score;
    const finalWrong = correct ? wrong : [...wrong, wrongEntry];
    setTimeout(() => {
      if (idx + 1 < words.length) {
        setScore(finalScore);
        setWrong(finalWrong);
        setIdx((i) => i + 1);
        setSelected(null);
        setLocked(false);
        setWasCorrect(false);
      } else {
        const elapsed = Math.round((Date.now() - startRef.current) / 1000);
        onFinish(finalScore, finalWrong, words, elapsed);
      }
    }, choice ? 850 : 1100);
  }

  function handleSelect(opt) {
    if (locked) return;
    setSelected(opt);
    setLocked(true);
    const correct = opt === correctAnswer;
    setWasCorrect(correct);
    advance(correct, current);
  }

  function normalize(v) {
    return v.trim().replace(/\s+/g, " ");
  }

  function handleSubmitInput(e) {
    e.preventDefault();
    if (locked) return;
    const cleanInput = normalize(inputValue);
    if (!cleanInput) return;
    const correct =
      answerLang === "en"
        ? cleanInput.toLowerCase() === normalize(correctAnswer).toLowerCase()
        : cleanInput === normalize(correctAnswer);
    setLocked(true);
    setWasCorrect(correct);
    advance(correct, current);
  }

  function rowClass(opt) {
    if (!locked) return "bg-white text-[#1E2A3A] active:scale-[0.98]";
    if (opt === correctAnswer) return "bg-[#E1F5EA] text-[#1E8A56] ring-2 ring-[#3FA66B]";
    if (opt === selected) return "bg-[#FBE4E1] text-[#C13E32] ring-2 ring-[#E2574A]";
    return "bg-white text-[#B7C4D6] opacity-60";
  }

  function badgeClass(opt) {
    if (!locked) return "bg-[#EAF3FB] text-[#7A879C]";
    if (opt === correctAnswer) return "bg-[#3FA66B] text-white";
    if (opt === selected) return "bg-[#E2574A] text-white";
    return "bg-[#EAF3FB] text-[#B7C4D6]";
  }

  const progressPct = Math.round(((idx + (locked ? 1 : 0)) / words.length) * 100);
  const modeInfo = QUIZ_MODES.find((m) => m.id === mode);

  return (
    <div>
      <div className="flex items-center gap-3 px-5 pt-6 pb-1">
        <button onClick={onExit} className="p-1.5 -ml-1.5 rounded-full hover:bg-[#DDEBFA] text-[#1E2A3A]">
          <ArrowLeft size={20} />
        </button>
        <p className="text-[15px] font-bold text-[#1E2A3A]">학습 중</p>
        <span className="text-[13px] text-[#7A879C]">
          {idx + 1} / {words.length}
        </span>
      </div>
      <p className="px-5 text-[12px] text-[#7A879C] mb-2 truncate">
        {label}
        {label && modeInfo ? " · " : ""}
        {modeInfo?.title}
      </p>
      <div className="px-5 mb-6">
        <div className="h-1.5 bg-[#DDEBFA] rounded-full overflow-hidden">
          <div className="h-full bg-[#2E6FBE] transition-all duration-300" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <div className="px-5">
        <div className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center gap-2 shadow-sm mb-6">
          <div className="flex items-center gap-2">
            <p className="text-[30px] font-bold text-[#1E2A3A]">{promptText}</p>
            {promptIsEnglish && (
              <button onClick={() => speak(current.en)} className="text-[#2E6FBE] shrink-0">
                <Volume2 size={20} />
              </button>
            )}
          </div>
          <p className="text-[14px] text-[#7A879C]">
            {answerLang === "en" ? "이 뜻에 맞는 영어 단어는?" : "이 단어의 뜻은?"}
          </p>
        </div>

        {choice ? (
          <div className="flex flex-col gap-2.5">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(opt)}
                disabled={locked}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[15px] font-medium shadow-sm transition-colors ${rowClass(opt)}`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 ${badgeClass(opt)}`}
                >
                  {!locked && i + 1}
                  {locked && opt === correctAnswer && <Check size={13} />}
                  {locked && opt !== correctAnswer && opt === selected && <CloseIcon size={13} />}
                </span>
                <span className="text-left">{opt}</span>
              </button>
            ))}
          </div>
        ) : (
          <form onSubmit={handleSubmitInput} className="flex flex-col gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={locked}
              placeholder={answerLang === "en" ? "영어 단어를 입력하세요" : "한국어 뜻을 입력하세요"}
              className={`w-full px-4 py-3.5 rounded-2xl text-[16px] font-medium shadow-sm outline-none border-2 transition-colors ${
                !locked
                  ? "bg-white border-transparent text-[#1E2A3A] focus:border-[#2E6FBE]"
                  : wasCorrect
                  ? "bg-[#E1F5EA] border-[#3FA66B] text-[#1E8A56]"
                  : "bg-[#FBE4E1] border-[#E2574A] text-[#C13E32]"
              }`}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
            {locked && !wasCorrect && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#EAF3FB] text-[#1E2A3A] text-[14px]">
                <Check size={15} className="text-[#3FA66B] shrink-0" />
                정답: <span className="font-bold">{correctAnswer}</span>
              </div>
            )}
            {!locked && (
              <PillButton onClick={handleSubmitInput} disabled={!normalize(inputValue)}>
                확인
              </PillButton>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

function ResultScreen({ result, onGoWrongnote, onRetry, onHome }) {
  const pct = result.total > 0
    ? Math.round((result.score / result.total) * 100)
    : 0;

  return (
    <div className="w-full px-6 py-10 flex flex-col items-center text-center">
      <TrophyIllustration />

      <p className="text-[13px] text-[#7A879C] mb-1">
        점수
      </p>

      <p className="text-[40px] font-bold text-[#1E2A3A] leading-none">
        {result.score}
        <span className="text-[20px] font-medium text-[#7A879C]">
          {" "} / {result.total}
        </span>
      </p>

      <div className="mt-3 mb-6 px-4 py-1.5 rounded-full bg-[#EAF3FB] text-[#2E6FBE] text-[11px] font-semibold">
        정답률 {pct}%
      </div>

      <div className="w-full max-w-2xl bg-white rounded-2xl px-4 py-5 flex items-stretch shadow-sm mb-8">

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-[20px] font-bold text-[#3FA66B]">
            {result.score}
          </p>
          <p className="text-[12px] text-[#7A879C] mt-1">
            정답
          </p>
        </div>

        <div className="w-px bg-[#EEF3FA]" />

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-[20px] font-bold text-[#E2574A]">
            {result.wrong.length}
          </p>
          <p className="text-[12px] text-[#7A879C] mt-1">
            오답
          </p>
        </div>

        <div className="w-px bg-[#EEF3FA]" />

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-[20px] font-bold text-[#1E2A3A]">
            {formatTime(result.elapsed || 0)}
          </p>
          <p className="text-[12px] text-[#7A879C] mt-1">
            학습 시간
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl flex flex-col gap-3">
        {result.wrong.length > 0 && (
          <PillButton
            onClick={onGoWrongnote}
            variant="outline"
            className="w-full"
          >
            틀린 문제 확인하기
          </PillButton>
        )}

        <PillButton
          onClick={onRetry}
          className="w-full"
        >
          <RefreshCw size={16} />
          다시 학습하기
        </PillButton>

        <button
          onClick={onHome}
          className="text-[#7A879C] text-[14px] font-medium py-2"
        >
          메인으로
        </button>
      </div>
    </div>
  );
}

function WrongNoteScreen({ packs, wrongMap, loading, onRetest, onRemoveWord }) {
  const packNames = useMemo(() => {
    const m = {};
    packs.forEach((p) => (m[p.id] = p.name));
    return m;
  }, [packs]);

  const entries = Object.entries(wrongMap).filter(([, words]) => words.length > 0);
  const total = entries.reduce((s, [, w]) => s + w.length, 0);
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);

  const visible = filter === "all" ? entries : entries.filter(([id]) => id === filter);

  return (
    <div>
      <div className="flex items-center justify-between px-5 pt-6">
        <h1 className="text-[21px] font-bold text-[#1E2A3A]">오답노트</h1>
        <Jellyfish size={34} />
      </div>
      <p className="px-5 text-[13px] text-[#7A879C] mt-1 mb-4">틀린 단어를 복습하고 완벽하게 기억해요!</p>

      {entries.length > 0 && (
        <div className="px-5 flex gap-2 mb-4 overflow-x-auto">
          <button
            onClick={() => setFilter("all")}
            className={`px-3.5 py-2 rounded-full text-[13px] font-semibold shrink-0 ${filter === "all" ? "bg-[#2E6FBE] text-white" : "bg-white text-[#1E2A3A] shadow-sm"}`}
          >
            전체 {total}
          </button>
          {entries.map(([id, words]) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-3.5 py-2 rounded-full text-[13px] font-semibold shrink-0 ${filter === id ? "bg-[#2E6FBE] text-white" : "bg-white text-[#1E2A3A] shadow-sm"}`}
            >
              {packNames[id] || "삭제된 팩"} {words.length}
            </button>
          ))}
        </div>
      )}

      <div className="px-5 flex flex-col gap-3 pb-8">
        {loading && (
          <div className="flex items-center gap-2 text-[#7A879C] text-sm py-8 justify-center">
            <Loader2 size={16} className="animate-spin" /> 불러오는 중...
          </div>
        )}
        {!loading && entries.length === 0 && (
          <EmptyState Icon={XCircle} title="오답노트가 비어있어요" body="퀴즈를 풀다가 틀린 단어가 여기에 자동으로 쌓여요." />
        )}
        {visible.map(([packId, words]) => (
          <div key={packId} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => setExpanded(expanded === packId ? null : packId)}
              className="w-full flex items-center justify-between px-4 py-3.5"
            >
              <div className="text-left">
                <p className="text-[#1E2A3A] font-semibold">{packNames[packId] || "삭제된 팩"}</p>
                <p className="text-[12px] text-[#7A879C]">{words.length}개</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRetest(packId, packNames[packId] || "오답노트", words);
                }}
                className="bg-[#2E6FBE] text-white rounded-full px-4 py-2 text-[13px] font-semibold flex items-center gap-1.5 shrink-0"
              >
                <Play size={11} fill="currentColor" /> 다시 테스트
              </button>
            </button>
            {expanded === packId && (
              <div className="flex flex-col divide-y divide-[#EEF3FA] border-t border-[#EEF3FA]">
                {words.map((w) => (
                  <div key={w.id || w.en} className="flex items-center justify-between px-4 py-2.5">
                    <div>
                      <span className="text-[#1E2A3A] font-medium text-sm">{w.en}</span>
                      <span className="text-[#7A879C] text-sm ml-2">{w.ko}</span>
                    </div>
                    <button onClick={() => onRemoveWord(packId, w)} className="text-[#B7C4D6] hover:text-[#E2574A]">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [packsStep, setPacksStep] = useState("list");
  const [draftName, setDraftName] = useState("");
  const [draftWords, setDraftWords] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [savedPack, setSavedPack] = useState(null);
  const [saving, setSaving] = useState(false);

  const [packs, setPacks] = useState([]);
  const [loadingPacks, setLoadingPacks] = useState(true);
  const [wrongMap, setWrongMap] = useState({});
  const [loadingWrong, setLoadingWrong] = useState(true);

  const [quizWords, setQuizWords] = useState([]);
  const [quizMeta, setQuizMeta] = useState(null);
  const [result, setResult] = useState(null);
  const [pendingQuiz, setPendingQuiz] = useState(null);

  useEffect(() => {
    refreshPacks();
    refreshWrong();
  }, []);

  async function refreshPacks() {
    setLoadingPacks(true);
    setPacks(await loadAllPacks());
    setLoadingPacks(false);
  }
  async function refreshWrong() {
    setLoadingWrong(true);
    setWrongMap(await loadWrongMap());
    setLoadingWrong(false);
  }

  function fillDistractors(words) {
    return words.map((w) => {
      const koPool = shuffle(words.map((x) => x.ko).filter((k) => k !== w.ko));
      const enPool = shuffle(words.map((x) => x.en).filter((e) => e !== w.en));
      return {
        ...w,
        distractors: koPool.slice(0, 3),
        distractorsEn: enPool.slice(0, 3),
      };
    });
  }

  function handleStartPack(pack) {
    setPendingQuiz({ type: "pack", pack });
    setView("modeSelect");
  }

  function handleRetest(packId, label, words) {
    setPendingQuiz({ type: "retest", packId, label, words });
    setView("modeSelect");
  }

  function beginQuizWithMode(mode) {
    if (!pendingQuiz) return;
    if (pendingQuiz.type === "pack") {
      const filled = fillDistractors(pendingQuiz.pack.words);
      setQuizWords(shuffle(filled));
      setQuizMeta({ packId: pendingQuiz.pack.id, label: pendingQuiz.pack.name, mode });
    } else {
      const filled = fillDistractors(pendingQuiz.words);
      setQuizWords(shuffle(filled));
      setQuizMeta({ packId: pendingQuiz.packId, label: `오답노트 · ${pendingQuiz.label}`, mode });
    }
    setPendingQuiz(null);
    setView("quiz");
  }

  function cancelModeSelect() {
    const returnView = pendingQuiz?.type === "retest" ? "wrongnote" : "packs";
    setPendingQuiz(null);
    setView(returnView);
  }

  async function handleQuizFinish(finalScore, finalWrong, attemptedWords, elapsed) {
    const { packId, label } = quizMeta;
    try {
      const existing = (await getJSON("wrongnote:" + packId)) || [];
      const attemptedEn = new Set(attemptedWords.map((w) => w.en));
      const kept = existing.filter((w) => !attemptedEn.has(w.en));
      const merged = [...kept, ...finalWrong];
      if (merged.length > 0) await setJSON("wrongnote:" + packId, merged);
      else await deleteKey("wrongnote:" + packId);
      await refreshWrong();
    } catch (e) {
      console.error(e);
    }
    setResult({ score: finalScore, total: attemptedWords.length, wrong: finalWrong, packId, label, elapsed });
    setView("result");
  }

  async function handleRemoveWrongWord(packId, word) {
    const existing = (await getJSON("wrongnote:" + packId)) || [];
    const filtered = existing.filter((w) => w.en !== word.en);
    if (filtered.length > 0) await setJSON("wrongnote:" + packId, filtered);
    else await deleteKey("wrongnote:" + packId);
    refreshWrong();
  }

  function goPacksList() {
    setPacksStep("list");
    setDraftName("");
    setDraftWords([]);
    setEditingId(null);
    setSavedPack(null);
    setView("packs");
  }

  async function handleSavePack(name, words) {
    setSaving(true);
    const pack = {
      id: editingId || uid(),
      name,
      words: words.map((w) => ({
        id: w.id || uid(),
        en: w.en.trim(),
        ko: w.ko.trim(),
        ...(w.distractors ? { distractors: w.distractors } : {}),
      })),
      createdAt: Date.now(),
    };
    await setJSON("pack:" + pack.id, pack);
    setSaving(false);
    setSavedPack(pack);
    setPacksStep("success");
    await refreshPacks();
  }

  async function handleDeletePack(id) {
    await deleteKey("pack:" + id);
    await deleteKey("wrongnote:" + id);
    refreshPacks();
    refreshWrong();
  }

  const totalWrongCount = Object.values(wrongMap).reduce((s, a) => s + a.length, 0);

  let body;
  if (view === "home") {
    body = (
      <HomeScreen
        packs={packs}
        loading={loadingPacks}
        wrongMap={wrongMap}
        onStart={handleStartPack}
        onGoPacks={goPacksList}
        onGoWrongnote={() => setView("wrongnote")}
      />
    );
  } else if (view === "packs") {
    if (packsStep === "list") {
      body = (
        <PacksListScreen
          packs={packs}
          loading={loadingPacks}
          onStart={handleStartPack}
          onGoManual={() => setPacksStep("manual")}
          onEdit={(p) => {
            setEditingId(p.id);
            setDraftName(p.name);
            setDraftWords(p.words.map((w) => ({ ...w })));
            setPacksStep("preview");
          }}
          onDelete={handleDeletePack}
        />
      );
    } else if (packsStep === "manual") {
      body = (
        <ManualInputScreen
          onBack={() => setPacksStep("list")}
          onParsed={(words) => {
            setDraftWords(words);
            setEditingId(null);
            setPacksStep("preview");
          }}
        />
      );
    } else if (packsStep === "preview") {
      body = (
        <PreviewScreen
          initialName={draftName}
          initialWords={draftWords}
          saving={saving}
          onBack={() => setPacksStep(editingId ? "list" : "manual")}
          onSave={handleSavePack}
        />
      );
    } else if (packsStep === "success") {
      body = (
        <SuccessScreen
          pack={savedPack}
          onEdit={() => {
            setDraftName(savedPack.name);
            setDraftWords(savedPack.words);
            setEditingId(savedPack.id);
            setPacksStep("preview");
          }}
          onStart={(p) => {
            goPacksList();
            handleStartPack(p);
          }}
        />
      );
    }
  } else if (view === "modeSelect" && pendingQuiz) {
    const title = pendingQuiz.type === "pack" ? pendingQuiz.pack.name : pendingQuiz.label;
    const count = pendingQuiz.type === "pack" ? pendingQuiz.pack.words.length : pendingQuiz.words.length;
    body = (
      <ModeSelectScreen
        title={title}
        count={count}
        onBack={cancelModeSelect}
        onSelect={beginQuizWithMode}
      />
    );
  } else if (view === "quiz" && quizMeta) {
    body = (
      <QuizScreen
        words={quizWords}
        label={quizMeta.label}
        mode={quizMeta.mode}
        onFinish={handleQuizFinish}
        onExit={() => setView("home")}
      />
    );
  } else if (view === "result" && result) {
    body = (
      <ResultScreen
        result={result}
        onGoWrongnote={() => setView("wrongnote")}
        onRetry={() => {
          setQuizWords(shuffle(quizWords));
          setView("quiz");
        }}
        onHome={() => setView("home")}
      />
    );
  } else if (view === "wrongnote") {
    body = (
      <WrongNoteScreen
        packs={packs}
        wrongMap={wrongMap}
        loading={loadingWrong}
        onRetest={handleRetest}
        onRemoveWord={handleRemoveWrongWord}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#EAF3FB] flex">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Noto Sans KR', sans-serif;
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }
      `}</style>

      <NavBar
        view={view === "quiz" || view === "result" || view === "modeSelect" ? "home" : view}
        setView={(v) => {
          setPendingQuiz(null);
          if (v === "packs") {
            goPacksList();
          } else {
            setView(v);
          }
        }}
        wrongCount={totalWrongCount}
      />

      <main className="flex-1 min-w-0 min-h-screen overflow-y-auto">

        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-6">
          {body}
        </div>
      </main>
    </div>
  );
}

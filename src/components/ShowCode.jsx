import { useState, useMemo } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ShowCode() {
  const [tab, setTab] = useState('ui') // "ui" | "store"

  const uiCode = useMemo(() => `const allPopped = kernels.every(k => k.popped);

<button
  onClick={popOne}
  disabled={allPopped}
  className={\`${'px-5 py-2.5 rounded-full font-bold'}\`}
>
  Fai Scoppiare!
</button>

<button onClick={reset} className="px-5 py-2.5 rounded-full font-bold">
  Reset
</button>`, [])

  const storeCode = useMemo(() => `export const usePopStore = create((set, get) => ({
  kernels: makeKernels(),
  pops: 0,

  popOne: () => {
    const next = get().kernels.find(k => !k.popped);
    if (!next) return;
    set(s => ({
      kernels: s.kernels.map(k => k.id === next.id ? { ...k, popped: true } : k),
      pops: s.pops + 1
    }));
  },

  reset: () => set({ kernels: makeKernels(), pops: 0 })
}));`, [])

  const code = tab === 'ui' ? uiCode : storeCode

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  return (
    <div className="mt-6 max-w-3xl ml-auto rounded-xl overflow-hidden border border-zinc-700 shadow-lg bg-zinc-900/90">
      {/* Tabs */}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-800/80 border-b border-zinc-700">
        <div className="flex gap-1">
          <button
            onClick={() => setTab('ui')}
            className={`px-3 py-1.5 rounded-md text-sm ${tab === 'ui' ? 'bg-yellow-400 text-black font-semibold' : 'text-zinc-200 hover:bg-zinc-700'}`}
          >
            UI (Controls.jsx)
          </button>
          <button
            onClick={() => setTab('store')}
            className={`px-3 py-1.5 rounded-md text-sm ${tab === 'store' ? 'bg-yellow-400 text-black font-semibold' : 'text-zinc-200 hover:bg-zinc-700'}`}
          >
            Store (usePopStore.js)
          </button>
        </div>

        <button
          onClick={copy}
          className="px-2 py-1 text-xs rounded-md bg-zinc-700 text-zinc-100 hover:bg-zinc-600"
          title="Copia"
        >
          Copia
        </button>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
        customStyle={{ margin: 0, background: 'transparent' }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>)
}
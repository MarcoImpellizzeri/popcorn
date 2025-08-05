import { usePopStore } from "../store/usePopStore";

export default function Controls() {
  const { popOne, reset, heatOn, pops, kernels } = usePopStore();
  const allPopped = kernels.every(k => k.popped);

  return (
    <div className="flex items-center gap-3 justify-center mt-6">
      <button
        onClick={popOne}
        disabled={allPopped}
        className={`px-4 py-2 rounded-xl ${(allPopped) ? 'bg-zinc-600 text-zinc-300' : 'bg-emerald-600 text-white hover:bg-emerald-500'}`}>
        Fai Scoppiare!
      </button>

      <button onClick={reset} className="px-3 py-2 rounded-xl bg-zinc-800 text-zinc-100 hover:bg-zinc-700">
        Reset
      </button>
    </div>
  );
}

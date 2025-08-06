import { usePopStore } from '../store/usePopStore.js'

export default function RestartModal() {
  const { reset } = usePopStore()

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {/* Modale */}
      <div className="mx-3 flex flex-col items-center justify-center gap-4 bg-orange-900 p-6 rounded-xl max-w-2xl text-center shadow-2xl">
        <h3 className="uppercase text-4xl font-bold text-yellow-400 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.7)]">
          Crazy, li hai scoppiati tutti!
        </h3>
        <button
          onClick={reset}
          className="px-5 py-2.5 rounded-full font-bold shadow-lg bg-red-500 text-white hover:bg-red-400 transform transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          Reset
        </button>
      </div>
    </div>
  )

}

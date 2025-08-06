import { usePopStore } from '../store/usePopStore'
import ShowCode from './ShowCode.jsx'

export default function Controls({ allPopped }) {
  const { popOne, kernels, pops, reset } = usePopStore()

  return (
    <div className="w-full">
      {/* Contatore */}
      <div className="flex justify-end items-center gap-4 mt-4">
        <span className="bg-zinc-800 text-yellow-400 px-4 py-2 rounded-full font-semibold shadow-md">
          🍿 Popcorn scoppiati: {pops} / {kernels.length}
        </span>
      </div>

      {/* Pulsanti */}
      <div className="flex items-center gap-3 justify-end mt-3 w-full">
        <button
          onClick={popOne}
          disabled={allPopped}
          className={`px-5 py-2.5 rounded-full font-bold shadow-lg transform transition-all duration-200 
            ${allPopped
            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
            : 'bg-yellow-400 text-black hover:bg-yellow-300 hover:-translate-y-0.5 active:translate-y-0'}`}
        >
          Fai Scoppiare!
        </button>

        <button
          onClick={reset}
          className="px-5 py-2.5 rounded-full font-bold shadow-lg bg-red-500 text-white hover:bg-red-400 transform transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          Reset
        </button>
      </div>

      {/* Codice */}
      <div>
        <ShowCode />
      </div>
    </div>
  )
}

import { usePopStore } from '../store/usePopStore'
import ShowCode from './ShowCode.jsx'

export default function Controls({ allPopped }) {
  const { popOne, kernels, pops, reset } = usePopStore()
  const handleNumberOfKernels = usePopStore(s => s.handleNumberOfKernels);

  const onChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      handleNumberOfKernels(value);
    }
  }

  return (
    <div className="w-full">
      {/* Contatore */}
      <div className="flex justify-end items-center gap-4 mt-4">
        <span className="bg-zinc-800 text-yellow-400 px-4 py-2 rounded-full font-semibold shadow-md">
          🍿 Popcorn scoppiati: {pops} / {kernels.length}
        </span>
      </div>

      {/* Pulsanti */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-end mt-3 w-full">
        <select
          className="px-5 py-2.5 rounded-full font-bold shadow-lg border-2 border-amber-800
             bg-amber-900 text-white
             hover:bg-amber-800 focus:outline-none
             transition-all duration-200 cursor-pointer
             text-center md:text-left"
          onChange={onChange}
          defaultValue=""
        >
          <option value="" disabled className="bg-amber-900 text-white">Quanti chicchi vuoi?</option>
          <option value={25} className="bg-amber-900 text-white">25</option>
          <option value={50} className="bg-amber-900 text-white">50</option>
          <option value={100} className="bg-amber-900 text-white">100</option>
        </select>
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

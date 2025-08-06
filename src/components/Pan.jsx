import Kernel from './Kernel.jsx'
import { usePopStore } from '../store/usePopStore.js'

export default function Pan() {
  const { kernels } = usePopStore()

  return (
    <div className="relative inline-block">
      <div className="relative inline-block">
        <img
          src="/src/assets/pan.png"
          alt="pan"
          className="w-4xl z-10"
        />
        <div>
          {kernels.map(k => (
            <Kernel
              key={k.id}
              popped={k.popped}
              x={k.x}
              y={k.y}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

import Kernel from './Kernel.jsx'
import { usePopStore } from '../store/usePopStore.js'

export default function Pan() {
  const { kernels } = usePopStore()

  return (
    <div className="relative w-full max-w-[720px]">
      {/* immagine padella */}
      <img
        src="/assets/pan.png"
        alt="pan"
        className="w-full h-auto block select-none"
      />

      {/*
        Cavità ellittica ruotata:
        - Regola le var CSS (--cx, --cy, --rx, --ry, --rot) per farla combaciare con l'interno della padella
      */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          // valori iniziali: tarali in DevTools finché aderisce alla tua padella
          '--cx': '50',   // centro X in % del box intero
          '--cy': '47',   // centro Y in %
          '--rx': '33',   // raggio orizzontale %
          '--ry': '26',   // raggio verticale %
          '--rot': '-24deg', // rotazione ellisse
        }}
      >
        {/* wrapper ellisse ruotata che fa il CLIP */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(var(--rot))`,
            transformOrigin: '50% 50%',
            clipPath: `ellipse(var(--rx)% var(--ry)% at var(--cx)% var(--cy)%)`,
          }}
        >
          {/* contenitore NON ruotato per posizionare bene in % i chicchi */}
          <div className="absolute inset-0" style={{ transform: `rotate(calc(-1 * var(--rot)))` }}>
            {kernels.map(k => (
              <Kernel key={k.id} popped={k.popped} x={k.x} y={k.y} />
            ))}
          </div>

          {/* DEBUG: bordo ellisse per tarare (poi rimuovi) */}
          <div
            className="absolute inset-0"
            style={{
              outlineOffset: '-2px',
              transform: `rotate(calc(-1 * var(--rot)))`,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}

// src/store/usePopStore.js
import { create } from "zustand";

const KERNELS = 100;

// genera un punto uniforme in un'ellisse ruotata (percentuali 0–100)
function randInRotatedEllipse({ cx = 50, cy = 50, rx = 42, ry = 30, rotation = -12 }) {
  const theta = Math.random() * Math.PI * 2;
  const r = Math.sqrt(Math.random());        // sqrt per distribuzione uniforme
  const x = r * rx * Math.cos(theta);
  const y = r * ry * Math.sin(theta);

  const rad = (rotation * Math.PI) / 180;    // ruota l’ellisse
  const xr = x * Math.cos(rad) - y * Math.sin(rad);
  const yr = x * Math.sin(rad) + y * Math.cos(rad);

  return { x: cx + xr, y: cy + yr };         // trasla al centro
}

function makeKernels() {
  return Array.from({ length: KERNELS }, (_, i) => {
    const p = randInRotatedEllipse({
      cx: 480,   // centro dell’area interna
      cy: 220,
      rx: 170,   // raggio orizzontale (in % dell’area interna)
      ry: 140,   // raggio verticale
      rotation: -30 // gradi, per seguire l’inclinazione della padella
    });
    return { id: i, popped: false, x: p.x, y: p.y };
  });
}

export const usePopStore = create((set, get) => ({
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
}));

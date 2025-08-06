// src/store/usePopStore.js
import { create } from "zustand";

const KERNELS = 60;

// Ritorna x,y in percentuale (0..100) dentro un'ellisse ruotata
function randInRotatedEllipse({ cx=50, cy=50, rx=31, ry=23, rotation=-24 }) {
  const theta = Math.random() * Math.PI * 2;
  const r = Math.sqrt(Math.random());     // uniforme sull'area
  const x = r * rx * Math.cos(theta);
  const y = r * ry * Math.sin(theta);

  const rad = (rotation * Math.PI) / 180;
  const xr = x * Math.cos(rad) - y * Math.sin(rad);
  const yr = x * Math.sin(rad) + y * Math.cos(rad);

  return { x: cx + xr, y: cy + yr };      // percentuali 0..100
}

function makeKernels() {
  return Array.from({ length: KERNELS }, (_, id) => {
    const p = randInRotatedEllipse({
      cx: 55,   // centro dell’overlay (50% = centro)
      cy: 40,
      rx: 20,   // “raggi” in % dell’overlay
      ry: 20,
      rotation: -10
    });
    return { id, popped: false, x: p.x, y: p.y };
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

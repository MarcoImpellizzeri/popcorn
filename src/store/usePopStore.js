import { create } from "zustand";

const KERNELS = 15;

export const usePopStore = create((set, get) => ({
  kernels: Array.from({ length: KERNELS }, (_, i) => ({
    id: i, popped: false, x: Math.random()*340+340, y: Math.random()*180+160
  })),
  pops: 0,

  popOne: () => {
    const next = get().kernels.find(k => !k.popped);
    if (!next) return;
    set(s => ({
      kernels: s.kernels.map(k => k.id === next.id ? { ...k, popped: true } : k),
      pops: s.pops + 1
    }));
  },

  reset: () => set({
    kernels: Array.from({ length: KERNELS }, (_, i) => ({
      id: i, popped: false, x: Math.random()*300+310, y: Math.random()*160+160
    })),
    pops: 0
  })
}));

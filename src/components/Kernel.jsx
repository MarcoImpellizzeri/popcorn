// src/components/Kernel.jsx
import { useEffect, useMemo, useState } from 'react';

export default function Kernel({ popped, x, y }) {
  const [popcornNumber, setPopcornNumber] = useState(null);
  const baseRotate = useMemo(() => Math.random() * 80 - 40, []);
  const baseScale  = useMemo(() => 0.9 + Math.random() * 0.25, []);

  useEffect(() => {
    if (popped && popcornNumber === null) {
      setPopcornNumber(Math.floor(Math.random() * 3) + 1);
    }
  }, [popped, popcornNumber]);

  const imageSrc = popped
    ? `/src/assets/popcorn-${popcornNumber ?? 1}.png`
    : `/src/assets/kernel.png`;

  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top:  `${y}%`,
        transform: `translate(-50%, -50%) rotate(${baseRotate}deg) scale(${baseScale})`,
        transformOrigin: 'center',
        transition: 'transform 0.2s ease-in-out',
      }}
    >
      <img src={imageSrc} alt="kernel" className="w-10 lg:w-15 select-none" />
    </div>
  );
}

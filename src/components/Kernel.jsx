import { useEffect, useMemo, useState } from 'react'

export default function Kernel({ popped, x, y }) {
  const [popcornNumber, setPopcornNumber] = useState(null);

  // rotazione e scala casuali, stabili per tutta la vita del componente
  const baseRotate = useMemo(() => Math.random() * 80 - 40, []);     // -40°..+40°
  const baseScale  = useMemo(() => 0.9 + Math.random() * 0.25, []);  // 0.9..1.15
  const popRotateBump = useMemo(() => Math.random() * 10 - 5, []);   // piccola variazione

  useEffect(() => {
    if (popped && popcornNumber === null) {
      setPopcornNumber(Math.floor(Math.random() * 3) + 1);
    }
  }, [popped, popcornNumber]);

  const imageSrc = popped
    ? `/src/assets/popcorn-${popcornNumber}.png`
    : `/src/assets/kernel.png`;

  return(
    <div className="absolute" style={{ left: x, top: y, transform: `rotate(${baseRotate}deg) scale(${baseScale})`, transformOrigin: 'center', transition: 'all 0.2s ease-in-out'}}>
      <img src={imageSrc} alt="kernel" className="w-15"/>
    </div>
  )
}

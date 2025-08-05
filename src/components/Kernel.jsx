export default function Kernel({ popped, x, y }) {
  return(
    <div className="absolute" style={{ left: x, top: y }}>
      <img src={!popped ? '/src/assets/kernel.png' : '/src/assets/popcorn-1.png'} alt="kernel" className="w-15"/>
    </div>
  )
}

export default function Header() {
  return(
    <header className="flex justify-between items-center px-6 py-3 bg-[url('/src/assets/tablecloth.png')] bg-cover bg-center shadow-md relative">
      {/* Ombra sopra lo sfondo per leggibilità */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Titolo */}
      <h1 className="uppercase relative z-10 text-4xl font-bold text-yellow-400 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.7)]">
        Popcorn
      </h1>

      {/* Link GitHub */}
      <a
        href="https://github.com/MarcoImpellizzeri/popcorn"
        target="_blank"
        className="relative z-10 flex items-center gap-2 text-white font-semibold drop-shadow-[2px_2px_3px_rgba(0,0,0,0.7)] hover:text-yellow-300 transition-colors"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub"
          className="w-6 h-6"
        />
        GitHub
      </a>
    </header>

  )
}
import Pan from './components/Pan'
import Header from './components/Header.jsx'
import Controls from './components/Controls'

export default function App() {
  return (
    <div className="min-h-screen bg-[url('/assets/background.png')] bg-cover bg-center flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 px-4 overflow-hidden">
        {/* Padella */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Pan />
        </div>

        {/* Controlli */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Controls />
        </div>
      </main>
    </div>
  )
}



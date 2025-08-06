import Pan from './components/Pan'
import Header from './components/Header.jsx'
import Controls from './components/Controls'
import ShowCode from './components/ShowCode.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center">
      <Header />

      <main className="mt-8 flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8 px-4">
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

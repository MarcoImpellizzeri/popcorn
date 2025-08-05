import Pan from './components/Pan'
import Header from './components/Header.jsx'

export default function App() {

  return (
    <div className="min-h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center">
      <Header />
      <main className="mt-8 flex flex-col items-center">
        <Pan />
        <section className="mt-4 w-full">
          <Controls />
        </section>
      </main>
    </div>
  )
}

import Controls from './components/Controls'


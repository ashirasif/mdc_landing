
import './App.css'
import Clients from './components/Clients'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-[#0a0a0a] flex justify-center p-10 self-stretch'>
      <div className='w-11/12 flex flex-col justify-between gap-8'>
        <div className='flex flex-col gap-20'>
          <Navbar/>
          <HeroSection/>
          <Clients/>
        </div>

      </div>
      
    </div>
  )
}

export default App

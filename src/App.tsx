import Footer from "./components/Footer"
import Home from "./components/home/Home"

function App() {

  return (
    <div className="bg-[url('/bg-overall.png')] bg-cover bg-center overflow-hidden bg-no-repeat">
      <div className="bg-black/80">
        <Home/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

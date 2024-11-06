import Footer from "./components/Footer"
import Home from "./components/home/Home"

function App() {

  return (
    <div className="bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/60">
    <Home/>
    <Footer/>
      </div>
    </div>
  )
}

export default App

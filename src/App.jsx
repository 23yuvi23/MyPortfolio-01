import Navbar from './components/NavBar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import ParticlesBG from "./components/ParticlesBG";


const App = () => {

  return (
    <div>
      
        <Navbar/>
        <ParticlesBG />
        <Home/>
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
import Navbar from './components/NavBar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
    </div>
  )
}

export default App
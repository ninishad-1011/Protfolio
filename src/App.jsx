
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './Section/Contact'
import Projects from './Section/Projects'
import Service from './Section/Service'
import Technologies from './Section/Technologies'

function App() {


  return (
   
    <>
      <div>
           <Navbar/>
           <Service/>
           <Technologies/>
           <Projects/>
           <Contact/>
           <Footer/>
      </div>
    </>
  )
}

export default App

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
     <Router>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/education' element={<Education />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;

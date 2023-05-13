import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import ContactForm from './Components/Contact';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Error from './Components/Error'


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
        <Route path='/experience' element={<Experience />}/>
        <Route path='/contact' element={<ContactForm />}/>
        <Route path='/error' element={<Error />}/>
        <Route path='*' element={<Navigate to='/error' />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;

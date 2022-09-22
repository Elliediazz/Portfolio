import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

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
        <Route path='/contact' element={<Contact />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;

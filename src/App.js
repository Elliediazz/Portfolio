import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import About from './Components/About';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;

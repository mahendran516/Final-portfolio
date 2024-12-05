
import Home from '../src/components/Home';
import Projects from '../src/components/Project';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </Router>
  );
};

export default App;

// Box-shadow: 0 0 5px #4deeea; transition:0.5s; button:hover box-shadow: 0 0 5px #4deeea, 0 0 25px ,0 0 50px,0 0 100px.  convert tailwindcss
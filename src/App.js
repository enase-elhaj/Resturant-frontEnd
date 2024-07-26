import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

import Header2 from './components/Header2';
import Booking from './components/Booking';
import About from './components/About';




function App() {
  return (
    <Router>
    <div className="App">
      <Header2 />

      <Routes>
          <Route exact path='/' element={<Home/>}/>

          <Route path='about' element={<About/>}/>

          <Route path='booking' element={<Booking/>} />

      </Routes>

      <Footer />
    </div>
    </Router>
  );
}

export default App;

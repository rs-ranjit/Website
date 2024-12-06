import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer'
import Menu from "./pages/Menu";

function App() {
  return (
    <div className='App'>
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path='/menu' element={<Menu />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  
  );

}

export default App;

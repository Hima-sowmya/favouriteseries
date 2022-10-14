import './App.css';
import Navbar from './navbar'
import Home from './home';
import Favourites from './favourites';
import About from './about';
//import State from './state';
import Footer from './footer';
import Add_favs from './addfavs';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App=() =>{
  let title="Favourites Movies and Tv shows"
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites data={title}/>} />
          <Route path='/addfavourites' element={<Add_favs />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

//import Cart from './Components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import New from './Components/NewArrival/New';
import All from './Components/AllProducts/All';
import NewC from './Components/NewCollection/NewC';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/newArrival" element={<New/>}/>
        <Route path="/All" element={<All/>}/>
        <Route path="NewCollection" element={<NewC/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

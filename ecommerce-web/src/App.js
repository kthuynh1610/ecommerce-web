//import Cart from './Components/Cart';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import New from './Pages/NewArrival/New';
import All from './Components/AllProducts/All';
import NewC from './Pages/NewCollection/NewC';
import Footer from './Components/Footer/Footer';
import Product from './Components/Products/Product';
import { CartProvider } from './Components/CartProvider/CartContext';

const App = ()=> {
  return (
    <CartProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route>
          <Route path="/newArrival" element={<New/>}/>
          <Route path="/All" element={<All/>}/>
          <Route path="/NewCollection" element={<NewC/>}/>
        </Route>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
      <Footer/>
    </CartProvider>
  );
}

export default App;

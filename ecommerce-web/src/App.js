//import Cart from './Components/Cart';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Product from './Components/Products/Product';
import { CartProvider } from './Components/CartProvider/CartContext';
import Categories from './Pages/Categories/Categories';
import Collection from './Pages/AllProducts/Collection';

const App = ()=> {
  return (
    <CartProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route>
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/All" element={<Collection/>}/>
        </Route>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
      <Footer/>
    </CartProvider>
  );
}

export default App;

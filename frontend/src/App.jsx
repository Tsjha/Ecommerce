import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSinup from './Pages/LoginSinup'
import Footer from './Components/Footer/Footer'
import men_banner from './assets/banner.jpg'
import women_banner from './assets/women_banner.avif'
import kids_banner from './assets/kids_banner.jpg'

function App() {

  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner}
            category="mens" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route path='/product' element={<Product />} />
          <Route path=':productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSinup />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App

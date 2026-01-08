import React from 'react'
import { Route, Routes , Link} from 'react-router-dom'
import Product_List from './Components/Product_List'
import Product_Details from './Components/Product_Details'
import Add_Product from './Components/Add_Product'
import Edit_Product from './Components/Edit_Product'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div>
      <h1>App</h1>
      {/* <Link to="/">Product_List</Link>
      <Link to="/Cart">Cart</Link> */}
      
      <Routes>
        <Route path="/" element={"Hello User"} />
        <Route path="/product_list" element={<Product_List />} />
        <Route path="/products_details/:id" element={<Product_Details />} />
        <Route path="/products_details/Add" element={<Add_Product />} />
        <Route path="/products_details/Edit/:id" element={<Edit_Product />} />
        <Route path="/cart/:id" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Lamps from './pages/Lamps'
import Services from './pages/Services'
import InteriorDecor from './pages/InteriorDecor'
import HomeAutomation from './pages/HomeAutomation'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Review from './pages/Review'
import ProtectedRoute from './context/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import ProductTable from './pages/ProductTable'
import CategoryTable from './pages/CategoryTable'
import AdminLogin from './pages/AdminLogin'
import PurchaseTable from './pages/PurchaseTable'
import EditProduct from './pages/EditProduct'
import EditCategory from './pages/EditCategory'
import CreateCategory from './pages/CreateCategory'
import Register from './pages/Register'
import CreateProduct from './pages/CreateProduct'
import SpaceManagement from './pages/SpaceManagement'
import CreatePost from './pages/CreatePost'
import BlogTable from './pages/BlogTable'
import BlogDetails from './pages/BlogDetails'
import EditBlog from './pages/EditPost'
import BarcodeDisplay from './pages/BarcodeDisplay'
import AuthMessage from './pages/AuthMessage'

const App = () => {
  return (
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/about" element={<About/>}/>
<Route exact path="/services" element={<Services/>}/>
<Route exact path="/interiordecor" element={<InteriorDecor/>}/>
<Route exact path="/homeautomation" element={<HomeAutomation/>}/>
<Route exact path="/interiordecor" element={<InteriorDecor/>}/>
<Route exact path="/spacemanagement" element={<SpaceManagement/>}/>
<Route exact path="/lamps" element={<Lamps/>}/>
<Route exact path="/productdetails/:id" element={<ProductDetails/>}/>
<Route exact path="/login" element={<Login/>}/>
<Route exact path="/register" element={<Register/>}/>
<Route exact path="/admin" element={<AdminLogin/>}/>
<Route exact path="/review" element={<Review/>}/>
<Route exact path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
<Route exact path="/producttable" element={<ProductTable />}/>
<Route exact path="/purchasetable" element={<PurchaseTable />}/>
<Route exact path="/editproduct/:id" element={<EditProduct />}/>
<Route exact path="/categorytable" element={<CategoryTable />}/>
<Route exact path="/editcategory/:id" element={<EditCategory />}/>
<Route exact path="/createcategory" element={<CreateCategory />}/>
<Route exact path="/createproduct" element={<CreateProduct />}/>
<Route exact path="/createpost" element={<CreatePost />}/>
<Route exact path="/blogtable" element={<BlogTable />}/>
<Route exact path="/blogdetails/:id" element={<BlogDetails />}/>
<Route exact path="/editblog/:id" element={<EditBlog />}/>
<Route exact path="/barcode" element={<BarcodeDisplay />}/>
<Route exact path="/auth" element={<AuthMessage />}/>


</Routes>
  )
}

export default App
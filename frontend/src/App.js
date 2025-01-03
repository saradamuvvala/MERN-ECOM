
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast'
import ProductDetails from './components/product/ProductDetails'
import './App.css'


let App =() =>{
    return (
      
    <div className='app'>
        <Router>
        <Toaster position='top center'/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>
            </Routes>
            <Footer/>
        </Router>

    </div>

    )
}


export default App
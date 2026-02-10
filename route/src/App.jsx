import {Route,Routes } from 'react-router-dom'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from  './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Receipe from './components/Navbar/Receipies/Receipe'
import Singlereceipe from './components/Singlereceipe/Singlereceipe'
function App(){
    return(
        <div>
           <Navbar />
            <Routes>
            
                <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />}  ></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Receipe' element={<Receipe />}></Route>
            <Route path='/Receipe/:id' element={<Singlereceipe />}></Route>
            
            </Routes>
        </div>
    )
}
export default App
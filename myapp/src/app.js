import { BrowserRouter as Router,Routes,Route, } from "react-router-dom"


import Register from "./formval"
import Login from "./login"
import Home from "./home"
import Cart from "./cart"
import About from "./about"
function App(){
 return(
    <div>
        <div>
            <Router>
                    
           
            <Routes>
                
                <Route path="/" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                
                 
            </Routes>
            </Router>

        </div>
    </div>
 )
} 
export default App
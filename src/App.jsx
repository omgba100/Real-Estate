import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Profile from "./pages/profile/profile"
import Signup from "./pages/signup/Signup"
import Signin from "./pages/signin/Signin"



function App() {
  

  return (
   
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/profile" element={<Profile/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/signin" element={<Signin/>} />

         </Routes>
      </BrowserRouter>
      
    
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Catalogue from "./pages/Catalogue"
import Whishlist from "./pages/Whishlist"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <div style={{ marginTop: "80px" }}>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/Catalogue" element={<Catalogue/>}/>
          <Route path="/Whishlist" element={<Whishlist/>}/>
        </Routes>
      </div>

      </BrowserRouter>
        
    </>
  )
}

export default App

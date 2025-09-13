import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Tv } from "./pages/Tv"
import { Smartphones } from "./pages/Smartphones"
import { Laptops } from "./pages/Laptops"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/productos/televisores" element= {<Tv/>}/>
        <Route path="/productos/smartphones" element= {<Smartphones/>}/>
        <Route path="/productos/laptops" element= {<Laptops/>}/>
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router"
import Home from "./pages"
import Books from "./pages/books"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Teams from "./pages/Team"
import ContactUs from "./pages/contactUs"


function App() {
 
  return (
    <>
      <div className="container"> 
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="books" element={<Books/>} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="teams" element={<Teams/>} />
            <Route path="ContactUs" element={<ContactUs/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

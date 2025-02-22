import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Logout from "./Pages/Logout"
import PageNotFound from "./Pages/PageNotFound"
import ResetPassword from "./Pages/ResetPassword"


export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="home" element={<Home />} />
    <Route path="login" element={<Login/>} />
    <Route index element={<Signup />} />
    <Route path="logout" element={<Logout />} />
    <Route path="resetPassword" element={<ResetPassword />} />
    <Route path="*" element={<PageNotFound />} />
   </Routes>
   </BrowserRouter>
    
  )
}



import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage"
import Onboarding from "./pages/Onboarding"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/onboarding' element={<Onboarding/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
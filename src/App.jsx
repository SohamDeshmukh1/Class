import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signin from './Pages/Signin'
import './App.css'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signin' element={<Signin/>} />
      </Routes>
    </>
  )
}

export default App

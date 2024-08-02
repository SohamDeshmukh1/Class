import {} from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/' element={<ShowDynamicCards />} />
        <Route path='/buttons' element={<ColoredButton/>} />
      </Routes>
    </>
  )
}

export default App

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Profile from "./pages/Profile";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Prices from "./pages/Prices";
const App = () => {
  return (
    <BrowserRouter>
    <div className='min-h-screen gradient-bg-welcome'>
      <div className="">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Welcome/>} />
          <Route path="/prices" element={<Prices/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
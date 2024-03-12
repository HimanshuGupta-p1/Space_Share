import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Profile from "./pages/Profile";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Prices from "./pages/Prices";
import About from "./pages/About"
import { Auth_ContextProvider } from "./context/Auth_Context";
const App = () => {
  return (
    <BrowserRouter>
    <Auth_ContextProvider>
    <div className='min-h-screen gradient-bg-welcome'>
      <div className="">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Welcome/>} />
          <Route path="/prices" element={<Prices/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </div>
    </Auth_ContextProvider>
    </BrowserRouter>
  )
}

export default App;
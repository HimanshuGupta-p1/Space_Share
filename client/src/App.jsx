import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Profile from "./pages/Profile";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Prices from "./pages/Prices";
import About from "./pages/About"
import Manage_Folder from "./pages/Manage_Folder";
import { Auth_ContextProvider } from "./context/Auth_Context";
import { SpaceShareProvider } from "./context/Space_Share_Context";
const App = () => {
  return (
    <BrowserRouter>
    <Auth_ContextProvider>
      <SpaceShareProvider>
    <div className='min-h-screen gradient-bg-welcome'>
      <div className="">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Welcome/>} />
          <Route path="/prices" element={<Prices/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>}/>
          <Route path={`/manage folder`} element={<Manage_Folder/>}/>
        </Routes>
      </div>
    </div>
    </SpaceShareProvider>
    </Auth_ContextProvider>
    </BrowserRouter>
  )
}

export default App;
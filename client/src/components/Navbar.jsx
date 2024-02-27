import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

import logo from "../assets/logo.png";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SpaceShareContext } from '../context/Space_Share_Context';

const NavbarItem = ({title, props}) => (

    <button
      className={`md:px-3 md:m-2 md:py-1 rounded-full bg-[#f2979f] text-white 
      font-bold transition duration-500 ease-in-out 
      transform hover:shadow-md hover:bg-white hover:text-black
      border-solid border-white border-2 ${props}`}
    >
     <Link to={`/${title.toLowerCase()}`}>{title}</Link>
    </button>
    
  );



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const {connectWallet, currentAccount, disConnectWallet} = useContext(SpaceShareContext)
  // console.log(currentAccount);
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex justify-start items-center text-white md:text-4xl text-xl' style = {{"font-family": "Rowdies, sans-serif"}}>
        <img src = {logo} alt="logo" className='w-20 cursor-pointer' /> SPACE SHARE
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Home", "Prices", "Manage Folder","About", "Profile"]. map((item, index) => (
          <NavbarItem key = {item + index} title = {item}/>
        ))}
        {
          !currentAccount && <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
         <button onClick={() => connectWallet()}> Connect </button> 
        </li>
        }
        {
          currentAccount && <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          <button onClick={() => disConnectWallet()}> Disconnect </button>
        </li>
        }
        
      </ul>
      <div className='flex relative'>
        {
          toggleMenu?
          <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)}/> :
          <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
                  flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
              <li className='text-xl w-full my-2'>
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Home", "Prices", "Manage Folder","About", "Profile"]. map((item, index) => (
          <NavbarItem key = {item + index} title = {item} props="my-2 text-lg" />
        ))}
            </ul>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;
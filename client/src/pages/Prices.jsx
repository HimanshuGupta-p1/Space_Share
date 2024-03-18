import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import { SpaceShareContext } from '../context/Space_Share_Context';

const Registration = ({setActiveForm}) => {
  const {createStorageOrder } = useContext(SpaceShareContext)
  const [storageAddress, setStorageAddress] = useState('')
  const [Capacity, setCapacity] = useState('')
  const [ppg, setPPG] = useState('')
  const [connectionInfo, setConnectionInfo] = useState('')


  const addPrice = () => {
    const storageOrder = {
      _id: 6,
      address: connectionInfo,
      ppg: ppg,
      storage: Capacity
    }
    createStorageOrder(storageOrder)
    // console.log(prices);
  }

  return (
    <div className='justify-center'>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden blue-glassmorphism shadow-md sm:max-w-md sm:rounded-lg">
        <form className=''>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white undefined"
            >
              Storage Owner
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="name"
                onChange={(e) => setStorageAddress(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white undefined"
            >
              Storage Capacity
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="email"
                onChange={(e) => setCapacity(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white undefined"
            >
              PricePerGB
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="password"
                onChange={(e) => setPPG(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-white undefined"
            >
              Connection Info
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="password_confirmation"
                onChange={(e) => setConnectionInfo(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="flex items-center justify-end mt-4">
            <button
              className="text-sm text-gray-600 underline hover:text-gray-900"
              onClick={() => setActiveForm(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 ml-4 text-xs
                                 font-semibold tracking-widest text-white uppercase transition 
                                 duration-150 ease-in-out bg-gray-900 border 
                                 border-transparent rounded-md active:bg-gray-900 false"
              onClick={() => addPrice()}
            >
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}






const Prices = () => {
  const { prices, isDataOwner, createStorageContract } = useContext(SpaceShareContext)

  const [activeForm, setActiveForm] = useState(false)
  const [activeBuyForm, setActiveBuyForm] = useState(false);
  const [buyDetails, setBuyDetails] = useState('');
  const [buySuccessful, setBuySuccessful] = useState(false);
  const [DOConnectionInfo, setDOConnectionInfo] = useState('')

  const buyStorage = async () => {
    console.log(DOConnectionInfo, buyDetails.SO);
    const result = await createStorageContract(buyDetails, DOConnectionInfo);
    setActiveBuyForm(false);
    setBuyDetails('');
    setDOConnectionInfo('');
    setBuySuccessful(result);
    console.log(result);
  }

  return (
    <>
      <div className="overflow-x-auto text-center">
        {isDataOwner === "No" && <button className='modal-open bg-[#2952e3] py-2 px-5 mx-4 
        text-white rounded-full cursor-pointer hover:bg-[#2546bd]'
          onClick={() => setActiveForm(!activeForm)}>Create New Order +
        </button>
        }
        <div className='flex justify-center'>
          {activeForm && <Registration setActiveForm = {setActiveForm} />}
        </div>
        <div className='p-4'></div>
        <table className="min-w-full table-auto blue-glassmorphism border text-white">
          <thead className='border-b'>
            <tr>
              <th className="w-1/4 lg:w-1/5" p-2>Storage Owner</th>
              <th className="w-1/4 lg:w-1/5 p-2">Storage</th>
              <th className="w-1/4 lg:w-1/5 p-2">Price Per GB</th>
              {isDataOwner === "Yes" && <th className="w-1/4 lg:w-1/5 p-2">Buy</th>}
            </tr>
          </thead>
          <tbody className="relative">
            {prices &&
              prices.map((user) => (
                <tr key={user._id} className='text-center border-b'>
                  <td className="w-1/4 lg:w-1/5 p-2">{user?.SO?.toString()}</td>
                  <td className="w-1/4 lg:w-1/5 p-2">{user?.volumeGB?.toString()}</td>
                  <td className="w-1/4 lg:w-1/5 p-2">{user?.pricePerGB?.toString()} eth/month</td>
                  {isDataOwner === "Yes" &&
                    <td className="w-1/4 lg:w-1/5 p-2">
                      <button className="bg-[#2952e3] py-2 px-5 mx-4 text-white rounded-full cursor-pointer hover:bg-[#2546bd]"
                      onClick={() => {setBuyDetails(user); setActiveBuyForm(true)}}>
                        Buy
                      </button>
                    </td>
                  }
                </tr>
              ))}
          </tbody>
        </table>
        {activeBuyForm &&
        <div className='flex justify-center items-center m-4'>
          <div className="ms-auto-xs">
            <form className="blue-glassmorphism shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                  DOConnectionInfo
                </label>
                <input className="shadow appearance-none border rounded py-2 px-3 
                leading-tight focus:outline-none focus:shadow-outline" 
                id="username" type="text" placeholder="Username" 
                onChange={(e) => setDOConnectionInfo(e.target.value)}/>
              </div>
              <div className="mb-6">
                <div className='flex justify-center text-white '>
                  Storage Address: {buyDetails?.SO.toString()}
                  <br/>
                  PricePerGB: {buyDetails?.pricePerGB?.toString()}
                  <br/>
                  VolumeGB: {buyDetails?.volumeGB?.toString()}
                </div>
                {/* <label className="block text-white text-sm font-bold mb-2" htmlFor="">
                  Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" /> */}
                {/* <p className="text-red-500 text-xs italic">Please choose a File Connection</p> */}
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
                onClick={() => buyStorage()}>
                  Buy
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 
                px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
                onClick={() => setActiveBuyForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>}
        {buySuccessful &&
        <section className="py-24">
        <div className="container px-4 mx-auto blue">
          <div className="max-w-2xl mx-auto text-center blue-glassmorphism">
            <span className="inline-block mx-auto mb-6">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.9999 0.333374C12.3066 0.333374 0.333252 12.3067 0.333252 27C0.333252 41.6934 12.3066 53.6667 26.9999 53.6667C41.6933 53.6667 53.6666 41.6934 53.6666 27C53.6666 12.3067 41.6933 0.333374 26.9999 0.333374ZM39.7466 20.8667L24.6266 35.9867C24.2532 36.36 23.7466 36.5734 23.2133 36.5734C22.6799 36.5734 22.1733 36.36 21.7999 35.9867L14.2533 28.44C13.4799 27.6667 13.4799 26.3867 14.2533 25.6134C15.0266 24.84 16.3066 24.84 17.0799 25.6134L23.2133 31.7467L36.9199 18.04C37.6933 17.2667 38.9733 17.2667 39.7466 18.04C40.5199 18.8134 40.5199 20.0667 39.7466 20.8667Z" fill="#138cf0" data-darkreader-inline-fill="" style={{"--darkreader-inline-fill": "#0234fa"}}></path>
              </svg>
            </span>
            <span className="block mb-1 text-sm font-bold text-white">SUCCESS</span>
            <h3 className="text-2xl text-white mb-5">Your order has been placed</h3>
            <p className="text-lg font-bold text-white mb-12">Pay the monthly charges at your profile page and accept the terms and condition.</p>
            <a className="group relative inline-block h-12 w-full xs:w-60 bg-blueGray-900 rounded-md" href="#">
              <div className="absolute top-0 left-0 transform -translate-y-0 -translate-x-0 w-full h-full">
                <div className="flex h-full w-full items-center justify-center bg-[#2952e3] border-2 border-white rounded-md">
                  <span className="text-base font-black text-white"><Link to='/profile' onClick = {() => setBuySuccessful(false)}>Continue Payment</Link></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>}

      </div>
    </>
  )
}

export default Prices;
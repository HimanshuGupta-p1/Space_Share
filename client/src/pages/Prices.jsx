import React, { useContext, useState } from 'react'

import { SpaceShareContext } from '../context/Space_Share_Context';

const Registration = () => {
  const { prices, setPrices, createStorageOrder } = useContext(SpaceShareContext)
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
    // setPrices([...prices, storageOrder])
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
            <a
              className="text-sm text-gray-600 underline hover:text-gray-900"
              href="#"
            >
              Cancel
            </a>
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
  const { prices, setPrices, isDataOwner } = useContext(SpaceShareContext)

  const [activeForm, setActiveForm] = useState(false)
  const [activeBuyForm, setActiveBuyForm] = useState(false);
  const [buyDetails, setBuyDetails] = useState('');

  const buyStorage = (user) => {
    setActiveBuyForm(true);
    setBuyDetails(user);
    console.log(user);
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
          {activeForm && <Registration />}
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
                      onClick={() => buyStorage(user)}>
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
                <input className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 
                px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
                onClick={() => setActiveBuyForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>}

      </div>
    </>
  )
}

export default Prices
import React, { useContext, useState } from 'react'

import { SpaceShareContext } from '../context/Space_Share_Context';

const Registration = () => {
  const {prices, setPrices} = useContext(SpaceShareContext)
  const [storageAddress,setStorageAddress] = useState('')
  const [Capacity, setCapacity] = useState('')
  const [ppg, setPPG] = useState('')
  const [connectionInfo, setConnectionInfo] = useState('')


  const addPrice = () => {
    const storageOrder = {
      _id: 6,
      address: storageAddress,
      ppg: ppg,
      storage: Capacity
    }
    setPrices([...prices, storageOrder])
    console.log(prices);
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
  const {prices, setPrices, isDataOwner} = useContext(SpaceShareContext)

  const [activeForm, setActiveForm] = useState(false)

  return (
    <>
      <div className="overflow-x-auto text-center">
        {!isDataOwner && <button className='modal-open bg-[#2952e3] py-2 px-5 mx-4 
        text-white rounded-full cursor-pointer hover:bg-[#2546bd]' 
        onClick={() => setActiveForm(!activeForm)}>Create New Order +
        </button>
        }
        {
          activeForm && <Registration/>

        }
        <div className='p-4'></div>
        <table className="min-w-full table-auto blue-glassmorphism border text-white">
          <thead className='border-b'>
            <tr>
              <th className="w-1/4 lg:w-1/5" p-2>Storage Owner</th>
              <th className="w-1/4 lg:w-1/5 p-2">Storage</th>
              <th className="w-1/4 lg:w-1/5 p-2">Price Per GB</th>
              <th className="w-1/4 lg:w-1/5 p-2">Buy</th>
            </tr>
          </thead>
          <tbody className="relative">
            {prices &&
              prices.map((user) => (
                <tr key={user._id} className='text-center border-b'>
                  <td className="w-1/4 lg:w-1/5 p-2">{user.address} </td>
                  <td className="w-1/4 lg:w-1/5 p-2">{user.storage}</td>
                  <td className="w-1/4 lg:w-1/5 p-2">{user.ppg} eth/month</td>
                  <td className="w-1/4 lg:w-1/5 p-2">
                    <button className="bg-[#2952e3] py-2 px-5 mx-4 text-white rounded-full cursor-pointer hover:bg-[#2546bd]">
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Prices
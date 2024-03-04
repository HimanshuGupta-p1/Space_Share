
import { SiProtondrive } from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { SpaceShareContext } from "../context/Space_Share_Context";


const Profile = () => {
    const {currentAccount, isDataOwner, registerDataOwner, registerStorageOwner, getStorageOrderByOwner, getStorageContractByOwner} = useContext(SpaceShareContext);
    const [storageOwnerOrder, setStorageOwnerOrder] = useState('')
    const [monthlyCost, setMonthtlyCost] = useState('')
    const [volumeGB, setVolumeGB] = useState('')
    const [owners, setOwners] = useState('')
    useEffect(()=> {
        async function fetchOrderDetailsByOwner(){
            if (currentAccount && isDataOwner === "No"){
                const getStorage = await getStorageOrderByOwner();
                console.log(getStorage.result)
                setStorageOwnerOrder(getStorage);
                console.log(storageOwnerOrder);
                }
        }
        async function fetchContractDetailsByOwner() {
            if (currentAccount){
                console.log(currentAccount);
                const getContracts = await getStorageContractByOwner();
                setOwners(getContracts.length);
                for(let i = 0; i < getContracts.length; i++){
                    setMonthtlyCost(monthlyCost + getContracts[i].pricePerGB)
                    setVolumeGB(volumeGB + getContracts[i].volumeGB)
                }
            }
        }
        fetchOrderDetailsByOwner();
        fetchContractDetailsByOwner();
    }, [currentAccount])
    
    if (currentAccount && isDataOwner){
        return (
            <div className='text-white'>
                {isDataOwner === "Yes" ?
                    <>
                        <div className='flex items-center justify-center text-center'>
                            <SiProtondrive fontSize={50} />
                            <p className='m-4 text-4xl'>
                                You are a Data Owner
                            </p>
                        </div>
                        <div className="flex items-center m-16">
                            <div className="container">
                                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="p-5 blue-glassmorphism rounded shadow-sm">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-50 text-fuchsia-400">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.3333 9.33334H28M28 9.33334V20M28 9.33334L17.3333 20L12 14.6667L4 22.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400">Monthly Charges</div>
                                                <div className="text-2xl font-bold text-gray-900">{monthlyCost} INR/month</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 blue-glassmorphism rounded shadow-sm">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 text-cyan-400">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.52325 6.61231C10.2911 5.20443 12.4206 4.32434 14.6667 4.07333V17.3333H27.9267C27.6757 19.5794 26.7956 21.7089 25.3877 23.4767C23.9798 25.2446 22.1013 26.5791 19.9685 27.3265C17.8357 28.0739 15.5351 28.2039 13.3317 27.7015C11.1282 27.1991 9.11142 26.0847 7.51336 24.4866C5.91529 22.8886 4.80094 20.8718 4.29854 18.6683C3.79614 16.4649 3.92612 14.1643 4.67352 12.0315C5.42092 9.89866 6.75535 8.0202 8.52325 6.61231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20 12H27.3173C26.7188 10.3128 25.7513 8.78047 24.4854 7.5146C23.2195 6.24873 21.6872 5.28125 20 4.68268V12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400">Net Storage</div>
                                                <div className="text-2xl font-bold text-gray-900">{volumeGB} GB</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 blue-glassmorphism rounded shadow-sm">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-400">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.7712 13.1046C20.7714 12.1044 21.3333 10.7478 21.3333 9.33333C21.3333 7.91885 20.7714 6.56229 19.7712 5.5621C18.771 4.5619 17.4145 4 16 4C14.5855 4 13.2289 4.5619 12.2288 5.5621C11.2286 6.56229 10.6667 7.91885 10.6667 9.33333C10.6667 10.7478 11.2286 12.1044 12.2288 13.1046C13.2289 14.1048 14.5855 14.6667 16 14.6667C17.4145 14.6667 18.771 14.1048 19.7712 13.1046Z" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M9.40033 21.4003C11.1507 19.65 13.5246 18.6667 16 18.6667C18.4753 18.6667 20.8493 19.65 22.5997 21.4003C24.35 23.1507 25.3333 25.5246 25.3333 28H6.66666C6.66666 25.5246 7.64999 23.1507 9.40033 21.4003Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400">Storage Owners</div>
                                                <div className="text-2xl font-bold text-gray-900">{owners}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='justify-center text-center items-center flex'>
                            <GrStorage fontSize={50} />
                            <p className='m-4 text-4xl'>
                                You are a Storage Owner
                            </p>
                        </div>
                        <div className="flex items-center m-16">
                            <div className="container">
                                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="p-5 blue-glassmorphism rounded shadow-sm">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-50 text-fuchsia-400">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.3333 9.33334H28M28 9.33334V20M28 9.33334L17.3333 20L12 14.6667L4 22.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400">Monthly Revenue</div>
                                                <div className="text-2xl font-bold text-gray-900">{storageOwnerOrder?.pricePerGB?.toString()} INR/month</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 blue-glassmorphism rounded shadow-sm">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 text-cyan-400">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.52325 6.61231C10.2911 5.20443 12.4206 4.32434 14.6667 4.07333V17.3333H27.9267C27.6757 19.5794 26.7956 21.7089 25.3877 23.4767C23.9798 25.2446 22.1013 26.5791 19.9685 27.3265C17.8357 28.0739 15.5351 28.2039 13.3317 27.7015C11.1282 27.1991 9.11142 26.0847 7.51336 24.4866C5.91529 22.8886 4.80094 20.8718 4.29854 18.6683C3.79614 16.4649 3.92612 14.1643 4.67352 12.0315C5.42092 9.89866 6.75535 8.0202 8.52325 6.61231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20 12H27.3173C26.7188 10.3128 25.7513 8.78047 24.4854 7.5146C23.2195 6.24873 21.6872 5.28125 20 4.68268V12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400">Storage Rented</div>
                                                <div className="text-2xl font-bold text-gray-900">{storageOwnerOrder.volumeGB?.toString()} GB</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 blue-glassmorphism rounded shadow-sm">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-400">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.7712 13.1046C20.7714 12.1044 21.3333 10.7478 21.3333 9.33333C21.3333 7.91885 20.7714 6.56229 19.7712 5.5621C18.771 4.5619 17.4145 4 16 4C14.5855 4 13.2289 4.5619 12.2288 5.5621C11.2286 6.56229 10.6667 7.91885 10.6667 9.33333C10.6667 10.7478 11.2286 12.1044 12.2288 13.1046C13.2289 14.1048 14.5855 14.6667 16 14.6667C17.4145 14.6667 18.771 14.1048 19.7712 13.1046Z" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M9.40033 21.4003C11.1507 19.65 13.5246 18.6667 16 18.6667C18.4753 18.6667 20.8493 19.65 22.5997 21.4003C24.35 23.1507 25.3333 25.5246 25.3333 28H6.66666C6.66666 25.5246 7.64999 23.1507 9.40033 21.4003Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400">Data Owners</div>
                                                <div className="text-2xl font-bold text-gray-900">3</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 blue-glassmorphism rounded shadow-sm">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-400">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 25.3333V17.3333C12 16.6261 11.719 15.9478 11.219 15.4477C10.7189 14.9476 10.0406 14.6667 9.33333 14.6667H6.66667C5.95942 14.6667 5.28115 14.9476 4.78105 15.4477C4.28095 15.9478 4 16.6261 4 17.3333V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H9.33333C10.0406 28 10.7189 27.719 11.219 27.219C11.719 26.7189 12 26.0406 12 25.3333ZM12 25.3333V12C12 11.2928 12.281 10.6145 12.781 10.1144C13.2811 9.61428 13.9594 9.33333 14.6667 9.33333H17.3333C18.0406 9.33333 18.7189 9.61428 19.219 10.1144C19.719 10.6145 20 11.2928 20 12V25.3333M12 25.3333C12 26.0406 12.281 26.7189 12.781 27.219C13.2811 27.719 13.9594 28 14.6667 28H17.3333C18.0406 28 18.7189 27.719 19.219 27.219C19.719 26.7189 20 26.0406 20 25.3333M20 25.3333V6.66667C20 5.95942 20.281 5.28115 20.781 4.78105C21.2811 4.28095 21.9594 4 22.6667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H22.6667C21.9594 28 21.2811 27.719 20.781 27.219C20.281 26.7189 20 26.0406 20 25.3333Z" stroke="currentColor " stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400">Total Earnings</div>
                                                <div className="text-2xl font-bold text-gray-900">{storageOwnerOrder.monthlyRevenue}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </>
                }
            </div>
        )
    }
    else 
        return (
    <>
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-purple-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">Please register as Storage Owner or Data Owner</b> 
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none
             right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
          >
            <span>×</span>
          </button>
        </div>
        <div className="flex justify-center">
        <button className="cssbuttons-io-button m-2">Register as Storage Owner</button>
          <button className="cssbuttons-io-button1 m-2">Register as Data Owner</button>
        </div>
    </>
    )
}

export default Profile
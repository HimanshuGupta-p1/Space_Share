import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'
import { createContext, useState, useEffect } from 'react'

export const SpaceShareContext = createContext();
const { ethereum } = window;

const getEthereumContract = async () => {
    if (!window.ethereum) {
        throw new Error('Metamask or a similar wallet is not installed.');
    }

    // Create a provider instance using window.ethereum
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Request user permission to connect to the wallet
    await provider.send('eth_requestAccounts', []);

    // Get signer from the provider
    const signer = provider.getSigner();

    // Create the contract instance
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionsContract;
}

export const SpaceShareProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('')
    const [isDataOwner, setDataOwner] = useState(null);

    const [prices, setPrices] = useState();

    const createStorageOrder = async (storageOrder) => {
        try {
            if (!ethereum) {
                return alert("Please install metamask");
            }
            // Await the contract creation
            const contract = await getEthereumContract();

            const transactionHash = await contract.createStorageOrder(BigInt(storageOrder.storage), BigInt(storageOrder.ppg), storageOrder.address);
            console.log(transactionHash);

            const length = await contract.getStorageOrderLength();
            console.log(BigInt(length._hex).toString());

            getAllStorageOrders();
        } catch (error) {
            console.error(error);
        }
    };

    const getAllStorageOrders = async () => {
        try {
            const contract = await getEthereumContract();
            const storageOrders = await contract.getAllStorageOrder();
            console.log(storageOrders[0].pricePerGB, storageOrders[0].SO, storageOrders[0].volumeGB);
            setPrices(storageOrders);
        } catch (error) {
            console.log(error);
        }
    }

    const cancelStorageOrder = async () => {
        try {
            const contract = await getEthereumContract();
            const transactionHash = await contract.cancelStorageOrder('0x1FDDEe824da4dBD6534c2756b0E43ce9d5f12a6E');
            console.log(transactionHash);
        } catch (error) {
            console.log(error);
        }
    }


    const checkWalletIsConnected = async () => {
        try {
            if (!ethereum)
                return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);

            }
            else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum Object..")
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum)
                return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
            console.log(currentAccount)
            console.log(accounts)
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum Object..")
        }
    }

    const disConnectWallet = async () => {
        try {
            if (!ethereum)
                return alert("Please install metamask");
            setCurrentAccount(null);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum Object..")
        }
    }

    const registerStorageOwner = async () => {
        try {
            const contract = getEthereumContract();
            const value = contract.methods.SOList.call();
            console.log(value);
        }
        catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     try {
    //         const contract = getEthereumContract();
    //         const value = contract.methods.SOList.call();
    //         console.log(value);
    //     }
    //     catch (error){
    //         console.log(error);
    //     }
    // })
    useEffect(() => {
        checkWalletIsConnected();
        getAllStorageOrders();
    }, []);

    return (
        <SpaceShareContext.Provider
            value={{
                connectWallet,
                currentAccount,
                disConnectWallet,
                prices,
                setPrices,
                isDataOwner,
                createStorageOrder
            }}>
            {children}
        </SpaceShareContext.Provider>
    )
}
import {ethers} from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'
import { createContext, useState, useEffect } from 'react'

export const SpaceShareContext = createContext();
const {ethereum} = window;

const getEthereumContract  = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();

    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionsContract;
}

export const SpaceShareProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState('')
    const [isDataOwner, setDataOwner] = useState(false)

    const [prices, setPrices] = useState([
        {
          _id: 1,
          address: "0x00000",
          ppg: 0.00002,
          storage: 25,
        },
        {
          _id: 2,
          address: "0x00001",
          ppg: 0.00003,
          storage: 30
        },
        {
          _id: 3,
          address: "0x00002",
          ppg: 0.00001,
          storage: 40
        }
    ]
    )

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

    useEffect(() => {

    })
    useEffect(() => {
        checkWalletIsConnected();
    }, []);

    return (
        <SpaceShareContext.Provider
            value={{
                connectWallet,
                currentAccount,
                disConnectWallet,
                prices,
                setPrices,
                isDataOwner
            }}>
            {children}
        </SpaceShareContext.Provider>
    )
}
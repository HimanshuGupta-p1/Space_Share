import React, { useContext } from 'react'
import Typical from 'react-typical'
import logo from '../assets/logo.png'
import { SpaceShareContext } from '../context/Space_Share_Context'
const Welcome = () => {

    const {connectWallet, currentAccount} = useContext(SpaceShareContext)

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full p-4">
                    <div className='sm:text-6xl text-4xl md:p-32 p-4 text-white'>
                        <Typical
                            loop={Infinity}
                            wrapper='b'
                            steps={
                                [
                                    'Disk Space Rental System 💿',
                                    2000,
                                    'Secure',
                                    2000,
                                    'Blockchain',
                                    2000,
                                    'Decentralized Storage',
                                    2000,
                                    'Transparency',
                                    2000,
                                ]
                            }
                        />
                        <br />
                        <div className='m-16 flex gap-5'>
                            <button className="cssbuttons-io-button" onClick={() => connectWallet()}>
                                Get started
                                <div className="icon">
                                    <svg
                                        height="24"
                                        width="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                            </button>

                            <button className="cssbuttons-io-button1">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" fill="currentColor"></path></svg>
                                <a href='https://metamask.io/'>Download MetaMask</a>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
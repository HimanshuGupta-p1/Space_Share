import React from 'react'
import aboutpic from '../assets/pngegg.png'
import Avanish from "../assets/Avanish.png"
import Kushagra from "../assets/Kushagra.png"
import Himanshu from "../assets/Himanshu.png"
import Prakhar from "../assets/Prakhar.png"
import { SocialIcon } from 'react-social-icons'
const About = () => {
  return (
    <><h1 className="text-white text-center font-serif text-4xl mt-6 mb-4">Welcome, To Space Share</h1>
    
    <div className="h-50 w-50 blue-glassmorphism rounded-md
     bg-clip-padding backdrop-filter backdrop-blur-xl 
    bg-opacity-10 border border-gray-100 md:mx-20 mx-2  grid grid-cols-1 lg:grid-cols-2
    items-center">

        <div>
        <h1 className='text-white text-center md:text-left-top ml-5 text-4xl mt-6 '>Our Vision</h1>
        <ul>
        <p className='mt-4 ml-5 mb-3 text-left-top text-xl text-justify
        text-slate-200 mr-2 font-normal'>A disk space renting system using blockchain technology is a platform that allows users to rent out or lease unused storage space on their devices, such as computers, to other users who need it. 
        The platform is built on a blockchain network, which provides secure and transparent transactions between the renters and the providers. 
        The blockchain-based disk space renting system can solve the problem of unused storage space, which is a prevalent issue in today's digital world. 
        Many users have unused storage space on their devices, while others need extra storage space for their data. The platform can connect these users and allow them to transact in a decentralized, secure, and efficient manner. 
        The system works by creating a marketplace where users can list their available storage space and set their rental prices. Other users who need storage space can browse the listings and rent the space they need for a specified period. 
        The rental transactions are recorded on the blockchain, providing transparency and security for all parties involved.</p>
        </ul>
        </div>
        <img src = {aboutpic} alt = "aboutPic"/>
     
      
    </div>
    <><h1 className="text-white text-center font-serif text-4xl mt-6 mb-4">Development Team</h1>
    <p className='text-slate-200 text-center font-serif text-xl'>"Empowering Innovation, Building Tomorrow."</p>
    </>
    <div className='h-50 w-50 pink-glassmorphism rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 md:mx-20 grid grid-cols-1 lg:grid-cols-4 md:mt-2'>
    <div className="shadow-xl mx-3 my-3 rounded-md blue-glassmorphism">
  <figure><img src={Himanshu} alt="Shoes" /></figure>
  <div className="card-body bg-transparent items-center text-white">
    <h2 className="card-title">Himanshu Gupta</h2>
    <p>Team Leader</p>
    <div>
    <SocialIcon network='github' target='_blank' url='https://github.com/HimanshuGupta-p1'/>
    <SocialIcon network='linkedin' target='_blank' url='https://www.linkedin.com/in/himanshu-gupta-28a6ba207'/>
    <SocialIcon network='instagram' target='_blank' url='https://www.instagram.com/_.himanshu._p1?igsh=MTI3eHk5cTVyMnd5dQ=='/>
    </div>
  </div>
</div>
<div className="blue-glassmorphism shadow-xl mx-3 my-3 rounded-md">
  <figure><img src={Avanish} alt="Avanish" /></figure>
  <div className="card-body bg-transparent items-center text-white">
    <h2 className="card-title">Avanish Srivastava</h2>
    <p>Team Member</p>
    <div>
    <SocialIcon network='github' target='_blank' url='https://github.com/Avanishsri31'/>
    <SocialIcon network='linkedin' target='_blank' url='https://www.linkedin.com/in/avanish-srivastava-533035203/'/>
    <SocialIcon network='instagram' target='_blank' url='https://www.instagram.com/avanishsri31/'/>
    </div>
  </div>
</div>
<div className="blue-glassmorphism shadow-xl mx-3 my-3 rounded-md">
  <figure><img src={Prakhar} alt="Shoes" /></figure>
  <div className="card-body bg-transparent items-center text-white">
    <h2 className="card-title">Prakhar Pandey</h2>
    <p>Team Member</p>
    <div>
    <SocialIcon network='github' target='_blank' url='https://github.com/Prakhar1Pandey'/>
    <SocialIcon network='linkedin' target='_blank' url='https://www.linkedin.com/in/prakhar-pandey-52b035203/'/>
    <SocialIcon network='instagram' target='_blank' url='https://www.instagram.com/iprakharpandey/'/>
    </div>
  </div>
</div>
<div className="blue-glassmorphism shadow-xl mx-3 my-3 rounded-md">
  <figure><img src={Kushagra} alt="Shoes" /></figure>
  <div className="card-body bg-transparent items-center text-white">
    <h2 className="card-title">Kushagra Upadhyay</h2>
    <p>Team Member</p>
    <div>
    <SocialIcon network='github' target='_blank' url='https://github.com/Kushagra926'/>
    <SocialIcon network='linkedin' target='_blank' url='https://www.linkedin.com/in/kushagra-upadhyay-9544611a2/'/>
    <SocialIcon network='instagram' target='_blank' url=''/>
    </div>
  </div>
</div>

    </div>
    </>
    
  )
}

export default About
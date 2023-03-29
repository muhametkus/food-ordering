import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Title from './Title'
import  Image from "next/image";
import {GiCancel} from "react-icons/gi";

export const Search = ({setIsSearchModal}) => {
  return (
    <div className="fixed w-screen h-screen z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
        <OutsideClickHandler onOutsideClick={()=>setIsSearchModal(false)}>
    <div className="w-full h-full grid place-content-center">
    <div className="relative z-50  w-[600px]  h-[600px] bg-white border-2">
      <Title addClass="text-[40px] text-center">Search</Title>
      <input type="text" placeholder='Search...' className='border w-full my-10'/>

      <div>
        <ul className=''>
            <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                <div className='relative'>
                    <Image src="/images/f1.png" alt="" width={48} height={48}/>
                </div>
                <span className='font-bold'>Good Pizza</span>
                <span className='font-bold'>$10</span>
            </li>

            <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                <div className='relative'>
                    <Image src="/images/f1.png" alt="" width={48} height={48}/>
                </div>
                <span className='font-bold'>Good Pizza</span>
                <span className='font-bold'>$10</span>
            </li>

            <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                <div className='relative'>
                    <Image src="/images/f1.png" alt="" width={48} height={48}/>
                </div>
                <span className='font-bold'>Good Pizza</span>
                <span className='font-bold'>$10</span>
            </li>
        </ul>
      </div>
<button className='absolute top-4 right-4' onClick={()=>setIsSearchModal(false)}><GiCancel size={25} className=''/></button>
    </div>



    </div>
    </OutsideClickHandler>
    </div>
  )
}

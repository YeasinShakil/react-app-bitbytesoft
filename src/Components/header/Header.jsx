import React from 'react'
import './header.css';
import { TiChevronRight, TiArrowSortedDown, TiPlus } from "react-icons/ti";
import { BsFillCheckCircleFill } from "react-icons/bs";
function Header() {
    const profilePic = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    return (
        <header className=' w-full h-[120px] bg-blue-600 flex justify-center items-center fixed z-10'>
            <div className=' w-[70%] h-[90%] sticky'>
                <div className='flex justify-between px-2 h-[75px]'>
                    <div className=' h-[50px] w-[50px] flex items-center relative border-none'>
                        <img src={profilePic} alt="profile" className='profile_pic' />
                        <div className='w-[15px] h-[15px] bg-green-400 flex items-center justify-center bottom-[3px] right-[-2px] rounded-full absolute z-10'><BsFillCheckCircleFill className='text-white'></BsFillCheckCircleFill> </div>
                        <div className=' pl-[60px] text-white'>
                            <h1 className='text-2xl'>Hello, Raju!</h1>
                            <p className='text-sm text-gray-300'>shakilrock1998@gmail.com</p>
                        </div>
                    </div>
                    <nav>
                        <ul className='flex gap-2 text-white '>
                            <li className='flex justify-center items-center cursor-pointer hover:text-white/80'>Home<TiChevronRight></TiChevronRight></li>
                            <li className='flex justify-center items-center cursor-pointer hover:text-white/80'>Account<TiChevronRight></TiChevronRight></li>
                            <li className='cursor-pointer hover:text-white/80'>Dashbord</li>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-between bottom-2 w-[100%] text-white'>
                    <div >
                        <ul className='flex list-none px-2 gap-4'>
                            <li className='flex items-center cursor-pointer hover:text-white/80'>General<TiArrowSortedDown></TiArrowSortedDown></li>
                            <li className='flex items-center cursor-pointer hover:text-white/80'>Account settings<TiArrowSortedDown></TiArrowSortedDown></li>
                            <li className='flex items-center cursor-pointer hover:text-white/80'>Billing<TiArrowSortedDown></TiArrowSortedDown></li>
                            <li className='flex items-center cursor-pointer hover:text-white/80'>Accessibility<TiArrowSortedDown></TiArrowSortedDown></li>
                            <li className='flex items-center cursor-pointer hover:text-white/80'>Plans</li>

                        </ul>
                    </div>
                    <div className=''>
                        <button className='flex items-center bg-blue-500 px-5 py-1 rounded-sm hover:border-yellow-200 hover:border transition-all duration-50 delay-70 hover:ease-in'><TiPlus className='mx-2' />Request a Payment</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
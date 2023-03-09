import React from 'react';
import { 
    AiOutlineHome, AiOutlineShoppingCart, AiOutlineRedo, AiFillGift,
} from "react-icons/ai";
import { FaFileInvoice, FaUserFriends } from "react-icons/fa";
import { BiCloudDownload, BiTargetLock } from "react-icons/bi";
import { ImNotification} from "react-icons/im";
import { CgProfile} from "react-icons/cg";

import './sideBar.css'

const SideBar = () => {
    return (
        <div className='w-[200px] h-[450px] bg-slate-50 ml-10 mt-10 pl-5 py-5 gap-4 flex flex-col side_bars fixed'>
            <p><AiOutlineHome className=' text-gray-500'/>Dashboard</p>
            <p><AiOutlineShoppingCart className=' text-gray-500'/>Orders</p>
            <p><FaFileInvoice className=' text-gray-500'/>Invoices</p>
            <p><BiCloudDownload className=' text-gray-500'/>Output</p>
            <p><AiOutlineRedo className=' text-gray-500'/>Redo</p>
            <p><FaUserFriends className=' text-gray-500'/>Referrals</p>
            <p><AiFillGift className=' text-gray-500'/>Rewards</p>
            <p><BiTargetLock className=' text-gray-500'/>Feature Request</p>
            <p><ImNotification className=' text-gray-500'/>Notice</p>
            <p><CgProfile className=' text-gray-500'/>Profile</p>
        </div>
    );
};

export default SideBar;
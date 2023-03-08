import React from 'react'

function Header() {
    return (
        <div className=' w-100 h-[120px] bg-blue-600 flex justify-center items-center relative'>
            <div className=' w-[70%] h-[90%] bg-indigo-500'>
                <div className='h-5 bg-slate-400'>
                    <div>shakil</div>

                </div>
                <div className=' grid grid-rows-2 absolute bottom-2 w-100'>
                    <div >
                        <ul className='flex list-none px-2 gap-4'>
                            <li>Account</li>
                            <li>Sell</li>
                            <li>generel</li>
                            <li>dashboard</li>
                        </ul>
                    </div>
                    <div className=''>
                        <button>payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
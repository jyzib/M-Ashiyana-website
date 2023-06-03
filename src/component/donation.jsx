import React from 'react';
import logo from '../assets/donation.svg'; 

export default function Donation() {
    return (
        <div className='py-4 '>
            <div className='flex flex-col justify-center items-center p-5 w-4/5 m-auto bg-donation shadow-donation border-donation border-neutral-100 rounded-65'>
                <div className='flex justify-center items-center mb-10 w-93 h-90 bg-logo shadow-logo border-logo border-white rounded-logo'>
                    <img src={logo} />
                </div>
                <p className='text-blue font-bold text-2xl mb-2'>Make a Donation</p>
                <p className='text-white text-center mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                <button className='bg-white text-blue text-base font-bold rounded-7 p-4'>Donate Now</button>
            </div>
        </div>
    )
}
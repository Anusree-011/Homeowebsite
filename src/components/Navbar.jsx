import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav className='w-full bg-white shadow-sm flex justify-between items-center py-4 px-10 sticky top-0 z-10'>
                <div className='flex items-center gap-2 flex-1'>
                    <h1 className='text-2xl font-bold text-white bg-green-700 rounded-md w-[40px] h-[40px] flex justify-center items-center shadow-lg shadow-green-200'>H</h1>
                    <h1 className='text-2xl font-bold text-slate-800 tracking-tight'>Homeo<span className='text-green-700'>pathy</span></h1>
                </div>
                <div className='hidden md:flex justify-center items-center gap-10 flex-1 font-medium text-slate-600'>
                    <h1 onClick={() => navigate("/")} className='hover:text-green-700 cursor-pointer transition-colors'>Home</h1>
                    <h1 onClick={() => navigate("/patientDetails")} className='hover:text-green-700 cursor-pointer transition-colors'>Patient Details</h1>
                </div>
                <div className='flex justify-end items-center gap-6 flex-1'>
                    <h1 className='text-sm font-semibold text-slate-700 bg-slate-100 px-4 py-2 rounded-full border border-slate-200'>Dr. Anushka</h1>
                    <button onClick={() => navigate("/login")} className='text-sm font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider'>Logout</button>
                </div>
            </nav >

        </div>
    )
}

export default Navbar
import React from 'react'

const PatientDetails = () => {
    return (
        <div className='min-h-screen bg-slate-50 font-sans'>
            <nav className='w-full bg-white shadow-sm flex justify-between items-center py-4 px-10 sticky top-0 z-10'>
                <div className='flex items-center gap-2 flex-1'>
                    <h1 className='text-2xl font-bold text-white bg-green-700 rounded-md w-[40px] h-[40px] flex justify-center items-center shadow-lg shadow-green-200'>H</h1>
                    <h1 className='text-2xl font-bold text-slate-800 tracking-tight'>Homeo<span className='text-green-700'>pathy</span></h1>
                </div>
                <div className='hidden md:flex justify-center items-center gap-10 flex-1 font-medium text-slate-600'>
                    <h1 className='hover:text-green-700 cursor-pointer transition-colors'>Home</h1>
                    <h1 className='hover:text-green-700 cursor-pointer transition-colors'>Contact</h1>
                    <h1 className='hover:text-green-700 cursor-pointer transition-colors'>Images</h1>
                </div>
                <div className='flex justify-end items-center gap-6 flex-1'>
                    <h1 className='text-sm font-semibold text-slate-700 bg-slate-100 px-4 py-2 rounded-full border border-slate-200'>Dr. Anushka</h1>
                    <button className='text-sm font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider'>Logout</button>
                </div>
            </nav >

            <div className='max-w-7xl mx-auto py-12 px-6'>
                <div className='bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100'>
                    <div className='bg-green-700 px-10 py-8 text-white'>
                        <h2 className='text-3xl font-bold'>Patient Registration</h2>
                        <p className='text-green-100 mt-2 opacity-90'>Please fill in the patient details accurately for the records.</p>
                    </div>

                    <form className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-bold text-slate-700 tracking-wide ml-1' htmlFor="firstName">First Name</label>
                            <input
                                className='px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white transition-all outline-none text-slate-700'
                                type="text" id="firstName" placeholder="e.g. John"
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-bold text-slate-700 tracking-wide ml-1' htmlFor="lastName">Last Name</label>
                            <input
                                className='px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white transition-all outline-none text-slate-700'
                                type="text" id="lastName" placeholder="e.g. Doe"
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-bold text-slate-700 tracking-wide ml-1' htmlFor="age">Age</label>
                            <input
                                className='px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white transition-all outline-none text-slate-700'
                                type="number" id="age" placeholder="00"
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-bold text-slate-700 tracking-wide ml-1' htmlFor="gender">Gender</label>
                            <select className='px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white transition-all outline-none text-slate-700 appearance-none' id="gender">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-bold text-slate-700 tracking-wide ml-1' htmlFor="contactNumber">Contact Number</label>
                            <input
                                className='px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white transition-all outline-none text-slate-700'
                                type="tel" id="contactNumber" placeholder="+91 00000 00000"
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-bold text-slate-700 tracking-wide ml-1' htmlFor="email">Email Address</label>
                            <input
                                className='px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white transition-all outline-none text-slate-700'
                                type="email" id="email" placeholder="john@example.com"
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:col-span-2 lg:col-span-3'>
                            <label className='text-sm font-bold text-slate-700 tracking-wide ml-1' htmlFor="address">Full Address</label>
                            <input
                                className='px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white transition-all outline-none text-slate-700'
                                type="text" id="address" placeholder="123, Street Name, City, State"
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:col-span-2 lg:col-span-3'>
                            <label className='text-sm font-bold text-slate-700 tracking-wide ml-1' htmlFor="details">Medical History / Details</label>
                            <textarea
                                className='px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white transition-all outline-none text-slate-700 resize-none'
                                id="details" rows="5" placeholder="Enter any previous conditions, symptoms, or medications..."
                            ></textarea>
                        </div>

                        <div className='md:col-span-2 lg:col-span-3 flex justify-end mt-4'>
                            <button className='bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-12 rounded-2xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 active:scale-95 text-lg'>
                                Save Patient Record
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default PatientDetails

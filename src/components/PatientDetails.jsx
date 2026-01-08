import React from 'react'
import Navbar from './Navbar'

const PatientDetails = () => {
    return (
        <div className='min-h-screen bg-slate-50 font-sans'>
            <Navbar />
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

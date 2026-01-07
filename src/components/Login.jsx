import React, { useState } from 'react'
import HomeoImg from "../assets/homeo.jpg"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const [value, setValue] = useState({
        email: "",
        password: "",
        username: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/patientDetails")
    }
    return (

        <div className='flex min-h-screen bg-slate-50 font-sans'>

            {/* Left Image Section - Standard Professional Layout */}
            <div className='hidden overflow-hidden lg:flex w-1/2 items-center justify-center bg-slate-50 p-12'>
                <div className=" overflow-hidden relative w-full h-[650px] max-w-2xl">
                    <img
                        className='w-full h-full object-cover rounded-xl shadow-lg border border-slate-200'
                        src={HomeoImg}
                        alt="Homeopathy Professional Care"
                    />
                </div>
            </div>


            <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-24'>
                <div className='w-full max-w-sm'>
                    <div className="mb-10">
                        <h2 className='text-3xl font-bold text-slate-900 mb-2'>{isLogin ? "Sign in" : "Create account"}</h2>
                        <p className='text-slate-500'>{isLogin ? "Welcome back! Please enter your details." : "Join us to start your professional care journey."}</p>
                    </div>

                    <form className='flex flex-col gap-5'>

                        {!isLogin && (
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-700">Full Name</label>
                                <input
                                    type="text"
                                    placeholder='John Doe'
                                    value={value.username}
                                    onChange={(e) => setValue({ ...value, username: e.target.value })}
                                    className='w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400'
                                    required
                                />
                            </div>
                        )}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-700">Email address</label>
                            <input
                                type="email"
                                value={value.email}
                                onChange={(e) => setValue({ ...value, email: e.target.value })}
                                placeholder='email@example.com'
                                className='w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400'
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-slate-700">Password</label>
                                <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot password?</button>
                            </div>
                            <input
                                type="password"
                                placeholder='••••••••'
                                value={value.password}
                                onChange={(e) => setValue({ ...value, password: e.target.value })}
                                className='w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400'
                                required
                            />
                        </div>

                        <div className="flex items-center gap-2 py-1">
                            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                            <label htmlFor="remember" className="text-sm text-slate-600">Remember for 30 days</label>
                        </div>

                        <button
                            type='submit'
                            onClick={handleSubmit}
                            className='w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-sm'
                        >
                            {isLogin ? "Sign in" : "Sign up"}
                        </button>
                    </form>
                    {isLogin ? (
                        <p className="mt-8 text-center text-sm text-slate-600">
                            Don't have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setIsLogin(false)}
                                className="font-semibold text-blue-600 hover:text-blue-700"
                            >
                                Register
                            </button>
                        </p>
                    ) : (
                        <p className="mt-8 text-center text-sm text-slate-600">
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setIsLogin(true)}
                                className="font-semibold text-blue-600 hover:text-blue-700"
                            >
                                Login
                            </button>
                        </p>
                    )}


                </div>
            </div>

        </div>
    )
}

export default Login
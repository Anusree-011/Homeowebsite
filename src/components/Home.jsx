import React, { useEffect, useState } from 'react'
import HomeoImg2 from '../assets/homeoimg.jpg'
import HomeoImg3 from '../assets/homeoinmg2.jpg'
import Navbar from './Navbar'

const images = [HomeoImg3, HomeoImg2]

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, 2000) // 5 seconds

        return () => clearInterval(interval) // cleanup
    }, [])

    return (
        <div className="flex flex-col h-screen w-full bg-slate-50 font-sans overflow-hidden">
            <Navbar />

            <div className="relative flex-1 w-full overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt="Homeo"
                    className="w-full h-full object-cover transition-opacity duration-1000"
                />
            </div>
        </div>
    )
}

export default Home

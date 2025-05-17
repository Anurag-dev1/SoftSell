import React from 'react'
import image from "../assets/2.png"
const Hero = () => {
  return (
    <div  className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-blue-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-amber-500 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      <div className="container pb-8 sm:pb-0">
        <div>
            <div className="grid gird-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1  ">
                    <h1 data-aos="zoom out" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-3xl lg:text-7xl font-bold">Sell Your Unused Software Licenses Effortlessly</h1>
                    <p>Turn idle software into revenue with SoftSell. Fast, secure, and compliant.</p>
                    <div data-aos="fade up" data-aos-duration="500" data-aos-delay="300">
                        <button className="bg-gradient-to-r from-red-500 to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group cursor-pointer">Sell My Licences</button>
                    </div>
                </div>
                <div className='relative z-10'>
                    <img src={image} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-75 object-contain mx-auto h-10  object-cover rounded-full w-10 '/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import Img1 from "../assets/3.png"
import Img2 from "../assets/4.png"
import Img3 from "../assets/5.png"
const Works = [
    {
        id: 1,
        img: Img1,
        title: "Upload Licence",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Get Valuation",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Get Paid",
        aosDelay: "400",
    },
];
const HowItWorks = () => {
    return (
        <div className="mt-14 mb-12 ">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <h1 data-aos="fade up" className="text-3xl font-bold">
                        How It Works
                    </h1>
                </div>
                {/* Body section */}
                <div>
                    <div className=" justify-around flex">
                        {/* card section */}
                        {Works.map((data) => (
                            <div data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className="space-y-3">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="h-[220px] w-[150px] "
                                />
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <div className="flex items-center gap-1">
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* view all button */}
                    <div className="flex justify-center">
                        <button data-aos="fade up" className="bg-red-500 text-white py-1 px-4 rounded-full flex items-center gap-3 group cursor-pointer">
                            Sell Licence Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks

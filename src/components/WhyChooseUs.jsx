import React from 'react'
import Img1 from "../assets/6.png"
import Img2 from "../assets/7.png"
import Img3 from "../assets/8.png"
import Img4 from "../assets/9.png"

const ChooseUs = [
    {
        id: 1,
        img: Img1,
        title: "Fast Process",
    },
    {
        id: 2,
        img: Img2,
        title: "Secure Transactions",
    },
    {
        id: 3,
        img: Img3,
        title: "Legal Compliance",
    },
    {
        id: 4,
        img: Img4,
        title: "Trusted by Clients",
    },
];

const WhyChooseUs = () => {
    return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Why Choose Us?
          </h1>
        </div>
        {/* Body section */}
        <div className=" justify-around flex">
          {ChooseUs.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
                <h1 className="text-xl font-bold">{data.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

            export default WhyChooseUs
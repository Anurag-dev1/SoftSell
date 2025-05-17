import { Settings } from 'lucide-react';
import React from 'react'
import Slider from 'react-slick'

const testimonials = [
  {
    name: "Alice Morgan",
    role: "IT Director",
    company: "TechCorp",
    message: "SoftSell made the resale process a breeze. Highly recommend!",
  },
  {
    name: "John Carter",
    role: "CFO",
    company: "Innovate Ltd",
    message: "We recovered thousands in unused licenses. Fast and reliable service!",
  },
];


function Testimonial() {
  return (
    <div className='py-10 mb-10 m-40'>
      <div className="container">
        <div className=" mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            We Got Testimonials For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
        </div>
        <div className='text-center justify-between flex'>
          <div data-aos="fade-right">
            <h1 className='text-2xl font-semibold mb-8'>Alice Morgan</h1>
            <h2>IT Director</h2>
            <h3>TechCorp</h3>
            <p>SoftSell made the resale process a breeze. Highly recommend!</p>
          </div>
          <div data-aos="fade-left">
            <h1 className='text-2xl font-semibold mb-8'>John Carter</h1>
            <h2>CFO</h2>
            <h3>Innovate Ltd</h3>
            <p>We recovered thousands in unused licenses. Fast and reliable service!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

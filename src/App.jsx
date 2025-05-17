import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import AOS from "aos"
import "aos/dist/aos.css"
import React from 'react'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

const App=()=>{

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);

  return (
    <>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <WhyChooseUs/>
      <Testimonial/>
      <ContactForm/>
      <Footer/>
    </>
  )

};

export default App

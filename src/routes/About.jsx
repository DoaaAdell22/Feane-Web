import { MdOutlineRestaurant } from "react-icons/md";
import  { useState, useEffect } from 'react';

const About = () => {
    const [years, setYears] = useState(0);
  const [chefs, setChefs] = useState(0);

  useEffect(() => {
    const yearsTimer = setInterval(() => {
      setYears((prev) => {
        if (prev < 15) return prev + 1;
        clearInterval(yearsTimer);
        return prev;
      });
    }, 100);
    const chefsTimer = setInterval(() => {
      setChefs((prev) => {
        if (prev < 50) return prev + 1;
        clearInterval(chefsTimer);
        return prev;
      });
    }, 50);

    return () => {
      clearInterval(yearsTimer);
      clearInterval(chefsTimer);
    };
  }, []);

  return (
    <div className="container mx-auto px-5 py-10 flex flex-col-reverse md:flex-row justify-center items-center  gap-10 font-semibold">
        <div className="grid grid-cols-2 gap-3 justify-center items-end  md:w-[50%]">
            <img src='/about-1.jpg' />
            <img src='/about-2.jpg' className="w-60 h-60 self-end " />
            <img src='/about-3.jpg' className="w-60 h-60 self-start justify-self-end " />
            <img src='/about-4.jpg' className="self-start sm:self-auto"/>
        </div>
        <div className="flex flex-col sm:items-start items-center text-center sm:text-start   gap-4 md:w-[50%]">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2"><h1 className="text-[30px] text-[#FEA116]">About Us </h1><hr className="w-14 h-1  bg-[#FEA116]"/></div>
            <h2 className="md:text-[40px] text-[30px] ">Welcome to <span className="text-[#FEA116] inline-block "><MdOutlineRestaurant /></span> Feane</h2>
            <p className="text-[#777]">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className="my-6 text-[#777]">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
            , sed stet lorem sit clita duo justo magna dolore erat amet            </p>
            <div className="grid grid-cols-2   sm:gap-12 gap-4  items-center">
                <div className="flex justify-center items-center gap-3 sm:gap-6">
                    <hr className="h-16 w-2 bg-[#FEA116]"/>
                    <span className="text-[#FEA116] sm:text-[55px] text-[38px] font-bold">{years}</span>
                    <div >
                        <p className="font-semibold text-[#777]">Years of </p>
                        <p className="sm:text-[14px] text-[12px]">EXPERIENCE </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3 sm:gap-6">
                    <hr className="h-16 w-2 bg-[#FEA116]"/>
                    <span className="text-[#FEA116] sm:text-[55px] text-[38px] font-bold">{chefs}</span>
                    <div>
                        <p className="font-semibold text-[#777]"> Popular </p>
                        <p className="sm:text-[14px] text-[12px]">MASTER CHEFS </p>
                    </div>
                </div>
            </div>
            <boutton className='bg-[#FEA116] md:px-10 p-6 py-2 text-[white] rounded-full md:text-[20px] mt-6 cursor-pointer'>Read More</boutton>
        </div>
    </div>
  )
}

export default About

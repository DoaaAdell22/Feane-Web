// import {   Image } from "antd"
import { motion } from "framer-motion"
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { Link } from 'react-scroll';
import { FaUser } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import Landing from "../routes/Landing";
const Header = () => {

    const list = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
      };
    
      const item = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
      };
    
      const [isOpen, setOpen] = useState(false)

      const clicked = () => {
        setOpen(!isOpen)
       }
    
      
    return (
    <div className="relative bg-bg1 bg-no-repeat bg-cover h-[100%] ">
        <div className="absolute inset-0 bg-black opacity-80 z-0 "></div>
        <div className="flex justify-between items-center container mx-auto p-5 text-[white] z-10 relative  ">
            <div className="text-[20px]">
                <span>Feane</span>
            </div>
            <div className="block md:hidden " onClick={clicked}><Hamburger /></div>
            <div className=' justify-center items-center gap-8 hidden md:flex '>
                <ul className=" flex-row-reverse justify-center items-center gap-8 lg:text-[18px] text-[12px] hidden md:flex cursor-pointer">
                            <Link to="Book" smooth={true} duration={500} className="hover:text-[#ffbe33]">BOOK TABLE </Link>
                            <Link to="About" smooth={true} duration={500} className="hover:text-[#ffbe33]">ABOUT</Link>
                            <Link to="Menu" smooth={true} duration={500} className="hover:text-[#ffbe33]"> MENU </Link>
                            <Link to="Home" smooth={true} duration={500} className="hover:text-[#ffbe33]">HOME</Link>
                </ul>
                <div className='flex justify-center items-center gap-3 '>
                    <a className='hover:text-[#ffbe33] cursor-pointer '><FaUser className='w-4 h-4' /></a>
                    <a className='hover:text-[#ffbe33] cursor-pointer '><PiShoppingCartSimpleFill className='w-5 h-5' /> </a>
                    <a className='hover:text-[#ffbe33] cursor-pointer '><IoSearchSharp className='w-5 h-5'/> </a>
                </div>
                <div>
                    <button  className=' hover:bg-[#ffbe33] lg:px-8 px-6 py-2 lg:text-[18px]  rounded-full border-none bg-[#ffbc2c] text-[white]'>Order Online</button>
                </div>
            </div>
            
    
        </div>
        {
            isOpen ? 
            <div className='  flex flex-col gap-4 md:hidden  text-[white] pb-5 z-10 relative'>
                <motion.ul   initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={list} className="flex flex-col-reverse justify-center items-center p-6  gap-5 text-end  md:hidden cursor-pointer text-[white]">
                    <motion.li variants={item}><Link to="Orders" smooth={true} duration={500} className="hover:text-[#ffbe33]" >   BOOK TABLE </Link></motion.li>
                    <motion.li variants={item}><Link to="Wallet" smooth={true} duration={500}   className="hover:text-[#ffbe33]"  >  ABOUT</Link></motion.li>
                    <motion.li variants={item}><Link  to="About" smooth={true} duration={500}  className="hover:text-[#ffbe33]"  >   MENU </Link></motion.li>
                    <motion.li  variants={item}><Link to="Home" smooth={true} duration={500} className="hover:text-[#ffbe33]" >  HOME </Link></motion.li>
                </motion.ul> 
                <div className="flex justify-center items-center gap-3">
                <div className='flex justify-center items-center gap-3 '>
                    <a className='hover:text-[#ffbe33] cursor-pointer '><FaUser className='w-4 h-4' /></a>
                    <a className='hover:text-[#ffbe33] cursor-pointer '><PiShoppingCartSimpleFill className='w-5 h-5' /> </a>
                    <a className='hover:text-[#ffbe33] cursor-pointer '><IoSearchSharp className='w-5 h-5'/> </a>
                </div>
                <div>
                    <button  className=' hover:bg-[#ffbe33] px-6 py-2 text-[16px] rounded-full border-none bg-[#ffbc2c] text-[white]'>Order Online</button>
                </div>
                </div>
            </div>
            : ''
          }
          <Landing />
    </div>
    )
}

export default Header








// <div className="flex md:flex-row flex-row  justify-between   items-center gap-5 p-5 container mx-auto   ">
//             <div className="block md:hidden " onClick={clicked}><Hamburger /></div>
//             <button  className="md:p-[11px] p-[10px]  rounded-3xl bg-[#F9CE29] lg:text-[14px] text-[12px]  ">احصل على التطبيق الأن</button>
//             <ul className=" flex-row justify-center items-center gap-8 lg:text-[14px] text-[12px] hidden md:flex cursor-pointer">
//                 <Link to="Guide" smooth={true} duration={500} className="hover:text-[#F9CE29]">كيفية تشغيل التطبيق</Link>
//                 <Link to="Orders" smooth={true} duration={500} className="hover:text-[#F9CE29]">طلبات الدفع</Link>
//                 <Link to="Wallet" smooth={true} duration={500} className="hover:text-[#F9CE29]">المحفظة</Link>
//                 <Link to="About" smooth={true} duration={500} className="hover:text-[#F9CE29]">لمحة عن التطبيق</Link>
//                 <Link to="Landing" smooth={true} duration={500} className="hover:text-[#F9CE29]">الرئيسية</Link>
//             </ul>
//             <div className="flex flex-row justify-center items-center " >
//                 <img src='/logoDafea.png' className="sm:w-[114px] sm:h-[48px] " width={60} height={30}/>
//             </div>
            
            
//         </div>
       




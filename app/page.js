'use client'
import { useState } from "react";
import useMousePosition from "./utils/useMouseMove";
import { motion } from "framer-motion";
export default function Home() {
  const { x , y }=useMousePosition();
  const [ishovered,setIsHovered] =useState(false)
  const size =ishovered?400 :40;
  return (
    <main  className="h-[100vh]  ">
    <motion.div
    animate={{WebkitMaskPosition : `${x - (size/2)}px ${y -(size/2)}px`,
    WebkitMaskSize:`${size}px`}}
     className="flex h-full w-full items-center text-[34px] justify-center px-3 py-2 absolute bg-red-500 text-black"  transition={{ type: "tween", ease: "backOut", duration:0.5}}
     style={{ maskImage: "url('mask.svg')",maskRepeat:"no-repeat",maskSize:"40px" }}>
      <p onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>{setIsHovered(false)}} className="w-[1000px]">My name is Mishal , As a full-stack developer, I bring a wealth of experience and expertise to the table, navigating the intricate landscape of both front-end and back-end development with precision.</p> 
    </motion.div>
    <div className=" flex h-full w-full items-center text-[34px] justify-center px-3 py-2 "><p className="w-[1000px]">With a laser focus on front-end development, I channel my passion into crafting immersive user experiences that leave a lasting impact. </p></div>
    </main>
  );
}
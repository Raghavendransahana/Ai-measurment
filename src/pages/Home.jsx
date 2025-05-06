import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, DollarSign, ClipboardList, Smile } from "lucide-react";
import img from "../assets/img.png"; 
import bg from "../assets/bg.png"
import Navbar from "../components/Navbar";
const Home = () => {
  return (
   
<div
  className="min-h-screen flex flex-col items-center pt-16"
  style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
>    
      <motion.img
        src={img}
        alt="Hero"
        className="w-140 p-10 md:w-252 mb-6 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="text-center text-pink-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-4xl lavishly-yours-regular font-extrabold leading-snug tracking-wide">
        Unveiling boldness and <br />elegance—our inspirations say it all
        </h1>
       
      </motion.div>

     

    
   
        
        
     

      
    </div>
    
  );
};

export default Home;

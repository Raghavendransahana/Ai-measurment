import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, DollarSign, ClipboardList, Smile, Star, Truck } from "lucide-react";
import img from "../assets/img.png"; 
import bg from "../assets/bg.png";
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
        className="w-140 p-10 md:w-252 mb-6"
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
          Unveiling boldness and <br /> elegance—our inspirations say it all
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          Discover the perfect blend of style and quality with our exclusive collection.
        </p>
      </motion.div>

      <motion.button
        className="bg-pink-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-800 transition duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Explore Collection
      </motion.button>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[
          { icon: <ShoppingBag className="text-pink-700 w-12 h-12 mb-4" />, title: "Shop Now", description: "Explore our wide range of products." },
          { icon: <DollarSign className="text-pink-700 w-12 h-12 mb-4" />, title: "Affordable Prices", description: "Quality products at the best prices." },
          { icon: <ClipboardList className="text-pink-700 w-12 h-12 mb-4" />, title: "Easy Orders", description: "Seamless and hassle-free ordering." },
          { icon: <Smile className="text-pink-700 w-12 h-12 mb-4" />, title: "Customer Satisfaction", description: "Your happiness is our priority." },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {card.icon}
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-gray-600 text-sm text-center">{card.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { icon: <Star className="text-yellow-500 w-12 h-12 mb-4" />, title: "Top Quality", description: "Only the best materials and craftsmanship." },
          { icon: <Truck className="text-blue-500 w-12 h-12 mb-4" />, title: "Fast Delivery", description: "Get your orders delivered quickly and safely." },
          { icon: <Smile className="text-green-500 w-12 h-12 mb-4" />, title: "24/7 Support", description: "We're here to help anytime, anywhere." },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {card.icon}
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-gray-600 text-sm text-center">{card.description}</p>
          </div>
        ))}
      </motion.div>

      <footer className="mt-16 text-center text-gray-600 text-sm">
        © 2023 Your Brand. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

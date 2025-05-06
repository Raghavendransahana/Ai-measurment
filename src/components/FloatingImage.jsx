import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { images } from "../assets/index";
import bg from "../assets/bg.png";

const imagePositions = [
  { src: images[0].img, top: "8%", left: "5%" },
  { src: images[1].img, top: "70%", left: "8%" },
  { src: images[2].img, top: "12%", left: "80%" },
  { src: images[3].img, top: "75%", left: "78%" },
  { src: images[4].img, top: "20%", left: "40%" },
  { src: images[5].img, top: "80%", left: "45%" },
  { src: images[6].img, top: "30%", left: "15%" },
  { src: images[7].img, top: "65%", left: "60%" },
  { src: images[8].img, top: "40%", left: "80%" },
];

const hearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  size: Math.random() * 20 + 10,
}));

const FloatingImage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="relative w-full h-screen lavishly-yours-regular overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-black opacity-30"
          style={{
            left: `${heart.left}%`,
            top: "100%",
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: 0 }}
          animate={{ y: "-120vh" }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-8 rounded-3xl bg-white/20 border border-white/30 shadow-xl backdrop-blur-md sm:bg-transparent sm:border-none sm:shadow-none">
        <h1 className="text-5xl text-[#620534] tracking-wide text-center leading-snug">
          When style aligns with your taste <br />
          discover the perfect pieces in our boutique gallery
        </h1>
      </div>

      {imagePositions.map((img, index) => {
        const x = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
        const y = useTransform(mouseY, [0, window.innerHeight], [-15, 15]);
        const size = 120;

        return (
          <motion.img
            key={index}
            src={img.src}
            alt={`Fashion ${index}`}
            className="absolute object-cover rounded-2xl shadow-md pointer-events-none"
            style={{
              top: img.top,
              left: img.left,
              width: `${size}px`,
              height: `${size}px`,
              x,
              y,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingImage;

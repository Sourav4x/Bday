
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import CakeCuttingButton from "./components/candleblower.js";

const messages = [
  "Hey love ❤️",
  "Happy Birthday to you, Mam!",
  "I see ocean in your eyes, so wide, so deep",
  "Waves of silence where secrets sleep",
  "Tides that pull my soul to shore",
  "Like I’ve known your heart before.",
  "I hope today is as magical as you are 🎂✨",
  "I love you more than words can say "
];

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="starry-bg min-h-screen flex flex-col justify-center items-center p-6 text-center relative overflow-hidden">
      
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-5xl font-bold text-white  mb-8 z-10 px-4 py-2 rounded">

      
        🎉 Happy Birthday Love 🎉
      </motion.h1>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl md:text-2xl text-white max-w-xl mb-6 z-10"
      >
        {messages[index]}
      </motion.div>

       
      <motion.img
        src="/she.jpg"
        alt="Her beautiful smile"
        className="rounded-2xl shadow-2xl max-w-xs md:max-w-md mb-6 border-4 border-pink-300 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      

    
      <audio autoPlay loop>
        <source src="/song.mp3" type="audio/mpeg" />
        audio bday music -@sourav
      </audio>
      <CakeCuttingButton />
      <h1 className="text-white text-2xl font-bold mt-8 z-10">Happy birthday!</h1>
      <footer className="mt-12 text-center text-pink-400 text-sm font-medium">
  Made with <span className="animate-pulse">love</span> by <span className="text-pink-600 font-bold">Sourav</span>
</footer>

    </div>
    
  );
}

export default App;


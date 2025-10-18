'use client'
import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

const VideoTutorial = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-[56px] px-[16px] md:px-[220px] md:pt-[56px] md:pb-[64px] bg-white text-center">
      {/* Heading */}
<motion.div
  className="flex flex-col items-start gap-6 md:w-[764px]"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Main Heading */}
  <h2 className="text-[28px] md:text-[40px] font-[700] leading-tight w-full">
    Watch the video tutorial for better understanding
  </h2>

  {/* Subtext */}
  <motion.p
    className="text-[#636363] w-full text-[16px] md:text-[20px]"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  >
    AI Hotel Management Made Simple and Fast
  </motion.p>
</motion.div>


      {/* Video Player Card */}
      <motion.div
        className="relative mt-10 w-full max-w-4xl rounded-2xl overflow-hidden aspect-video"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        whileHover={{ scale: 1.03 }}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls={false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/DigiStay Intro Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button Overlay */}
        {!isPlaying && (
          <motion.button
            className="absolute inset-0 transition-all duration-300 flex items-center justify-center"
            onClick={togglePlay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-sm p-6 rounded-full border-2 border-purple-800 flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Play className="w-8 h-8 text-purple-800  ml-1" />
            </motion.div>
          </motion.button>
        )}

        {/* Pause Button Overlay (when playing) */}
        {isPlaying && (
          <motion.button
            className="absolute top-4 right-4 transition-all duration-300 p-3 rounded-full flex items-center justify-center"
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Pause className="w-5 h-5 text-white" />
          </motion.button>
        )}
      </motion.div>
    </section>
  );
};

export default VideoTutorial;

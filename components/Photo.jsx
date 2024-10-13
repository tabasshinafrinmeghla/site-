"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] ">

          <Image
            src="/Image.png"
            property quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/* <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >

          <motion.circle
            cx="253"    // Center X-coordinate
            cy="253"    // Center Y-coordinate
            r="250"     // Radius of the circle
            stroke="blue"  // Outline color
            strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          
          />


          <motion.path
            d="M150 0 L75 200 L225 200 Z"
            stroke="black"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />




        </motion.svg> */}
        {/* circle */}
      </motion.div>
    </div>
  )
}

export default Photo

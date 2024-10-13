"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
// import Image from 'next/image'

// import React from 'react'

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[198px] h-[198px] xl:w-[298px] xl:h-[298px] ">

          <Image
            src="/public/Image/Image.png"
            property quality={100}
            fill
            alt=""
            className="object-contain"
          />



        </div>
      </motion.div>
    </div>
  )
}

export default Photo

// import React from 'react'

import { animate, motion } from "framer-motion"

// variants

const stairAnimation ={
  initial:{
    top:"0%",
  },
  animate:{
    top:"100%",
  },
  exit:{
    top:["100%", "0%"],
  }
}


const Stairs = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default Stairs

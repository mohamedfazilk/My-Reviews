import React, { useState } from 'react'
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const review =()=> {
  const[index, setIndex]= useState(0);
  return (
    <div className='title'><h2>review</h2></div>
  )
}

export default review
import React,{useState} from "react";
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
 const [index, setIndex] = useState(0);
 const {name,image,job,text} = people[index];

 //checking if it is greater than arrays index then return 0th index
const checkNumber =(number) =>{
  if(number > people.length - 1){
    return 0
  }
//if it is lessthan arrays index like -1 then return last index
  if(number < 0){
    return people.length - 1
  }
  return number
}

 const nextPerson = () =>{
   setIndex((index)=>{
    let newIndex = index + 1
    return checkNumber(newIndex) 
   })
 }

 const prevPerson = () =>{
    setIndex ((index) =>{
     let newIndex = index - 1;
     return checkNumber(newIndex) 
    });}

   const randomPerson = () =>{
     //random() return random number upto 3 by mutltiplying array length
     let randomNumber = Math.floor( Math.random() * people.length)
     if(randomNumber === index){
       randomNumber = index + 1
     }
     setIndex(checkNumber(randomNumber))
     console.log(randomNumber);
   } 
   


 
  return<article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className="button-container">
    <button onClick={prevPerson} className='prev-btn'><FaChevronLeft/></button>
    <button onClick={nextPerson} className='next-btn'><FaChevronRight/></button>
    </div>
 
    <button onClick={randomPerson} className='random-btn'>surprise me</button>
  </article>
}

export default Review;
import React from "react";
import {useState} from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

const Testimonial=(props)=>{

    const[index,setIndex]=useState(0);

    let reviews=props.reviews;
    function leftShiftHandler(){
        if(index-1<0) setIndex(reviews.length-1);
        else setIndex(index-1);
    }
    function rightShiftHandler(){
        if(index+1 >= reviews.length) setIndex(0);//(index+1 > reviews.length-1) setIndex(0);
        else setIndex(index+1);
    }
    function surpriseMeHandler(){
        setIndex(parseInt(Math.random()*reviews.length))
    }

    return(<div className="rounded-md hover:shadow-xl w-[85vw] md:w-[700px] bg-white flex-column justify-center item-center mt-10 p-10 transition-all duration-100">
        <Card review={reviews[index]}/>
        <div className="flex text-3xl mt-10 gap-3 text-violet-600 font-bold justify-center">
            <button 
                onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-700">
                <FiChevronLeft/>
            </button>
            <button
                onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-700">
                <FiChevronRight/>
            </button>
        </div>
        <div className="mt-6">
            <button
                onClick={surpriseMeHandler} 
                className="bg-violet-600 hover:bg-violet-700 translate-all duration-200 cursor-pointer
                px-10 py-2 rounded-md font-bold text-white text-lg">
                Surprise Me
            </button>
        </div>
    </div>)
};
export default Testimonial;
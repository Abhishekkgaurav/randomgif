import React from 'react';
import UseGifs from './Hooks/UseGifs';
import { useState } from 'react'

const Tag = () => {
   const [tag,setTag]=useState('car');
   const {imgsource,loading,fetchData}=UseGifs(tag);
   function clickHandler(){
    fetchData();
   }
   function changeHandler(event){
    setTag(event.target.value);
   }
  return (
    <div className='w-1/2 bg-blue-500 flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-blue-500 py-2'>
        <h1 className='text-xl font-bold uppercase underline rounded-xl text-center'>Random {tag} Gif</h1>
        {loading?(
            <div className='spinner'></div>
        ):(
            <img className='roundeed-lg' width='380px' src={imgsource} alt=""/>
        )}
        <input
          className='w-10/12 rounded-md text-xl py-2 font-semibold text-center'
          onChange={changeHandler}
          value={tag}
        />
        <button className='bg-yellow-500 w-10/12 rounded-md text-xl font-semibold py-2' onClick={()=>{
            clickHandler()
        }}>Generate</button>
    </div>
  )
}

export default Tag
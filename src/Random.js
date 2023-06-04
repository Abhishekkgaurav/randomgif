import React from 'react';
import UseGifs from './Hooks/UseGifs';

const Random = () => {
   const {imgsource,loading,fetchData}=UseGifs();
   function clickHandler(){
    fetchData();
   }
  return (
    <div className='w-1/2 bg-green-500 flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-blue-500 py-2'>
        <h1 className='text-xl font-bold uppercase underline rounded-xl text-center'>A Random Gif</h1>
        {loading?(
            <div className='spinner'></div>
        ):(
            <img className='roundeed-lg' width='380px' src={imgsource} alt=""/>
        )}
        
        <button className='bg-yellow-500 w-10/12 rounded-md text-xl font-semibold py-2' onClick={()=>{
            clickHandler()
        }}>Generate</button>
    </div>
  )
}

export default Random;
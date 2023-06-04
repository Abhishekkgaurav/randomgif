import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
    
    const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const UseGifs = (tag) => {
    const [imgsource,setimgsource]=useState('');
    const [loading,setloading]=useState(false);
    async function fetchData(){
     try{
         setloading(true)
         const {data}= await axios.get(tag?`${url}&tag=${tag}`:url);
         console.log(data,"Data is printed");
         const imagesrc= await data.data.images.downsized_large.url;
         setimgsource(imagesrc);
         setloading(false);
     }
     catch(e){
         setloading(true);
         console.log(e);
     }
     
    }
 
    useEffect(()=>{
     fetchData();
    },[]);
    return {imgsource,loading,fetchData};
}

export default UseGifs

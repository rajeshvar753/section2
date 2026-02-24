'use client'
import React from 'react'

const EventHandling = () => {
  return (
    <div className='h-screen' onMouseMove={
        (e)=>{
            console.log(e.clientX, e.clientY);
            const box = document.getElementById('box');
            box.style.left = e.clientX + 'px';
            box.style.top = e.clientY + 'px';
        }
    }>
<div className='size-5 bg-red-500 absolute rounded-full' id='box'></div>

        <button className='p-3 border rounded-md' onClick={()=>{alert('button was clicked');}}>
            
            Click me

        </button>

        <input type='text' className='border w-full p-3 mt-5'
        onChange={(e)=> {console.log(e.target.value);}}
        />

        <input type='color' className='mt-5'
        onChange={(e)=> {console.log(e.target.value);
            document.body.style.backgroundColor = e.target.value;
        }}
        />

        <input type='text' className='border w-full p-3 mt-5'
        onKeyDown={(e)=> {console.log(e.code);}}
        />

        <input type='file'
        multiple
        onChange={(e)=> {console.log(e.target.files);}}
        />

    </div>
  )
}

export default EventHandling
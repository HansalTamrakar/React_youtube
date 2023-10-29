import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {
    // const MenuOpen=useSelector((store)=>store.app.isMenuOpen)
    const isMenuOpen = useSelector((store)=>store.slice.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-64 border  '>
                <h1 className='font-bold '>CONTEXTS</h1>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold mt-10'>Subsriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Music</li>
        </ul>
        <h1 className='font-bold pt-5'> Watch Later</h1>
         <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Music</li>
        </ul>
    </div>

  )
}

export default Sidebar
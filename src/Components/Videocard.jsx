import React from 'react'

const Videocard = ({snippet,statistics}) => {
   
   
    const {thumbnails,title,channelTitle}=snippet;

  return (
    <div className='p-2 m-2 w-64 shadow-lg '>
        <img  className="rounded-lg"src={thumbnails.medium.url} alt="" />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}views</li>
        </ul>
    </div>
  )
}

export default Videocard
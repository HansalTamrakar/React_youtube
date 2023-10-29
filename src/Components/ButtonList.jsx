import React from 'react'
import Button from "./Button"

const ButtonList = () => {
  const array=["All","Gaming","Song","Live","Soccer","Cricket","Cooking","Valentine","JavaScript","DataStructure","Bhajan","Bholenath","Lectures","DBMS"];
  return (
    <div className='flex'>
      {
        array.map((item)=>{
          return <Button name={item} />
        })
      }
   {/* <Button name="All"/>
   <Button name="Gaming"/>
   <Button name="Song"/>
   <Button name="Live"/>
   <Button name="Soccer"/>
   <Button name="Cricket"/>
   <Button name="Cooking"/>
   <Button name="Valentine"/> */}
    </div>
  )
}

export default ButtonList
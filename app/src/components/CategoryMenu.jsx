import React, { useState } from 'react'
import FoodData from '../FoodData'


const CategoryMenu = ({foodItems,setFoodItems}) => {
  function triggerAll(){
   setFoodItems(FoodData)
   
  }
  function triggerLunch(){
    let filteredItems=[...FoodData].filter((item)=>{
      return item.category==='Lunch'
    });
    setFoodItems(filteredItems)
   }
   function triggerBreakfast(){
    let filteredItems=[...FoodData].filter((item)=>{
      return item.category==='Breakfast'
    });
    setFoodItems(filteredItems)
   }
   function triggerDinner(){
    let filteredItems=[...FoodData].filter((item)=>{
      return item.category==='Dinner'
    });
    setFoodItems(filteredItems)
   }
   function triggerSnacks(){
    let filteredItems=[...FoodData].filter((item)=>{
      return item.category==='Snacks'
    });
    setFoodItems(filteredItems)
   }

  return (
    <div className='mx-6'>
     <h3 className='text-xl font-semibold'>Find the best foods!</h3>
     <div className='my-6 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
       <button onClick={triggerAll}  className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white '>All</button>
       <button onClick={triggerLunch}   className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white '>Lunch</button>
       <button onClick={triggerBreakfast} className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white '>Breakfast</button>
       <button onClick={triggerDinner}className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white '>Dinner</button>
       <button  onClick={triggerSnacks}   className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white '>Snacks</button>
     </div>
    </div>
  )
}

export default CategoryMenu
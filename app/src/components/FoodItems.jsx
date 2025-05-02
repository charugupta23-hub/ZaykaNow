import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../FoodData'
import { useState } from 'react'

const FoodItems = ({foodItems,cartItems,setCartItems}) => {
  
  return (
    <div className='flex flex-row flex-wrap gap-3 justify-center lg:justify-start mx-6'>
    {foodItems.map((food)=>{
      return <FoodCard cartItems={cartItems} setCartItems={setCartItems} dataKey={food.id}  name={food.name} img={food.img} price={food.price} desc={food.desc} category={food.category} rating={food.rating}/>
    })}
    </div>
    
  )
}

export default FoodItems
import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import FoodData from '../FoodData';
import { QuantityContext } from '../pages/Home';
import { quantityArr } from '../Quantity';
const FoodCard = ({name,img,rating,desc,price,setCartItems,cartItems,dataKey}) => {
   const {quantity,setQuantity}=useContext(QuantityContext)
   function addToCart() {
      const itemToAdd = FoodData[dataKey - 1];
      
      const exists = cartItems.find(item => item.id === itemToAdd.id);
    
      if (!exists) {
        setCartItems([...cartItems, itemToAdd]);
      }
    
      // Correctly update quantity state immutably
      const updatedQuantity = quantity.map(q => {
        if (q.id === itemToAdd.id) {
          return { ...q, quantity: q.quantity + 1 };
        }
        return q;
      });
    
      setQuantity(updatedQuantity);
     

   }
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
        <img src={`${img}`}
        className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500'
        />
     <div className='flex justify-between'> 
        <h3>{name}</h3><span className='text-green-500'>₹{price}</span>
     </div>
        <p className='text-sm font-normal '>{desc.slice(0,50)}
       </p>
       <div className='flex justify-between  mb-0'>
        <span className='flex justify-center items-center'><FaStar className='mr-1 text-yellow-400'/>{rating}</span>
        <button onClick={addToCart}
         className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm' >Add to cart</button>
       </div>
    </div>
  )
}

export default FoodCard
import React, { useContext } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { QuantityContext } from '../pages/Home';

const ItemCard = ({ name, img, price, cartItems, dataKey, setCartItems }) => {
  const { quantity, setQuantity } = useContext(QuantityContext);
  const itemQty = quantity.find(q => q.id === dataKey)?.quantity || 0
  
  function deleteFromCart(){
   const updatedCart=cartItems.filter((item)=>(item.id)!==dataKey
   )
   setCartItems(updatedCart)
  }
  function decreaseQty(){
    if(itemQty==0){
      deleteFromCart()
    }
    if(itemQty>0){
      const updatedQuantity=quantity.map((q)=>{
        if(q.id===dataKey){
          return {...q,quantity:q.quantity-1}
        }
        else{
          return q;
        }
      })
      setQuantity(updatedQuantity)
    }
    
  }
  function increaseQty(){
    const updatedQuantity=quantity.map((q)=>{
      if(q.id===dataKey){
        return {...q,quantity:q.quantity+1}
      }
      else{
        return q;
      }
      
    })
    setQuantity(updatedQuantity)
  }
  
  return (

    <div className='flex gap-3 shadow-md rounded-lg p-5 hover:scale-95 mb-3 items-center'>
      <img src={img} className='w-[50px] h-[50px]' alt={name} />
      
      <div className='flex-1'>
        <h2 className='font-bold text-gray-800'>{name}</h2>
        
        <div className='flex justify-between items-center mt-2'>
          <span className='text-green-500 font-bold'>₹{price}</span>

          <div className='flex items-center gap-2'>
            <MdDelete
              className='text-gray-600 cursor-pointer'
              onClick={deleteFromCart}
            />
            <AiOutlinePlus
              className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none hover:text-white rounded-md cursor-pointer'
              onClick={increaseQty}
            />
            <span className='text-black'>{itemQty}</span>
            <AiOutlineMinus
              className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none hover:text-white rounded-md cursor-pointer'
              onClick={decreaseQty}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

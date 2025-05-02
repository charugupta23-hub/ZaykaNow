import React from 'react';
import { IoMdClose } from 'react-icons/io';
import ItemCard from './ItemCard';
import { QuantityContext } from '../pages/Home';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



const Cart = ({ orderSection, setOrderSection, cartItems ,setCartItems}) => {
  const navigate = useNavigate();
  const { quantity, setQuantity } = useContext(QuantityContext);
  function toggle() {
    setOrderSection(!orderSection);
  }

  // Correctly placed inside the component
  const merged=cartItems.map((item)=>{
    const QuantityObj=quantity.find((q)=>q.id===item.id)
    return{...item,quanity:QuantityObj?QuantityObj.quantity:0}
  })
  const totalAmount=()=>{
    let totalAmount=0
    merged.forEach((item)=>{
      totalAmount+=item.price*item.quanity
    })
    return totalAmount
  }
  const totalItems=()=>{
    let totalItems=0;
    merged.forEach((item)=>{
      totalItems+=item.quanity
    })
    return totalItems
  }

  return (
    <>
      <div className='fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full shadow-xl transition-transform duration-500'>
        <div className='flex justify-between items-center my-3 p-5'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <IoMdClose
            className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'
            onClick={toggle}
          />
        </div>

        {/* Scrollable item area */}
        {cartItems.length==0 && <div className='flex flex-col justify-evenly'><h1 className='w-[80%] items-start text-xl text-red-500 p-5 '>Oops! You cart is empty</h1>
        <h2 className='text-2xl text-green-600 m-2 p-2'>Order Something Now 👍</h2>
        </div>
          }
        <div className='overflow-y-auto h-[calc(100%-220px)] px-4'>
          {cartItems.map((item) => (
            <ItemCard quantity={quantity} setQuantity={setQuantity} dataKey={item.id} name={item.name} img={item.img} price={item.price} setCartItems={setCartItems} cartItems={cartItems}   />
          ))}
        </div>

        {/* Footer */}
        <div className='absolute bottom-0 w-full bg-white px-4 py-3 border-t'>
          <h3 className='font-semibold text-gray-800'>Items: {totalItems()}</h3>
          <h3 className='font-semibold text-gray-800'>Total Amount: ₹{totalAmount()}</h3>
          <hr className='my-2' />
          <button disabled={cartItems.length === 0}
          onClick={()=>navigate('/success')}
          className='bg-green-500 mb-2 font-bold px-3 text-white py-2 rounded-lg w-full text-center'>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

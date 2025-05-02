import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import FoodData from '../FoodData'
import { useState,createContext} from 'react'
import { quantityArr } from '../Quantity'
const QuantityContext=createContext();
const Home = () => {
 
  
  const [quantity,setQuantity]=useState(quantityArr)
  const [cartItems,setCartItems]=useState([])
  const [orderSection,setOrderSection]=useState(false);
  const [foodItems,setFoodItems]=useState([...FoodData]);
  const [query,setQuery]=useState('');
  return (
    <>
    <QuantityContext.Provider value={{quantity,setQuantity}}>
        <Navbar query={query} setQuery={setQuery}orderSection={orderSection} setOrderSection={setOrderSection} foodItems={foodItems} setFoodItems={setFoodItems}/>
    <CategoryMenu foodItems={foodItems} setFoodItems={setFoodItems} query={query} setQuery={setQuery}/>
    <FoodItems foodItems={foodItems} cartItems={cartItems} setCartItems={setCartItems}/>
    {orderSection &&  <Cart orderSection={orderSection} setOrderSection={setOrderSection} setCartItems={setCartItems} cartItems={cartItems} />}
    </QuantityContext.Provider>
    </>
   
  )
}

export default Home
export {QuantityContext}
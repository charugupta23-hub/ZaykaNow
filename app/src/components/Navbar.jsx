import React from 'react'
import FoodData from '../FoodData'

const Navbar = ({orderSection,setOrderSection,query,setQuery,foodItems,setFoodItems}) => {
  
  function handleSearch(e){
    setQuery(e.target.value.toLowerCase())
    let filtered=FoodData.filter((item)=>{
     return item.name.toLowerCase().includes(query)
    })
    setFoodItems(filtered)
    
  }
  return (
    
    <>
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10'>
      <div>
       <h3 className='text-xl  text-grey'>{new Date().toUTCString().slice(0,16)}</h3>
       <h1 className='text-2xl font-bold text-yellow'>ZaykaNow</h1>
      
      </div>
      <div className='flex'>
      <h3 className='flex hover:bg-green-500 hover:text-yellow mr-10 text-xl hover:scale-95 cursor-pointer lg:text-xl font-bold items-center border border-spacing-2 p-2 rounded-lg'
      onClick={()=>{
        setOrderSection(!orderSection)
      }}>My Orders</h3>
       <input
        type='search'
         id="" 
         placeholder='Search here'
         className='p-3 border border-gray-400 rounded-lg outline-none w-full lg:w-[25vw] '
         onChange={handleSearch}
         />
      </div>
    </nav>
    </>
  )
}

export default Navbar
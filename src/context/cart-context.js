import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const CartProvider = ({children}) => {
  const [cartData,setCartData] = useState([])
  const addCartData = (data)=>{
    setCartData([...cartData,data])

  }
  const removeCartData = (data)=>{
    const newData =cartData.filter((info)=>{
      return info.attributes.title !== data
    })
    setCartData(newData) 

  }
  const clearData = ()=>{
    setCartData([])
  }
  return (
    <AppContext.Provider value={{cartData,addCartData,removeCartData,clearData}}>
        {children}

    </AppContext.Provider>
  )
}

export default CartProvider
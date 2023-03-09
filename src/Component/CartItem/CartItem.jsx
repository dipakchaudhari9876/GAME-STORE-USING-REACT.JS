import React from 'react'
import { useContext } from 'react'
import './cartItem.css'
import { AppContext } from '../../context/cart-context'

const CartItem = ({image,title,price}) => {
  const { cartData,removeCartData } = useContext(AppContext)
  return (
    <div className="cartItem">
        <img src={`http://localhost:1337${image.data?.attributes?.url}`} alt="game" className='img-cont' />
        <div className="cartItem-desc">
            <h4 className='cardItem-title'>{title}</h4>
            <h5 className='cardItem-price'>Price: {price}</h5>
            <button className='cardItem-btn' onClick={()=>{
              removeCartData(title)
            }}>Remove from cart</button>
        </div>
    </div>
  )
}

export default CartItem
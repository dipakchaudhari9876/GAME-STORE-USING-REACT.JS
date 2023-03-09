import React, { useContext } from 'react'
import { AppContext } from '../../context/cart-context'
import './item.css'

const Item = ({image,description,title,price,item}) => {
  const {cartData,addCartData} = useContext(AppContext)
  return (
    <section className="card">
      <img src={`http://localhost:1337${image.data?.attributes?.url}`} alt="game" className="cart-Img" />
      <article className='card-Title'>{title}</article>
      <article className='card-description'>{description.substring(0,140)+" ..."}</article>
      <section className="card-footer">
        <article className="card-price">Price: <b>{price}</b></article>
        <button className="card-cart" onClick={()=>{
          addCartData(item)
        }}>Add to cart</button>
      </section>
    </section>
  )
}

export default Item
import React, { useCallback, useContext, useEffect } from 'react'
import useRazorpay from 'react-razorpay'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/cart-context'
import CartItem from '../CartItem/CartItem'
import Navbar from '../Navbar/Navbar'
import './cart.css'

const API_KEY = process.env.REACT_APP_RAZORPAY_KEY


const Cart = () => {
    const { cartData,clearData } = useContext(AppContext)
    const navigate = useNavigate()
    const total = cartData.reduce((total, item) => {
        return total = total + parseInt(item.attributes.price)
    }, 0)
    const RazorPay = useRazorpay()
    const razorpayDisplay = useCallback(async (total) => {
        const options = {
            key: API_KEY,
            amount: total * 100,
            currency: "INR",
            name: "game-site",
            description: "gaming-transaction",
            handler: (res) => {
                console.log(res)
                alert("Payment successfull")
                clearData()
            },
            prefill: {
                name: "Dipak Chaudhari",
                email: "dipakchaudhari9876@gmail.com",
                contact: "8698617731",
            }

        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
    }, [RazorPay])
    return (
        <>
            <Navbar />
            <h1>Cart</h1>
            {cartData.length === 0 && <div style={{margin:"20px"}}><p>Nothing Added in cart</p>
            <button className='btn btn-primary' onClick={()=>{
                navigate('/')
            }}>Go to Home Page</button></div>}
            {cartData.length>0 && <section className='cart-Sec'>
                <section className='cart-product-detail'>
                    
                    <article className='cart-main'>
                        {cartData.map((data) => {
                            return (
                                <CartItem key={data.id} {...data.attributes} />
                            )
                        })}

                    </article>
                </section>
                <section className='bill-sec'>
                    <h3>Billing Information</h3>
                    {cartData.map((data) => {
                        return (
                            <div key={data.id} className='game-selected'>
                                <div>{data.attributes.title}</div>
                                <div><b>Rs {data.attributes.price}</b></div>
                            </div>
                        )
                    })}
                    <div className='total'>
                        <p>Total</p>
                        <p><b>Rs {total}</b></p>
                    </div>
                    <button className='checkout-btn' onClick={()=>{razorpayDisplay(total)}}>Checkout</button>

                </section>
            </section>}
        </>
    )
}

export default Cart
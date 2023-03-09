import React, { useContext } from 'react'
import { AppContext } from '../../context/cart-context'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlinedIcon'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css'

const Navbar = () => {
    const { cartData, addCartData } = useContext(AppContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <Link className="navbar-brand text-white" to={'/'}>Game-Zone</Link>
            <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mr-2" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <li>
                        <Badge badgeContent={cartData.length} color="secondary">
                            <Link to={'/cart'} style={{ display: "flex", textDecoration: "none" }} className="nav-link h5 px-0 text-white mr-1">Cart</Link>
                        </Badge>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
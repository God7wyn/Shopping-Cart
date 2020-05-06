import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper green darken-2">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>

                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><i className="material-icons">shopping_cart</i></li>
                    </ul>
                </div>
            </nav>


    )
}

export default Navbar;
import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);

    let shipping = 0;

    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }
    else if(totalPrice > 15){
        shipping = 4.99
    }

    const tax = totalPrice/10;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4 className='order'>Order Summary:</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Product Price: {formatNumber(totalPrice)}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Estimated tax: {formatNumber(tax)}</small></p>
            <p className='order-total'>Order Total : <FontAwesomeIcon icon={faDollarSign} />{formatNumber(totalPrice + shipping + tax)}</p>
            <Link to='/review'>
               <button className='main-button'>Review order</button>
            </Link>
        </div>
    );
};

export default Cart;
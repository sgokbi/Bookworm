import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./Checkout.css";

const CheckOut = () => {
    const { id } = useParams();
    const [checkout, setCheckout] = useState([]);

    useEffect(() => {
        const url = ` https://young-citadel-38075.herokuapp.com/books/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCheckout(data)
            })
    }, [id])

    return (
        <div className="checkout-heading">
            <h1>Checkout</h1>
            <div className="checkout-div">
                <h5>Book name:  {checkout.name}</h5>
                <h5>Quantity: 1</h5>
                <h5>Price: {checkout.price}</h5>
                <Link to="/home"><button className="btn-success checkout-btn" >Checkout</button></Link>
            </div>
        </div>
    );
};

export default CheckOut;
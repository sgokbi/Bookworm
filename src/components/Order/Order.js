import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import "./Order.css";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        //to detect specific book/books for specific user
        fetch("https://young-citadel-38075.herokuapp.com/order?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="ordered-list-container">
            <h2 className="ordered-heading">Hello, {loggedInUser.displayName}! You have {orders.length} order. </h2>

            {
                orders.map(order => <div className="ordered-list-div">
                    <h5 ><span className="ordered-list-design">Book Name: </span>{order.name}</h5>
                    <h5><span className="ordered-list-design"> Writer: </span>{order.author}</h5>
                    <h5> <span className="ordered-list-design">   Price: </span>  {order.price} </h5>
                </div>)
            }
        </div>
    );
};

export default Order;
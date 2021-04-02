import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);

    return (
        <div>
            <h4>order page</h4>
        </div>
    );
};

export default Order;
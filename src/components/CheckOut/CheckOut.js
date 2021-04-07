import { checkUtils } from '@material-ui/pickers/_shared/hooks/useUtils';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import "./Checkout.css";

const CheckOut = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkout, setCheckout] = useState({});

    const handleOrder = () => {
        const newOrder = {
            email: loggedInUser.email,
            name: checkout.name,
            author: checkout.author,
            price: checkout.price,
            quantity: 1,
        }
        //adding order list in database
        fetch("https://young-citadel-38075.herokuapp.com/addOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                data && alert('You have ordered successfully');
            })
    }

    useEffect(() => {
        //getting single item by id from database
        const url = `https://young-citadel-38075.herokuapp.com/book/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCheckout(data)
            })
    }, [id])

    return (
        <div >
            <h1 className="checkout-heading">You are Ordering...</h1>
            <div className="checkout-div">
                <h5 className="checkout-list-design">Book name:  {checkout.name}</h5>
                <h5 className="checkout-list-design">Writer: {checkout.author}</h5>
                <h5 className="checkout-list-design">Quantity: 1</h5>
                <h5 className="checkout-list-design">Price: {checkout.price}</h5>
                <button onClick={handleOrder} className="btn-success order-btn"> Confirm Order</button>
            </div>
        </div >
    );
};

export default CheckOut;






















// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';



// const [selectedDate, setSelectedDate] = useState({
//     checkIn: new Date(),
//     checkOut: new Date()
// })

// const handleCheckInDate = (date) => {
//     const newDates = { ...selectedDate };
//     newDates.checkIn = date;
//     setSelectedDate(date);
// };

// const handleCheckOutDate = (date) => {
//     const newDates = { ...selectedDate };
//     newDates.checkOut = date;
//     setSelectedDate(date);
// };





{/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check In Date"
                        value={selectedDate.checkIn}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Check Out Date"
                        format="MM/dd/yyyy"
                        value={selectedDate.checkOut}
                        onChange={handleCheckOutDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                </Grid>
                <Button onClick={handleOrder} variant="contained" color="primary"> Order </Button>
            </MuiPickersUtilsProvider> */}















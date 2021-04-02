import React from 'react';
import { useHistory } from 'react-router';
import "./Books.css"

const Books = (props) => {
    const { name, imageURL, author, price, _id } = props.book;
    const history = useHistory();

    const handleBookNow = id => {
        const url = `/books/${id}`;
        history.push(url);
    }

    return (
        <div className="col-md-3 mt-5">
            <div className="single-book-box">
                <img className="books-image" src={imageURL} alt="" />
                <h4 className="mt-3">{name}</h4>
                <h5>{author}</h5>
                <h3> {price}</h3>
                <button className="btn-success button" onClick={() => handleBookNow(_id)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Books;
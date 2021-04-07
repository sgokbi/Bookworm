import React from 'react';
import "./DeleteManage.css";

const DeleteManage = (props) => {
    const { _id, name, author, price } = props.book

    const handleDelete = id => {
        //deleting book/books api 
        fetch(`https://young-citadel-38075.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
            })
    }

    return (
        <div className="manage-book-list">
            <p> Name: {name} <span className="focus"> By</span>  {author}  </p>
            <p> Price: {price}</p>

            <button className="btn-success" onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default DeleteManage;
import React from 'react';

const DeleteManage = (props) => {
    const { _id, name } = props.book

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
            <p>  Name: {name}</p>
            <button className="btn-success" onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default DeleteManage;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteManage from '../DeleteManage/DeleteManage';
import "./ManageBook.css";

const ManageBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://young-citadel-38075.herokuapp.com/books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books])

    return (
        <div className="admin-div">
            <Link to="/addBook">  <button className="btn-success admin-manage-btn">Add Book</button></Link>
            <Link to="/manageBook">  <button className="btn-success admin-manage-btn" >Manage Book</button></Link>

            <div className="manage-book-div">
                {
                    books.map(book => <DeleteManage book={book}></DeleteManage>)
                }
            </div  >
        </div>
    );
};

export default ManageBook;
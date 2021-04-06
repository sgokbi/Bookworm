import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import "./Home.css";

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        //getting all books list from database to homepage
        fetch("https://young-citadel-38075.herokuapp.com/books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="home-container">
            <h1>Buy books and Enhance Your Knowledge</h1>
            <div className="row p-2">
                {
                    books.map(book => <Books book={book}></Books>)
                }
            </div>
        </div>
    );
};

export default Home;
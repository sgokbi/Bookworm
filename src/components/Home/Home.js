import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Header from '../Header/Header';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="row">
            {/* <Header /> */}
            {
                books.map(book => <Books book={book}></Books>)
            }

        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://young-citadel-38075.herokuapp.com/books")
        fetch("http://localhost:5000/books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="row">
            {
                books.map(book => <Books book={book}></Books>)
            }
        </div>
    );
};

export default Home;
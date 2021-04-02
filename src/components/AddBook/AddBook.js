import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./AddBook.css";

const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const booksData = {
            name: data.name,
            imageURL: imageURL,
            author: data.authorName,
            price: data.price
        };

        const url = `https://young-citadel-38075.herokuapp.com/addBook`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booksData)
        })
            .then(res => console.log(res))
    };

    const handleUploadImage = event => {
        const imageData = new FormData();
        imageData.set("key", "2920637730192fda2f6df0a3ff9f8920");
        imageData.append("image", event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
    }

    return (
        <div className="addBooks-div">
            <h3>Add Book</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h6>Book Name</h6>
                <input className="input-space" name="name" defaultValue="adding book name" ref={register} />
                <br />
                <h6 >Author Name</h6>
                <input className="input-space" name="authorName" defaultValue="author name" ref={register} />
                <br />
                <h6>Add Price</h6>
                <input className="input-space" name="price" defaultValue="price" ref={register} />
                <br />
                <h6>Add Book Cover Photo</h6>
                <input className="input-space" type="file" name="exampleRequired" onChange={handleUploadImage} />
                <br />
                <input className="input-space" type="submit" />
            </form>
        </div>
    );
};

export default AddBook;
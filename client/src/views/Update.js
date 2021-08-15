import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .then(res => navigate("/products/"))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title:</label>&nbsp;
                    <input 
                        type="text" 
                        value={title} 
                        name="title"
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Price:</label>&nbsp;
                    <input 
                        type="number" 
                        value={price} 
                        name="price"
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Description:</label>&nbsp;
                    <input 
                        type="text" 
                        value={description} 
                        name="description"
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <br />
                <input type="submit" value="Update"/>
            </form>
        </div>
    )
}

export default Update;
import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));

        setTitle("");
        setPrice(0);
        setDescription("");
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Title:</label>&nbsp;
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Price:</label>&nbsp;
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Description:</label>&nbsp;
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <br />
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default ProductForm;
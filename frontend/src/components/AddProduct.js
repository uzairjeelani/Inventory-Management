import React, { useState } from 'react';

function AddProduct({ onAdd }) {
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [reorderLevel, setReorderLevel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, stock: parseInt(stock), reorder_level: parseInt(reorderLevel) });
        setName('');
        setStock('');
        setReorderLevel('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />
            <input
                type="number"
                placeholder="Reorder Level"
                value={reorderLevel}
                onChange={(e) => setReorderLevel(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddProduct;

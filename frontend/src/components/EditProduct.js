import React, { useState } from 'react';

function EditProduct({ product, onUpdate }) {
    const [stock, setStock] = useState(product.stock);
    const [reorderLevel, setReorderLevel] = useState(product.reorder_level);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(product.id, { stock: parseInt(stock), reorder_level: parseInt(reorderLevel) });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />
            <input
                type="number"
                value={reorderLevel}
                onChange={(e) => setReorderLevel(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
}

export default EditProduct;

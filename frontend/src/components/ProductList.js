import React from 'react';
import EditProduct from './EditProduct';

function ProductList({ products, onUpdate, onDelete }) {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - Stock: {product.stock} - Reorder Level: {product.reorder_level}
                        <button onClick={() => onDelete(product.id)}>Delete</button>
                        <EditProduct product={product} onUpdate={onUpdate} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;

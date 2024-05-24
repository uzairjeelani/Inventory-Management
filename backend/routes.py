from flask import request, jsonify
from app import app, db
from models import Product
from sqlalchemy import inspect

@app.route('/')
def home():
    return "Backend is running!"

@app.route('/test_db')
def test_db():
    try:
        inspector = inspect(db.engine)
        return "Database connection is successful!" if inspector else "Database connection failed!"
    except Exception as e:
        return f"Error: {str(e)}", 500

@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

@app.route('/products', methods=['POST'])
def add_product():
    data = request.get_json()
    new_product = Product(name=data['name'], stock=data['stock'], reorder_level=data['reorder_level'])
    db.session.add(new_product)
    db.session.commit()
    return jsonify(new_product.to_dict()), 201

@app.route('/products/<int:id>', methods=['PUT'])
def update_product(id):
    product = Product.query.get_or_404(id)
    data = request.get_json()
    product.stock = data['stock']
    product.reorder_level = data['reorder_level']
    db.session.commit()
    return jsonify(product.to_dict())

@app.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get_or_404(id)
    db.session.delete(product)
    db.session.commit()
    return '', 204


"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import datetime
import cloudinary.uploader
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Categoria, Pedido, Documento
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from mercadopago import sdk


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

## CRUD de USER
@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))

    return jsonify(users), 200




@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    
    if not email: return jsonify({"message": "Email is required"}), 400
    if not password: return jsonify({"message": "Password is required"}), 400

    foundUser = User.query.filter_by(email=email).first()
    
    if not foundUser: return jsonify({"message": "Email/Password are incorrects"}), 401
    ##if not check_password_hash(foundUser.password, password): return jsonify({"message": "Email/Password are incorrects"}), 401
    if not check_password_hash(foundUser.password, password): return jsonify({"message": "Email/Password are incorrects"}), 401

    expires = datetime.timedelta(days=3)
    access_token = create_access_token(identity=foundUser.id, expires_delta=expires)

    data = {
        "access_token": access_token,
        "user": foundUser.serialize()
    }

    return jsonify(data), 200

@api.route('/register', methods=['POST'])
def register():
    
    nombre = request.json.get('nombre')
    apellido = request.json.get('nombre')
    telefono = request.json.get('telefono')
    email = request.json.get('email')
    password = request.json.get('password')
   

    if not email: return jsonify({"message": "Email is required"}), 400
    if not password: return jsonify({"message": "Password is required"}), 400

    foundUser = User.query.filter_by(email=email).first()
    if foundUser: return jsonify({"message": "Email already exists"}), 400

    user = User()

    user.email = email
    user.password = generate_password_hash(password)
    user.nombre = nombre
    user.apellido = apellido
    user.telefono = telefono
       
    user.save()

    if user:
        expires = datetime.timedelta(days=3)
        access_token = create_access_token(identity=user.id, expires_delta=expires)

        data = {
            "access_token": access_token,
            "user": user.serialize()
        }

        return jsonify(data), 201


##ROUTE DE MERCADO PAGO
@api.route('/preference', methods =['POST'])
def create_preference():
    cart = request.json.get('cart')
    items = [

    ]
    for Product in cart:
        items.append({
            "tittle": product['product.nombre'],
            "quantity" : product['product.cantidad'],
            "unit_price": product['product.precio'],
            "currency_id": product['CLP'],
            "picture_url": product['product.img'],
            "description": product['product.descripcion'],
            "category_id": product['product.categoria_id'],
        })
    print(items)

    preference_data = {
        "items" : items,
        "payer": {
        "name": "sofia",
        "surname": "brito",
        "email": "test_user_1300934100@testuser.com",
        
    },
    "back_urls": {
        "success": "https://3000-roacv-g2ecommerce-4tbx4h3d38v.ws-us85.gitpod.io/pay_success",
        "failure": "https://3000-roacv-g2ecommerce-4tbx4h3d38v.ws-us85.gitpod.io/pay_failure",
        "pending": "https://3000-roacv-g2ecommerce-4tbx4h3d38v.ws-us85.gitpod.io/pay_pending"
    },
    "auto_return": "approved",
    "payment_methods": {
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12
    },
    "notification_url": "https://3001-roacv-g2ecommerce-4tbx4h3d38v.ws-us85.gitpod.io/api/ipn",
    "statement_descriptor": "GRUPO2 PRUEBA",
    "external_reference": "pedido_20",
    "expires": false
}
    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]

    data= {
    "items": items,
    "preference_data" : preference_data,
    "preference" : preference
}
    return jsonify(data), 200

##crud productos
@api.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    products = list(map(lambda product: product.serialize(), products))

    return jsonify(products), 200
    
@api.route('/products/<int:products_id>', methods=['GET'])
def get_product_id(products_id):
    products = Product.query.get(products_id)
    products = products.serialize()

    return jsonify(products), 200

@api.route('/products/categoria/<int:categoria_id>', methods=['GET'])
def get_product_categoria_id(categoria_id):
    producto = Product.query.filter_by(categoria_id = categoria_id).all()
    producto_categoria = [products.serialize() for products in producto]
       
    return jsonify(producto_categoria), 200

@api.route('/create-product', methods=['POST'])
def create_product():
    
    nombre = request.form['nombre']
    descripcion = request.form['descripcion']
    precio = request.form['precio']
    categoria_id = request.form['categoria_id']
    img = None
    resp_img = None
    if 'img' in request.files:
        img = request.files['img'] 

    if not nombre: return jsonify({"message": "Nombre is required"}), 400
    if not precio: return jsonify({"message": "Precio is required"}), 400
    if img:
        resp_img = cloudinary.uploader.upload(img, folder="imgs")

    foundProduct = Product.query.filter_by(nombre=nombre).first()
    if foundProduct: return jsonify({"message": "Product already exists"}), 400

    product = Product()
    print("Los print")
    print(categoria_id)
    print(request.form['categoria_id'])
    print(resp_img['secure_url'])
    product.nombre = nombre
    product.descripcion = descripcion
    product.precio = precio
    product.categoria_id = categoria_id
    if resp_img: product.img = resp_img['secure_url']

    product.save()

    data = {
        "id": product.id,
        "nombre": product.nombre,
        "descripcion": product.descripcion,
        "precio": product.precio,
        "categoria_id": product.categoria_id,
        "img": product.img
    }

    return jsonify(data), 201

    
@api.route('/edit-product/<int:products_id>', methods=['PUT'])
def edit_product(products_id):
    
    nombre = request.json.get('nombre')
    descripcion = request.json.get('descripcion')
    precio = request.json.get('precio')
    categoria = request.json.get('categoria')

    products = Product.query.get(products_id)

    products.nombre = nombre
    products.descripcion = descripcion
    products.precio = precio
    products.categoria_id = categoria
    products.update()
    return jsonify(products.serialize()), 201

@api.route('/delete-product/<int:products_id>', methods=['DELETE'])
def delete_product(products_id):

    products = Product.query.get(products_id)
    products.delete()

    return jsonify({ "message": "Product Deleted" }), 200


      ##crud categorias
@api.route('/categorias', methods=['GET'])
def get_categorias():
    categorias = Categoria.query.all()
    categorias = list(map(lambda categoria: categoria.serialize(), categorias))
    return jsonify(categorias), 200

@api.route('/create-categoria', methods=['POST'])
def create_categroriat():
    
    ## Cambiamos para recibir un form en vez de un json
    ##nombre = request.json.get('nombre')
    ##descripcion = request.json.get('descripcion')
    ## hay que revisarlo porque ahora al agregar el producto no le carga categoiria *al menos al postman*
    nombre = request.form['nombre']
    descripcion = request.form['descripcion']
    img = None
    resp_img = None
    if 'img' in request.files:
        img = request.files['img']     

    if not nombre: return jsonify({"message": "Nombre is required"}), 400
    if not descripcion: return jsonify({"message": "Descripcion is required"}), 400
    if img:
        resp_img = cloudinary.uploader.upload(img, folder="imgs")

    foundCategoria = Categoria.query.filter_by(nombre=nombre).first()
    if foundCategoria: return jsonify({"message": "Categoria already exists"}), 400

    categoria = Categoria()

    categoria.nombre = nombre
    categoria.descripcion = descripcion
    if resp_img: categoria.img = resp_img['secure_url']
   
    categoria.save()

    ##data = categoria.serialize()
    data = {
        "id": categoria.id,
        "nombre": categoria.nombre,
        "descripcion": categoria.descripcion,
        "img": categoria.img
    }
    return jsonify(data), 201

  
@api.route('/edit-categoria/<int:categoria_id>', methods=['PUT'])
def edit_categoria(categoria_id):
    
    nombre = request.json.get('nombre')
    descripcion = request.json.get('descripcion')
  

    categoria = Categoria.query.get(categoria_id)

    categoria.nombre = nombre
    categoria.descripcion = descripcion
   
    categoria.update()

    return jsonify(categoria.serialize()), 201
@api.route('/detail-categoria/<int:categoria_id>', methods=['GET'])
def detail_categoria(categoria_id):

    categoria = Categoria.query.get(categoria_id)
    categoria= categoria.serialize()

    return jsonify(categoria), 200

   
@api.route('/delete-categoria/<int:categoria_id>', methods=['DELETE'])
def delete_categoria(categoria_id):

    categoria = Categoria.query.get(categoria_id)
    categoria.delete()

    return jsonify({ "message": "Categoria Deleted" }), 200




 ##crud pedidos
@api.route('/pedidos', methods=['GET'])
def get_pedidos():
    pedidos = Pedido.query.all()
    pedidos = list(map(lambda pedido: pedido.serialize(), pedidos))

    return jsonify(pedidos), 200

@api.route('/create-pedido', methods=['POST'])
def create_pedido():
    
    ##id = request.json.get('id')
    status = request.json.get('status')
    total = request.json.get('total')
    user = request.json.get('user')
    direccion = request.json.get('direccion')

    if not status: return jsonify({"message": "Status is required"}), 400
    if not total: return jsonify({"message": "Total is required"}), 400

   ## foundPedido = Pedido.query.filter_by(status=status).all()
    ## if foundPedido: return jsonify({"message": "Pedido already exists"}), 400

    pedido = Pedido()

    ##pedido.id = id
    pedido.status = status
    pedido.total = total
    pedido.user_id = user
    pedido.direcciones_id = direccion

    pedido.save()

    return jsonify(pedido.serialize()), 201

 ##crud documentos
@api.route('/documentos', methods=['GET'])
def get_documentos():
    documentos = Documento.query.all()
    documentos = list(map(lambda documento: documento.serialize(), documentos))

    return jsonify(documentos), 200

@api.route('/create-documento', methods=['POST'])
def create_documento():
    
    user = request.json.get('user')
    direccion = request.json.get('direccion')
    total = request.json.get('total')
    iva = request.json.get('iva')
    tipo_id = request.json.get('tipo_id')
    

    ##if not status: return jsonify({"message": "Status is required"}), 400
    if not total: return jsonify({"message": "Total is required"}), 400

   ## foundPedido = Pedido.query.filter_by(status=status).all()
    ## if foundPedido: return jsonify({"message": "Pedido already exists"}), 400

    documento = Documento()

    ##pedido.id = id
    documento.user_id = user
    documento.direcciones_id = direccion
    documento.total = total
    documento.iva = iva
    documento.tipo_id = tipo_id

    documento.save()

    return jsonify(documento.serialize()), 201





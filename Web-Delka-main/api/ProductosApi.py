from flask import Flask, Blueprint, request, jsonify,render_template
from models.Productos import Producto,ProductoSchema
from config.bd import app, bd, ma


ruta_productos = Blueprint("ruta_productos", __name__)

producto_schema = ProductoSchema()
productos_schema = ProductoSchema(many=True)

@ruta_productos.route("/guardarProducto",  methods=['POST'])
def saveProducto():
    nombre=request.json['nombre']
    descripcion=request.json['descripcion']
    precio_unitario=request.json['precio_unitario']
    cantidad=request.json['cantidad']
    cantidad_minima_exis=request.json['cantidad_minima_exis']
    nuevo_producto=Producto(nombre,descripcion,precio_unitario,cantidad,cantidad_minima_exis)
    bd.session.add(nuevo_producto)
    bd.session.commit()
    return producto_schema.jsonify(nuevo_producto)



@ruta_productos.route("/eliminarProducto", methods=['DELETE'])
def eliminarProducto():
      id = request.json['id']
      producto = Producto.query.get(id)
      if producto is None:
            return jsonify({"mensaje": "No se encontró el producto"})
      bd.session.delete(producto)
      bd.session.commit()
      return jsonify({"message": "Producto parametrización eliminado"}), 200

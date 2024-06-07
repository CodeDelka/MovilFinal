from flask import Flask, Blueprint, request, jsonify,render_template
from models.Vendedor import Vendedor,VendedorSchema
from config.bd import app, bd, ma


ruta_vendedor = Blueprint("ruta_vendedor", __name__)

vendedor_schema = VendedorSchema()
vendedors_schema = VendedorSchema(many=True)

@ruta_vendedor.route("/guardarProducto",  methods=['POST'])
def saveVendedor():
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    nuevo_vendedor=Vendedor(nombre,apellido)
    bd.session.add(nuevo_vendedor)
    bd.session.commit()
    return vendedor_schema.jsonify(nuevo_vendedor)


@ruta_vendedor.route("/eliminarVendedor", methods=['DELETE'])
def eliminarVendedor():
      id = request.json['id']
      vendedor = Vendedor.query.get(id)
      if vendedor is None:
            return jsonify({"mensaje": "No se encontró el vendedor"})
      bd.session.delete(vendedor)
      bd.session.commit()
      return jsonify({"message": "Vendedor parametrización eliminado"}), 200

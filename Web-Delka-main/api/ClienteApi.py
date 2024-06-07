from flask import Flask, Blueprint, request, jsonify,render_template
from models.Cliente import Cliente,ClienteSchema
from config.bd import app, bd, ma


ruta_cliente = Blueprint("ruta_cliente", __name__)

cliente_schema = ClienteSchema()
clientes_schema = ClienteSchema(many=True)


@ruta_cliente.route("/guardarCliente",  methods=['POST'])
def guardarCliente():
    nombre=request.json['nombre']
    identificacion=request.json['identificacion']
    direccion=request.json['direccion']
    telefono=request.json['telefono']
    correo=request.json['correo']
    nuevo_cliente=Cliente(nombre,identificacion,direccion,telefono,correo)
    bd.session.add(nuevo_cliente)
    bd.session.commit()
    return cliente_schema.jsonify(nuevo_cliente)

@ruta_cliente.route("/eliminarCliente", methods=['DELETE'])
def eliminarCliente():
    id=request.json['id']
    cliente=Cliente.query.get(id)
    if cliente is None:
        return jsonify({"mensaje": "No se encontró el cliente"})
    bd.session.delete(cliente)
    bd.session.commit()
    return jsonify({"message": "cliente eliminada"}), 200
from flask import Flask, Blueprint, request, jsonify, render_template
from models.Cliente import Cliente, ClienteSchema
from config.bd import app, bd, ma

ruta_cliente = Blueprint("ruta_cliente", __name__)

cliente_schema = ClienteSchema()
clientes_schema = ClienteSchema(many=True)

@ruta_cliente.route("/guardarCliente", methods=['POST'])
def guardarCliente():
    try:
        nombre = request.json.get('nombre')
        identificacion = request.json.get('identificacion')
        direccion = request.json.get('direccion')
        telefono = request.json.get('telefono')
        correo = request.json.get('correo')

        if not all([nombre, identificacion, direccion, telefono, correo]):
            return jsonify({"mensaje": "Todos los campos son necesarios"}), 400

        nuevo_cliente = Cliente(nombre, identificacion, direccion, telefono, correo)
        bd.session.add(nuevo_cliente)
        bd.session.commit()
        return cliente_schema.jsonify(nuevo_cliente), 201
    except Exception as e:
        return jsonify({"mensaje": str(e)}), 500

@ruta_cliente.route("/eliminarCliente", methods=['DELETE'])
def eliminarCliente():
    try:
        id = request.json.get('id')
        if not id:
            return jsonify({"mensaje": "ID es necesario"}), 400

        cliente = Cliente.query.get(id)
        if cliente is None:
            return jsonify({"mensaje": "No se encontró el cliente"}), 404

        bd.session.delete(cliente)
        bd.session.commit()
        return jsonify({"mensaje": "Cliente eliminado"}), 200
    except Exception as e:
        return jsonify({"mensaje": str(e)}), 500

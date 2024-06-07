from flask import Flask, Blueprint, request, jsonify,render_template
from models.Ventas import Ventas,VentaProductoSchema
from config.bd import app, bd, ma


ruta_ventas = Blueprint("ruta_ventas", __name__)

venta_schema = VentaProductoSchema()
ventas_schema = VentaProductoSchema(many=True)


@ruta_ventas.route("/guardarVentas",  methods=['POST'])
def saveVentaProducto():
    descripcion=request.json['descripcion']
    id_cliente=request.json['id_cliente']
    id_ventaProducto=request.json['id_ventaProducto']
    fecha_registro=request.json['fecha_registro']
    fecha_registro=request.json['fecha_registro']
    nuevo_venta=Ventas(descripcion,id_cliente,id_ventaProducto,fecha_registro,fecha_registro)
    bd.session.add(nuevo_venta)
    bd.session.commit()
    return venta_schema.jsonify(nuevo_venta)
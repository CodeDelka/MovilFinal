from flask import Flask, Blueprint, request, jsonify,render_template
from models.Parametrizacion import Parametrizacion,ParametrizacionSchema
from config.bd import app, bd, ma

ruta_parametrizacion = Blueprint("ruta_parametrizacion", __name__)

parametrizacion_schema = ParametrizacionSchema()
parametrizacions_schema = ParametrizacionSchema(many=True)

@ruta_parametrizacion.route("/guardarParametrizacion",  methods=['POST'])
def saveParametrizacion():
     id_empresa=request.json['id_empresa']
     porcentaje_ganancia=request.json['porcentaje_ganancia']
     porcentaje_iva=request.json['porcentaje_iva']
     nueva_parametrizacion=Parametrizacion(id_empresa,porcentaje_ganancia,porcentaje_iva)
     bd.session.add(nueva_parametrizacion)
     bd.session.commit()
     return parametrizacion_schema.jsonify(nueva_parametrizacion)

@ruta_parametrizacion.route("/eliminarParametrizacion", methods=['DELETE'])
def eliminarParametrizacion():
      id = request.json['id']
      parametrizacion = Parametrizacion.query.get(id)
      if parametrizacion is None:
            return jsonify({"mensaje": "No se encontró la parametrización"})
      bd.session.delete(parametrizacion)
      bd.session.commit()
      return jsonify({"message": "Empresa parametrización eliminado"}), 200

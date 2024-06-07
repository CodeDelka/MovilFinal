from flask import Flask, Blueprint, request, jsonify,render_template
from models.Empresa import Empresa,EmpresaSchema
from config.bd import app, bd, ma

ruta_empresa = Blueprint("ruta_empresa", __name__)

empresa_schema = EmpresaSchema()
empresas_schema = EmpresaSchema(many=True)

@ruta_empresa.route("/guardarEmpresa",  methods=['POST'])
def saveEmpresa():
    nombre_empresa=request.json['nombre_empresa']
    descripcion_empresa=request.json['descripcion_empresa']
    periodo_activo=request.json['periodo_activo']
    usuario=request.json['usuario']
    contrasena=request.json['contrasena']
    nueva_empresa=Empresa(nombre_empresa,descripcion_empresa,periodo_activo,usuario,contrasena)
    bd.session.add(nueva_empresa)
    bd.session.commit()
    return empresa_schema.jsonify(nueva_empresa)

@ruta_empresa.route("/eliminarEmpresa", methods=['DELETE'])
def eliminarEmpresa():
     id = request.json['id']
     empresa=Empresa.query.get(id)
     if empresa is None:
          return jsonify({"mensaje": "No se encontró la empresa"})
     bd.session.delete(empresa)
     bd.session.commit()
     return jsonify({"message": "Empresa eliminada"}), 200
          

@ruta_empresa.route("/login", methods=['POST'])
def login():
    usuario = request.json['usuario']
    contrasena = request.json['contrasena']

    if not usuario or not contrasena:
        return jsonify({"message": "Username and password are required"}), 400

    empresa = Empresa.query.filter_by(usuario=usuario).first()

    if not empresa:
        return jsonify({"message": "Invalid username or password"}), 401


    if empresa.contrasena != contrasena:
        return jsonify({"message": "Invalid  password"}), 401

    return jsonify({"empresa_id": empresa.id,"empresa":empresa.nombre_empresa}), 200



@ruta_empresa.route('/getEmpresas', methods=['GET'])
def get_empresas():
    empresas = Empresa.query.all()
    print(empresas)
    result = empresas_schema.dump(empresas)
    return jsonify(result)
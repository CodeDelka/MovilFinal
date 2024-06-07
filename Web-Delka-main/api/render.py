from flask import Flask, Blueprint, request, jsonify,render_template

ruta_render = Blueprint("route_user", __name__)

@ruta_render.route("/", methods=['GET'])
def index():
    return render_template('index.html')


@ruta_render.route("/clientes", methods=['GET'])
def clientes():
    return render_template('clientes.html')


@ruta_render.route("/compras", methods=['GET'])
def compras():
    return render_template('compras.html')


@ruta_render.route("/cotizacion", methods=['GET'])
def cotizacion():
    return render_template('cotizacion.html')


@ruta_render.route("/dashboard", methods=['GET'])
def dashboard():
    return render_template('dashboard.html')

@ruta_render.route("/databasemanagment", methods=['GET'])
def databasemanagment():
    return render_template('databasemanagment.html')

@ruta_render.route("/gestion_empresas", methods=['GET'])
def gestion_empresas():
    return render_template('gestion_empresas.html')

@ruta_render.route("/informes", methods=['GET'])
def informes():
    return render_template('informes.html')

@ruta_render.route("/menu_principal", methods=['GET'])
def menu_principal():
    return render_template('menu_principal.html')

@ruta_render.route("/modulos", methods=['GET'])
def modulos():
    return render_template('modulos.html')

@ruta_render.route("/parametrizacion", methods=['GET'])
def parametrizacion():
    return render_template('parametrizacion.html')

@ruta_render.route("/perfil", methods=['GET'])
def perfil():
    return render_template('perfil.html')

@ruta_render.route("/periodo-managment", methods=['GET'])
def periodomanagment():
    return render_template('periodo-managment.html')

@ruta_render.route("/productos", methods=['GET'])
def productos():
    return render_template('productos.html')

@ruta_render.route("/stock", methods=['GET'])
def stock():
    return render_template('stock.html')

@ruta_render.route("/admin-empresa", methods=['GET'])
def adminEmpresa():
    return render_template('admin-empresa.html')
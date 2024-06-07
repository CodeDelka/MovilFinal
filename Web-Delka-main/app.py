from flask import Flask, render_template
from config.bd import app
from flask_cors import CORS
from api.render import ruta_render
from api.EmpresaApi import  ruta_empresa
from api.ClienteApi import ruta_cliente
from api.ParametrizacionApi import ruta_parametrizacion
from api.ProductosApi import ruta_productos
from api.VendedorApi import ruta_vendedor
from api.VentaProductoApi import ruta_venta_produco
from api.VentasApi import ruta_ventas

app.register_blueprint(ruta_render, url_prefix="/")
app.register_blueprint(ruta_empresa, url_prefix="/api")
app.register_blueprint(ruta_cliente, url_prefix="/api")
app.register_blueprint(ruta_parametrizacion, url_prefix="/api")
app.register_blueprint(ruta_productos, url_prefix="/api")
app.register_blueprint(ruta_vendedor, url_prefix="/api")
app.register_blueprint(ruta_venta_produco, url_prefix="/api")
app.register_blueprint(ruta_ventas, url_prefix="/api")



#Enable CORS for the entire application
CORS(app)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
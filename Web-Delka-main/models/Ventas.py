from  config.bd import bd,app,ma

class Ventas(bd.Model):
    __tablename__ = 'tblVentas'
    id = bd.Column(bd.Integer, primary_key=True)
    descripcion = bd.Column(bd.String(200), nullable=False)
    id_cliente = bd.Column(bd.Integer, bd.ForeignKey('tblCliente.id'))
    id_ventaProducto= bd.Column(bd.Integer, bd.ForeignKey('tblVentaProducto.id'))
    fecha_registro = bd.Column(bd.String(200))
    habilitado=bd.Column(bd.String(200))

    def __init__(self,descripcion,id_cliente,VentaProducto,fecha_registro,habilitado):
        self.descripcion = descripcion
        self.id_cliente=id_cliente
        self.VentaProducto=VentaProducto
        self.fecha_registro=fecha_registro
        self.habilitado=habilitado
       
with app.app_context():
    bd.create_all()

class VentaProductoSchema(ma.Schema):
    class Meta:
        fields=("id","descripcion","id_cliente","VentaProducto","fecha_registro","habilitado")

from  config.bd import bd,app,ma

class VentaProducto(bd.Model):
    __tablename__ = 'tblVentaProducto'
    id = bd.Column(bd.Integer, primary_key=True)
    id_producto = bd.Column(bd.Integer, bd.ForeignKey('tblProducto.id'))
    
    def __init__(self,id_producto):
        self.id_producto = id_producto
       
with app.app_context():
    bd.create_all()

class VentaProductoSchema(ma.Schema):
    class Meta:
        fields=("id","id_producto")
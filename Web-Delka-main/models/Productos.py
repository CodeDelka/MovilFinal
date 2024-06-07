from  config.bd import bd,app,ma

class Producto(bd.Model):
    __tablename__ = 'tblProducto'
    id = bd.Column(bd.Integer, primary_key=True)
    nombre = bd.Column(bd.String(100), nullable=False)
    descripcion = bd.Column(bd.String(200), nullable=False)
    precio_unitario = bd.Column(bd.Float, nullable=False)
    cantidad =bd.Column(bd.Integer)
    cantidad_minima_exis=bd.Column(bd.Integer)


    def __init__(self,nombre,descripcion,precio_unitario,cantidad,cantidad_minima_exis):
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio_unitario=precio_unitario
        self.cantidad=cantidad
        self.cantidad_minima_exis=cantidad_minima_exis



with app.app_context():
    bd.create_all()

class ProductoSchema(ma.Schema):
    class Meta:
        fields=("id","nombre","descripcion","precio_unitario","cantidad","cantidad_minima_exis")
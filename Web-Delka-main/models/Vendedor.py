from  config.bd import bd,app,ma

class Vendedor(bd.Model):
    __tablename__ = 'tblVendedor'
    id = bd.Column(bd.Integer, primary_key=True)
    nombre = bd.Column(bd.String(100), nullable=False)
    apellido = bd.Column(bd.String(100), nullable=False)

    
    def __init__(self,nombre,apellido):
        self.nombre = nombre
        self.apellido = apellido

with app.app_context():
    bd.create_all()

class VendedorSchema(ma.Schema):
    class Meta:
        fields=("id","nombre","apellido")
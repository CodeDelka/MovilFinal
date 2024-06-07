from  config.bd import bd,app,ma

class Cliente(bd.Model):
     __tablename__='tblCliente'
     id = bd.Column(bd.Integer,primary_key=True)
     nombre = bd.Column(bd.String(100),nullable=False)
     identificacion=bd.Column(bd.String(100),nullable=False)
     direccion=bd.Column(bd.String(100),nullable=False)
     telefono=bd.Column(bd.String(100),nullable=False)
     correo=bd.Column(bd.String(100),nullable=False)
     

     
     def __init__(self,nombre,identificacion,direccion,telefono,correo):
        self.nombre = nombre
        self.identificacion = identificacion
        self.direccion=direccion
        self.telefono=telefono
        self.correo=correo
       
        
with app.app_context():
    bd.create_all()

class ClienteSchema(ma.Schema):
    class Meta:
        fields=("id","nombre","identificacion","direccion","telefono","correo")
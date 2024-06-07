from  config.bd import bd,app,ma

class Administrador(bd.Model):
    __tablename__='tblAdministrador'
    id = bd.Column(bd.Integer, primary_key = True)
    usuario = bd.Column(bd.String(50))
    contrasena = bd.Column(bd.String(50))
   

    def __init__(self,usuario,contrasena):
        self.usuario = usuario
        self.contrasena = contrasena
       
        
with app.app_context():
    bd.create_all()

class AdministradorSchema(ma.Schema):
    class Meta:
        fields=("id","usuario","contrasena")
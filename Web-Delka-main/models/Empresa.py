from  config.bd import bd,app,ma

class Empresa(bd.Model):
    __tablename__ = 'tblEmpresa'
    id = bd.Column(bd.Integer, primary_key=True)
    nombre_empresa = bd.Column(bd.String(100), nullable=False)
    descripcion_empresa = bd.Column(bd.String(200), nullable=False)
    periodo_activo =bd.Column(bd.String(200), nullable=False)
    usuario = bd.Column(bd.String(200), nullable=False)
    contrasena = bd.Column(bd.String(200), nullable=False)
    
    def __init__(self,nombre_empresa,descripcion_empresa,periodo_activo,usuario,contrasena):
        self.nombre_empresa = nombre_empresa
        self.descripcion_empresa = descripcion_empresa
        self.periodo_activo=periodo_activo
        self.usuario=usuario
        self.contrasena=contrasena
       
        
with app.app_context():
    bd.create_all()

class EmpresaSchema(ma.Schema):
    class Meta:
        fields=("id","nombre_empresa","descripcion_empresa","periodo_activo","usuario","contrasena")
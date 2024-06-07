from  config.bd import bd,app,ma

class Parametrizacion(bd.Model):
    __tablename__ = 'tblParametrizacion'
    id= bd.Column(bd.Integer, primary_key=True)
    id_empresa = bd.Column(bd.Integer, bd.ForeignKey('tblEmpresa.id'))
    porcentaje_ganancia = bd.Column(bd.Float)
    porcentaje_iva=bd.Column(bd.Float)

    def __init__(self,id_empresa,porcentaje_ganancia,porcentaje_iva):
        self.id_empresa = id_empresa
        self.porcentaje_ganancia = porcentaje_ganancia
        self.porcentaje_iva=porcentaje_iva

with app.app_context():
    bd.create_all()

class ParametrizacionSchema(ma.Schema):
    class Meta:
        fields=("id","id_empresa","porcentaje_ganancia","porcentaje_iva")

 
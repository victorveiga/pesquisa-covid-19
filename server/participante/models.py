from django.db import models

# Create your models here.
class Dados(models.Model):
    class Meta:
        verbose_name        = 'Dados'
        verbose_name_plural = 'Dados'
    bairro                  = models.CharField(max_length=100)
    cidade                  = models.CharField(max_length=100)
    uf                      = models.CharField(max_length=2)
    nascimento              = models.DateField()
    genero                  = models.CharField(verbose_name="Com que gênero você se identifica?", max_length=1, choices=[('M', 'Masculino'),('M', 'Feminino'),('M', 'Outro')])
    cor                     = models.CharField(verbose_name="Com que cor você se identifica?", max_length=1, choices=[('B', 'Branca'),('P', 'Parda'),('N', 'Preta'),('A', 'Amarela')])
    relacionamento          = models.CharField(verbose_name="Qual é o seu estado civil?", max_length=1, choices=[('S', 'Solteiro(a)'), ('C', 'Casado(a) ou união estável'), ('D', 'Desquitado/a, separado/a judicialmente ou divorciado/a'), ('V', 'Viúvo/a')])
    instrucao               = models.IntegerField()
    trabalho_estudo         = models.IntegerField()
    funcao_unifeso          = models.IntegerField()
    moradia_caracteristicas = models.IntegerField()
    residencia_adequada     = models.IntegerField()
    tipo_conexao            = models.IntegerField()
    tipo_rede               = models.IntegerField()
    dispositivo_usado       = models.IntegerField()
    tipo_usuario            = models.IntegerField()
    trocou_perfil_usuario   = models.CharField(max_length=1)
    equipamento_home_office = models.CharField(max_length=1)
    apps_utilizados         = models.IntegerField()
    so_utilizado            = models.IntegerField()
    utilizou_virtualidade   = models.CharField(max_length=1)
    virtual_atividade       = models.IntegerField()
    dificuldade_uso_app     = models.CharField(max_length=1)
    contatar_suporte_app    = models.CharField(max_length=1)
    sat_serv_tel            = models.CharField(max_length=1)
    sat_serv_internet       = models.CharField(max_length=1)
    sat_serv_tv             = models.CharField(max_length=1)
    sat_serv_luz            = models.CharField(max_length=1)
    sat_serv_streaming      = models.CharField(max_length=1)
    sat_serv_finan          = models.CharField(max_length=1)
    sat_serv_gov            = models.CharField(max_length=1)
    sat_serv_univer         = models.CharField(max_length=1)

    def __str__(self) -> str:
        return 'Nº: {}'.format(self.id)
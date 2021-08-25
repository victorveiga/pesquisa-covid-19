from django.db import models
from multiselectfield import MultiSelectField
from .constants import MOTIVO_TROCA_USUARIO, APPS_UTILIZADOS, VIRTUAL_ATIVIDADE, VIRTUAL_ATIVIDADE_MOTIVO

# Create your models here.
class Dados(models.Model):
    class Meta:
        verbose_name        = 'Dados'
        verbose_name_plural = 'Dados'
    bairro                  = models.CharField(max_length=100)
    cidade                  = models.CharField(max_length=100)
    uf                      = models.CharField(max_length=2)
    nascimento              = models.DateField()
    genero = models.CharField(
        verbose_name="Com que gênero você se identifica?", 
        max_length=1, 
        choices=[('M', 'Masculino'),('F', 'Feminino'),('O', 'Outro')]
    )
    genero_outro = models.CharField(verbose_name="Especificar o gênero",max_length=255,null=True, blank=True)
    cor = models.CharField(
        verbose_name="Com que cor você se identifica?", 
        max_length=1, 
        choices=[('B', 'Branca'),('P', 'Parda'),('N', 'Preta'),('A', 'Amarela')]
    )
    relacionamento = models.CharField(
        verbose_name="Qual é o seu estado civil?", 
        max_length=1, 
        choices=[
            ('S', 'Solteiro(a)'), 
            ('C', 'Casado(a) ou união estável'), 
            ('D', 'Desquitado/a, separado/a judicialmente ou divorciado/a'), 
            ('V', 'Viúvo/a')]
    )
    instrucao = models.IntegerField(
        verbose_name="Qual é o seu nível máximo de estudos concluídos?", 
        choices=[
            (1,"Ensino fundamental"),
            (2,"Ensino médio"),
            (3,"Ensino técnico"),
            (4,"Ensino superior"),
            (5,"Pós-graduação (especialização, mestrado ou doutorado)"),
            (6,"Não sabe"),
            (7,"Outro")
    ])
    instrucao_outro = models.CharField(verbose_name="Especificar o nível máximo de estudos", max_length=255, null=True, blank=True)
    trabalho_estudo = models.IntegerField(
        verbose_name="Qual é  a sua situação de trabalho/estudo?",
        choices=[
            (1,"Estudante e empregado com carteira assinada"),
            (2,"Dona/o de casa ou cuidador/a de pessoas dependentes"),
            (3,"Empregado com contrato temporário"),
            (4,"Empregado com carteira assinada"),
            (5,"Empregador"),
            (6,"Outro")
        ]
    )
    trabalho_estudo_outro = models.CharField(verbose_name="Especificar a situação de trabalho/estudo", max_length=255, null=True, blank=True)
    funcao_unifeso = models.IntegerField(
        verbose_name="Assinale sua função principal na comunidade do UNIFESO (considere o maior número de horas na atividade desenvolvida):",
        choices=[
            (1, "Estudante de curso de graduação."),
            (2, "Estudante de curso de pós-graduação/residência."),
            (3, "Docente."),
            (4, "Profissional de saúde."),
            (5, "Função administrativa."),
            (6, "Serviços gerais."),
            (7, "Outra.")
        ]
    )
    funcao_unifeso_espec = models.CharField(verbose_name="Especificar a função", max_length=255, null=True, blank=True)
    moradia_caracteristicas = models.IntegerField(
        verbose_name="A casa/apartamento em que você está confinado tem alguma das seguintes características?",
        choices=[
            (1, "Varanda ou terraço"),
            (2, "Jardim privado"),
            (3, "Outras áreas externas"),
            (4, "Nenhum espaço exterior")
        ]
    )    
    residencia_adequada = models.IntegerField(
        verbose_name="Você acha que sua residência é adequada para enfrentar o confinamento? (quanto a espaço, luz, número de quartos, etc.)",
        choices=[
            (1, "Nada"),
            (2, "Um pouco"),
            (3, "Moderadamente"),
            (4, "Bastante"),
            (5, "Muito")
        ]
    )
    tipo_conexao = models.IntegerField(
        verbose_name="Qual a sua conexão de internet ?",
        choices=[
            (1, "Banda larga (internet residencial ou corporativa)"),
            (2, "Internet móvel 3G/4G"),
            (3, "Internet via satélite"),
            (4, "Não sei indicar"),
            (5, "Outro(Especificar)")
        ]
    )
    tipo_conexao_espec = models.CharField(verbose_name="Especificar a conexão sua conexão com a internet", max_length=255, null=True, blank=True)
    tipo_rede = models.IntegerField(
        verbose_name="Tipo da rede que você costuma se conectar.",
        choices=[
            (1, "Rede pública (faculdade, hospital, rodoviária, shopping)"),
            (2, "Rede privada (redes empresariais e de segurança governamental)"),
            (3, "Rede doméstica (redes fornecidas diretamente por provedores de internet)")
        ]
    )
    dispositivo_usado = models.IntegerField(
        verbose_name="Qual dispositivo que você mais utilizada para navegar na internet? (Tarefas cotidianas, redes sociais e trabalho)",
        choices=[
            (1, "Celular ou Smartphone"),
            (2, "Computador ou notebook."),
            (3, "Tablet"),
            (4, "Outro")
        ]
    )
    dispositivo_usado_espec = models.CharField(verbose_name="Especificar o dispositivo utilizado para navegar na internet", max_length=255, null=True, blank=True)
    tipo_usuario = models.IntegerField(
        verbose_name="Qual o seu perfil de usuário da internet?",
        choices=[
            (1, "Perfil de usuário iniciante, não possui uma boa familiaridade com o acesso à internet."),
            (2, "Perfi'l de usuário intermediário (velocidade de conexão (até 200 mega) para fazer downloads e uploads que requerem uma melhor conexão"),
            (3, "Perfil d'e usuário completo internet rápida ou ultrarrápida para gaming, videoconferências com pessoas de outros países e outros serviços digitais inclusos, como plataformas streaming.")
        ]
    )  
    trocou_perfil_usuario   = models.CharField(
        verbose_name="Você precisou trocar o perfil de usuário da internet, durante o confinamento?",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),  
        ]
    )
    motivo_troca_usuario = MultiSelectField(
        verbose_name="Caso tenha respondido “sim” na pergunta anterior, indique o motivo? (você pode responder mais de uma):",
        choices=MOTIVO_TROCA_USUARIO,
        max_length=6,
        max_choices=6
    )
    equipamento_home_office = models.CharField(
        verbose_name="Você possui os equipamentos necessários para trabalhar em home office?",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),  
        ]
    )
    obstaculo_equipamento = models.IntegerField(
        verbose_name="Se não, quais são os obstáculos?",
        choices=[
            (1, "Falta de equipamentos (Computadores / notebooks)"),
            (2, "Falta de uma conexão à internet estável"),
            (3, "Falta de recursos financeiros"),
            (4, "Outro")
        ],
        null=True,
        blank=True
    )
    obstaculo_equipamento_espec = models.CharField(verbose_name="Especificar outros obtáculos do motivo da falta de equipamentos", max_length=255, null=True, blank=True)
    apps_utilizados = MultiSelectField(
        verbose_name="Quais aplicativos ou software você utiliza? (Pode escolher mais de uma opção)",
        choices=APPS_UTILIZADOS,
        max_length=26,
        max_choices=26
    )
    so_utilizado = models.IntegerField(
        verbose_name="Quais os sistemas operacionais que você mais utiliza?",
        choices=[
            (1, "Windows"),
            (2, "Distribuição Linux"),
            (3, "Mac OS"),
            (4, "iOS"),
            (5, "Android"),
            (6, "Não sei especificar"),
            (7, "Outro")
        ]
    )
    so_utilizado_espec = models.CharField(verbose_name="Especificar o sistema operacional", max_length=255, null=True, blank=True)
    utilizou_virtualidade = models.CharField(
        verbose_name="Durante a pandemia do novo coronavírus você utilizou a virtualidade para substituir alguma de suas atividades cotidianas?",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não")
        ]
    )
    virtual_atividade = MultiSelectField(
        verbose_name="Caso tenha respondido SIM, assinale a(s) atividade(s) desenvolvida(s) por você  (pode marcar mais de uma)",
        choices=VIRTUAL_ATIVIDADE,
        max_length=6,
        max_choices=6
    )
    virtual_atividade_espec = models.CharField(verbose_name="Especificar atividades desenvolvidas por você", max_length=255, null=True, blank=True)
    virtual_atividade_motivo = MultiSelectField(
        verbose_name="Caso tenha respondido NÃO, assinale o(s) motivo(s) que identificados por você (pode marcar mais de um)",
        choices=VIRTUAL_ATIVIDADE_MOTIVO,
        null=True,
        blank=True,
        max_length=4,
        max_choices=4
    )
    virtual_at_motivo_espec = models.CharField(verbose_name="Especificar motivos de não ter utilizado da virtualidade para substituir alguma atividade", max_length=255, null=True, blank=True)
    dificuldade_uso_app = models.CharField(
        verbose_name= "Você teve dificuldades em utilizar aplicativos/software/sistemas durante o período de confinamento?",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não")
        ]
    )
    contatar_suporte_app = models.CharField(
        verbose_name="Você precisou contatar o suporte ao usuário de algum software, aplicativo ou sistema que você fez uso?",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não")
        ]
    )
    sat_serv_tel = models.CharField(
        verbose_name="Conte-nos se você ficou satisfeito com os serviços prestados pela companhia de telefone:",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),
            ("O", "Não fiz o uso desse serviço")
        ]
    )
    sat_serv_internet = models.CharField(
        verbose_name="Conte-nos se você ficou satisfeito com os serviços prestados pela companhia de internet:",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),
            ("O", "Não fiz o uso desse serviço")
        ]
    )
    sat_serv_tv = models.CharField(
        verbose_name="Conte-nos se você ficou satisfeito com os serviços prestados pela companhia de TV a cabo:",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),
            ("O", "Não fiz o uso desse serviço")
        ]
    )
    sat_serv_luz = models.CharField(
        verbose_name="Conte-nos se você ficou satisfeito com os serviços prestados por aplicativos da companhia de Luz:",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),
            ("O", "Não fiz o uso desse serviço")
        ]
    )
    sat_serv_streaming = models.CharField(
        verbose_name="Conte-nos se você ficou satisfeito com os serviços prestados por aplicativos de serviços de streaming:",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),
            ("O", "Não fiz o uso desse serviço")
        ]
    )
    sat_serv_finan = models.CharField(
        verbose_name="Conte-nos se você ficou satisfeito com os serviços prestados por aplicativos de instituições financeiras (Bancos, financiadoras, corretoras de valores...):",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),
            ("O", "Não fiz o uso desse serviço")
        ]
    )
    sat_serv_gov = models.CharField(
        verbose_name="Conte-nos se você ficou satisfeito com os serviços prestados por aplicativos de instituições governamentais (FGTS, Meu INSS, CDT entre outros...):",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),
            ("O", "Não fiz o uso desse serviço")
        ]
    )
    sat_serv_univer = models.CharField(
        verbose_name="Conte-nos se você ficou satisfeito com os serviços online disponibilizados pela Universidade (Portal do aluno, ava, biblioteca online...):",
        max_length=1,
        choices=[
            ("S", "Sim"),
            ("N", "Não"),
            ("O", "Não fiz o uso desse serviço")
        ]
    )

    def __str__(self) -> str:
        return 'Nº: {}'.format(self.id)
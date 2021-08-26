from rest_framework.serializers import ModelSerializer, ValidationError
from rest_framework import fields
from .models import Dados
from .constants import MOTIVO_TROCA_USUARIO, APPS_UTILIZADOS, VIRTUAL_ATIVIDADE, VIRTUAL_ATIVIDADE_MOTIVO

class DadosSerializer(ModelSerializer):
    class Meta:
        model = Dados
        fields = '__all__'

    motivo_troca_usuario     = fields.MultipleChoiceField(choices=MOTIVO_TROCA_USUARIO, allow_blank=True, allow_null=True)
    apps_utilizados          = fields.MultipleChoiceField(choices=APPS_UTILIZADOS)
    virtual_atividade        = fields.MultipleChoiceField(choices=VIRTUAL_ATIVIDADE, allow_blank=True, allow_null=True)
    virtual_atividade_motivo = fields.MultipleChoiceField(choices=VIRTUAL_ATIVIDADE_MOTIVO, allow_blank=True, allow_null=True)

    def validate(self, data):
        erros = {}

        if data.get('genero','') == 'O' and (data.get('genero_outro','') == ''):
            erros['genero_outro'] = 'O campo genero_outro é obrigatório quando o valor "O" é informado em genero.'

        if data.get('instrucao', 0) == 7 and (data.get('instrucao_outro','') == ''):
            erros['instrucao_outro'] = 'O campo instrucao_outro é obrigatório quando o valor "7" é informado em instrucao.'

        if data.get('trabalho_estudo', 0) == 6 and (data.get('trabalho_estudo_outro','') == ''):
            erros['trabalho_estudo_outro'] = 'O campo trabalho_estudo_outro é obrigatório quando o valor "6" é informado em trabalho_estudo.'

        if data.get('funcao_unifeso', 0) == 7 and (data.get('funcao_unifeso_espec','') == ''):
            erros['funcao_unifeso_espec'] = 'O campo funcao_unifeso_espec é obrigatório quando o valor "7" é informado em funcao_unifeso.'

        if data.get('tipo_conexao', 0) == 5 and (data.get('tipo_conexao_espec','') == ''):
            erros['tipo_conexao_espec'] = 'O campo tipo_conexao_espec é obrigatório quando o valor "5" é informado em tipo_conexao.'

        if data.get('dispositivo_usado', 0) == 4 and (data.get('dispositivo_usado_espec','') == ''):
            erros['dispositivo_usado_espec'] = 'O campo dispositivo_usado_espec é obrigatório quando o valor "4" é informado em dispositivo_usado.'

        if data.get('equipamento_home_office', "") == "N" and (data.get('obstaculo_equipamento','') == ''):
            erros['obstaculo_equipamento'] = 'O campo obstaculo_equipamento é obrigatório quando o valor "N" é informado em equipamento_home_office.'

        if data.get('obstaculo_equipamento', 0) == 4 and (data.get('obstaculo_equipamento_espec','') == ''):
            erros['obstaculo_equipamento_espec'] = 'O campo obstaculo_equipamento_espec é obrigatório quando o valor "4" é informado em obstaculo_equipamento.'

        if data.get('so_utilizado', 0) == 7 and (data.get('so_utilizado_espec','') == ''):
            erros['so_utilizado_espec'] = 'O campo so_utilizado_espec é obrigatório quando o valor "7" é informado em so_utilizado.'

        if data.get('virtual_atividade', 0) == 6 and (data.get('virtual_atividade_espec','') == ''):
            erros['virtual_atividade_espec'] = 'O campo virtual_atividade_espec é obrigatório quando o valor "6" é informado em virtual_atividade.'

        if data.get('utilizou_virtualidade', "") == "N" and (data.get('virtual_atividade_motivo','') == ''):
            erros['virtual_atividade_motivo'] = 'O campo virtual_atividade_motivo é obrigatório quando o valor "N" é informado em utilizou_virtualidade.'

        if data.get('virtual_atividade_motivo', 0) == 4 and (data.get('virtual_at_motivo_espec','') == ''):
            erros['virtual_at_motivo_espec'] = 'O campo virtual_at_motivo_espec é obrigatório quando o valor "4" é informado em virtual_atividade_motivo.'

        if data.get('trocou_perfil_usuario', "") == "S" and (data.get('motivo_troca_usuario','') == ''):
            erros['motivo_troca_usuario'] = 'O campo motivo_troca_usuario é obrigatório quando o valor "S" é informado em trocou_perfil_usuario.'        
        
        if (erros != {}):
            raise ValidationError(erros)

        return data
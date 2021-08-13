from rest_framework.serializers import ModelSerializer, ValidationError
from .models import Dados

class DadosSerializer(ModelSerializer):
    class Meta:
        model = Dados
        fields = '__all__'

    def validate(self, data):
        '''erros = {}
        erros['exemplo'] = 'O CNPJ informado é inválido.'

        if (erros != {}):
            raise ValidationError(erros)'''

        return data
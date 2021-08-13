from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import Dados
from .serializers import DadosSerializer

class ParticipanteViewSet(ModelViewSet):
    serializer_class = DadosSerializer

    def get_queryset(self):
        return Dados.objects.all()

    def list(self, request, *args, **kwargs):
        return Response(data={'message': 'Requisição não permitida.'}, status=400)

    def create(self, request, *args, **kwargs):
        return super(ParticipanteViewSet, self).create(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return Response(data={'message': 'Requisição não permitida.'}, status=400)

    # Recupera apenas o item passado por parâmetro
    def retrieve(self, request, *args, **kwargs):
        return Response(data={'message': 'Requisição não permitida.'}, status=400)

    def update(self, request, *args, **kwargs):
        return Response(data={'message': 'Requisição não permitida.'}, status=400)

    # (PATCH) Atualiza parcialmente um objeto, ao invés de atualizar o objeto inteiro como faz o update
    def partial_update(self, request, *args, **kwargs):
        return Response(data={'message': 'Requisição não permitida.'}, status=400)
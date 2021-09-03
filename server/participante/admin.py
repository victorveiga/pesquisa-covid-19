from django.contrib import admin
from .models import Dados

def handleSpecificDataCSV(modeladmin, request, queryset):
    queryset.update(bairro='teste')

def handleAllDataCSV(modeladmin, request, queryset):
    queryset.update(bairro='teste')

handleSpecificDataCSV.short_description = "Baixar registros marcados em CSV"
handleAllDataCSV.short_description = "Baixar todos os registros"

class DadosAdmin(admin.ModelAdmin):
    actions = [handleSpecificDataCSV, handleAllDataCSV]

    def get_actions(self, request):
        actions = super().get_actions(request)
        if 'delete_selected' in actions:
            del actions['delete_selected']
        return actions

# Register your models here.
admin.site.register(Dados, DadosAdmin)
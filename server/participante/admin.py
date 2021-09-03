from django.contrib import admin
from .models import Dados
from django.http import HttpResponse
import csv

def download_csv(model, queryset):
    meta = model.model._meta
    field_names = [field.name for field in meta.fields]

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename={}.csv'.format(meta)
    writer = csv.writer(response)

    writer.writerow(field_names)
    for obj in queryset:
        writer.writerow([getattr(obj, field) for field in field_names])

    return response

def handleSpecificDataCSV(modeladmin, request, queryset):
    return download_csv(modeladmin, queryset)

def handleAllDataCSV(modeladmin, request, queryset):
    return download_csv(modeladmin, Dados.objects.all())

handleSpecificDataCSV.short_description = "Baixar em .CSV registros marcados"
handleAllDataCSV.short_description = "Baixar em .CSV todos os registros"

class DadosAdmin(admin.ModelAdmin):
    actions = [handleSpecificDataCSV, handleAllDataCSV]

    def get_actions(self, request):
        actions = super().get_actions(request)
        if 'delete_selected' in actions:
            del actions['delete_selected']
        return actions

# Register your models here.
admin.site.register(Dados, DadosAdmin)
# Generated by Django 3.1.3 on 2021-08-17 21:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('participante', '0002_auto_20210817_2010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dados',
            name='genero',
            field=models.CharField(choices=[('M', 'Masculino'), ('F', 'Feminino'), ('O', 'Outro')], max_length=1, verbose_name='Com que gênero você se identifica?'),
        ),
    ]
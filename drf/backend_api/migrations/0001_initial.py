# Generated by Django 5.1.4 on 2024-12-20 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Название')),
                ('category', models.CharField(max_length=200, verbose_name='Категория')),
                ('description', models.TextField(verbose_name='Описание')),
                ('price', models.FloatField(verbose_name='Цена')),
                ('count', models.IntegerField(verbose_name='Количество')),
                ('manufacturer', models.CharField(max_length=200, verbose_name='Производитель')),
                ('land', models.CharField(max_length=200, verbose_name='Страна производства')),
                ('image', models.TextField(verbose_name='Фото')),
                ('note', models.TextField(verbose_name='Примечание')),
            ],
        ),
    ]

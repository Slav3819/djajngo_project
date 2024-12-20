from django.db import models


class Product (models.Model):
    name = models.CharField(null=False, max_length=200, verbose_name='Название')
    category = models.CharField(null=False, max_length=200, verbose_name='Категория')
    description = models.TextField(null=False, verbose_name='Описание')
    price = models.FloatField(null=False, verbose_name='Цена')
    count = models.IntegerField(null=False, verbose_name='Количество')
    manufacturer = models.CharField(null=False, max_length=200, verbose_name='Производитель')
    land = models.CharField(null=False, max_length=200, verbose_name='Страна производства')
    image = models.TextField(null=False, verbose_name='Фото')
    note = models.TextField(null=False, verbose_name='Примечание')

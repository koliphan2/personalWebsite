# Generated by Django 2.0.2 on 2018-05-21 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artwork', '0003_auto_20180521_1026'),
    ]

    operations = [
        migrations.AddField(
            model_name='webcontent',
            name='propertyValue',
            field=models.TextField(blank=True, null=True),
        ),
    ]
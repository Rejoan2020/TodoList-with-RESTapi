# Generated by Django 5.0.1 on 2024-01-14 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='description',
            field=models.CharField(default='empty', max_length=1000),
        ),
    ]

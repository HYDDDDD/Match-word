# Generated by Django 4.1.6 on 2023-02-11 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameMatchWord', '0017_vocabulary'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='score',
            name='vocab_correct',
        ),
        migrations.RemoveField(
            model_name='score',
            name='vocab_wrong',
        ),
        migrations.AddField(
            model_name='vocabulary',
            name='vocab_status',
            field=models.CharField(blank=True, max_length=1),
        ),
    ]
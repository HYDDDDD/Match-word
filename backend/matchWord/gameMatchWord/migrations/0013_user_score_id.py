# Generated by Django 4.1.5 on 2023-01-25 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameMatchWord', '0012_remove_score_treasury_title_score_treasury_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='score_id',
            field=models.ManyToManyField(to='gameMatchWord.score'),
        ),
    ]

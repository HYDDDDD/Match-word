# Generated by Django 4.1.5 on 2023-02-02 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameMatchWord', '0013_user_score_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='treasury',
            name='total_vocab',
            field=models.IntegerField(blank=True, default=1),
            preserve_default=False,
        ),
    ]

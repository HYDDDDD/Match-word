# Generated by Django 4.1.5 on 2023-01-23 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameMatchWord', '0005_delete_vocabulary'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vocabulary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vocabulary', models.CharField(max_length=30)),
                ('thai_vocab', models.CharField(max_length=30)),
                ('vocab_type', models.CharField(max_length=1)),
            ],
        ),
    ]

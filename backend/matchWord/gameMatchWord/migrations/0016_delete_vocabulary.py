# Generated by Django 4.1.6 on 2023-02-06 18:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gameMatchWord', '0015_remove_vocabulary_vocab_type'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Vocabulary',
        ),
    ]

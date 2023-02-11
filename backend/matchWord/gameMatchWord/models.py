from django.db import models


class Treasury(models.Model):
    # Create table Treasury
    treasury_id = models.AutoField(primary_key=True, blank=True)
    treasury_title = models.CharField(max_length=10, blank=True)
    treasury_date = models.DateField(blank=True)
    total_vocab = models.IntegerField(blank=True)

    # return
    def __str__(self) -> str:
        return self.treasury_title


class Score(models.Model):
    # Create table Score
    score_id = models.AutoField(primary_key=True, blank=True)
    score = models.IntegerField(blank=True)
    treasury_id = models.ManyToManyField(Treasury)

    # return
    def __str__(self) -> str:
        return self.score


class Vocabulary(models.Model):
    # Create table Vocabulary
    vocabulary_id = models.AutoField(primary_key=True)
    vocabulary = models.CharField(max_length=30, blank=True)
    thai_vocab = models.CharField(max_length=30, blank=True)
    vocab_status = models.CharField(max_length=1, blank=True)
    treasury_id = models.ManyToManyField(Treasury)

    # vocab_status : N = null , T = correct , F = wrong

    # return
    def __str__(self) -> str:
        return self.vocabulary


class User(models.Model):
    # Create table User
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(
        max_length=15, blank=True)  # blank=True == NOT NULL if null=True == NULL
    email = models.EmailField(blank=True)
    password = models.CharField(max_length=30, blank=True)
    treasury_id = models.ManyToManyField(Treasury)
    score_id = models.ManyToManyField(Score)

    # return object -> str
    def __str__(self) -> str:
        return self.username

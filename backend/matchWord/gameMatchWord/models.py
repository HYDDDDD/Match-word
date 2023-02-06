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


class Vocabulary(models.Model):
    # Create table Vocabulary
    vocabulary_id = models.AutoField(primary_key=True)
    vocabulary = models.CharField(max_length=30, blank=True)
    thai_vocab = models.CharField(max_length=30, blank=True)
    treasury_id = models.ManyToManyField(Treasury)

    # return
    def __str__(self) -> str:
        return self.vocabulary


class Score(models.Model):
    # Create table Score
    score_id = models.AutoField(primary_key=True, blank=True)
    score = models.IntegerField(blank=True)
    vocab_correct = models.CharField(max_length=100, blank=True)
    vocab_wrong = models.CharField(max_length=100, blank=True)
    treasury_id = models.ManyToManyField(Treasury)

    # return
    def __str__(self) -> str:
        return self.score


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


# Create table Basic vocab
# class Basic_vocab(models.Model):
#     vocab_Bid = models.ForeignKey(Vocabulary,)
#     vocabulary = models.CharField(max_length=30, blank=True)
#     thai_vocab = models.CharField(max_length=30, blank=True)


# Create table Hard vocab
# class Hard_basic(models.Model):
#     vocabulary = models.CharField(max_length=30, blank=True)
#     thai_vocab = models.CharField(max_length=30, blank=True)


# Create table User add vocab
# class UserAdd_vocab(models.Model):
#     vocabulary = models.CharField(max_length=30, blank=True)
#     thai_vocab = models.CharField(max_length=30, blank=True)

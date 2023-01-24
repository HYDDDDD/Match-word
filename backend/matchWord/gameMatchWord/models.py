from django.db import models

# Create table User


class User(models.Model):
    username = models.CharField(
        max_length=15, blank=True)  # blank=True == NOT NULL if null=True == NULL
    email = models.EmailField(blank=True)
    password = models.CharField(max_length=30, blank=True)

    # return object -> str
    def __str__(self) -> str:
        return self.username

class Vocabulary(models.Model):
    vocabulary = models.CharField(max_length=30)
    thai_vocab = models.CharField(max_length=30)
    vocab_type = models.CharField(max_length=1)



# class Treasury(models.Model):
#     treasury_title = models.CharField(max_length=10, blank=True),
#     treasury_date = models.DateField(blank=True),
#     vocab_id = models.IntegerField(blank=True),
#     vocab_type = models.CharField(max_length=1, blank=True),
#     vocabulary = models.CharField(max_length=30, blank=True),
#     thai_vocab = models.CharField(max_length=30, blank=True)

# # return
#     def __str__(self) -> str:
#         return self.treasury_title
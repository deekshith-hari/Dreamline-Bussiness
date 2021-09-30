from django.db import models


class UserAccount(models.Model):
    class Meta(object):
        db_table = 'userdb'

    username = models.CharField(
        'Username', max_length=50, blank=False, unique=True, db_index=True
    )
    password = models.CharField(
        'Password', max_length=500, blank=False, db_index=True
    )
    email = models.EmailField(
        'Email', max_length=254, blank=False, db_index=True
    )
    token = models.CharField(
        'Token', max_length=500
    )
    token_expires_at = models.DateTimeField(
        'Token Expires At', blank=True
    )
    created_at = models.DateTimeField(
        'Created At', blank=True, auto_now_add=True
    )
    modified_at = models.DateTimeField(
        'Modified At', blank=True, auto_now=True
    )

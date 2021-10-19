from django.db import models

class BackgroundImage(models.Model):
    class Meta(object):
        db_table = 'background_image'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True, default='Anonymous'
    )
    image = models.ImageField(
        'image'
    )

    
# Generated by Django 3.2.4 on 2021-10-08 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BackgroundImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, default='Anonymous', max_length=14, verbose_name='Name')),
                ('image', models.ImageField(upload_to='', verbose_name='image')),
            ],
            options={
                'db_table': 'background_image',
            },
        ),
    ]

# Generated by Django 3.2.9 on 2021-11-29 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Song_without_year',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('song_id', models.CharField(max_length=100)),
                ('song_name', models.CharField(max_length=100)),
                ('artist', models.CharField(max_length=100)),
                ('album', models.CharField(max_length=100)),
                ('Like_Count', models.CharField(max_length=50)),
                ('Lyric', models.CharField(max_length=500)),
                ('cover_url', models.CharField(max_length=200)),
                ('tags', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name': 'song_withoout_year',
                'verbose_name_plural': 'songs_withoout_year',
                'db_table': 'tb_song_withoout_year',
            },
        ),
    ]
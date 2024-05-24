import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://ujeelani:Mw2rocks-@db:5432/inventory')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

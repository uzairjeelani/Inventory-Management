from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from routes import *

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)  # Ensure this matches the internal port in docker-compose.yml



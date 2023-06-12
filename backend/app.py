from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from config import Config

from Sources.login import Login
from Sources.info import Info #OrganisationResource

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
jwt = JWTManager(app)
api = Api(app)

api.add_resource(Login, '/rootlogin')
api.add_resource(Info, '/rootinfo')
# api.add_resource(OrganisationResource, '/organisationinfo')

if __name__=="__main__":
    app.run(debug=True)
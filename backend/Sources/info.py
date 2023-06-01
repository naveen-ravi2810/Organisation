from flask_restful import Resource
from Models.token import root_required , organisation_required
from flask_jwt_extended import get_jwt, jwt_required
from flask import jsonify

from Models.tables import users_tb,organisation_tb

class Info(Resource):
    @root_required()
    def get(self):
        claims = get_jwt()
        return {'success': True , 'claims':claims}

class OrganisationResource(Resource):
    @jwt_required()
    def get(self):
        claim = get_jwt()
        org_id = claim['org_id']
        response = organisation_tb.query(
        KeyConditionExpression='org_id = :value',
            ExpressionAttributeValues={
            ':value': int(org_id)
            }
        )
        return jsonify({'details':response['Items'][0]})

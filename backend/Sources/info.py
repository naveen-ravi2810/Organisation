from flask_restful import Resource
from Models.token import root_required , organisation_required
from flask_jwt_extended import get_jwt, jwt_required
from flask import jsonify

from Models.tables import cursor


# rootinfo
class Info(Resource):
    @root_required()
    def get(self):
        claims = get_jwt()
        organisation_id = claims['organisation_id']
        cursor.execute('select * from organisation where organisation_id = %s', organisation_id)
        organisation_details = cursor.fetchone()
        return jsonify({'success': True , 'organisation_details':organisation_details, 'root':True})

# class OrganisationResource(Resource):
#     @jwt_required()
#     def get(self):
#         claim = get_jwt()
#         org_id = claim['organisation_id']
#         cursor.execute('select * from organisation where organisation_id = %s', org_id)
#         return jsonify({'details':response['Items'][0]})

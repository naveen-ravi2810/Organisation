from flask import jsonify, request
from flask_restful import Resource
from flask_jwt_extended import create_access_token
import bcrypt

from Models.tables import users_tb

class Login(Resource):
    def post(self):
        data = request.get_json()
        name = data['organisationemail']
        password = data['rootpassword']
        exist_user = users_tb.scan(
                FilterExpression='useremail = :name',
                ExpressionAttributeValues={':name': name}               
        )
        item = exist_user['Items']
        if item:
            if (bcrypt.checkpw(password.encode('utf-8'), item[0]['password'].value)):
                access_token = create_access_token(identity = item[0]['user_id'], additional_claims = {
                    'user_name': item[0]['user_name'],
                    'uc_pro' : '1722',
                    'org_id' : item[0]['org_id']
                })
                return jsonify({'user_name':item[0]['user_name'], 'access_token':access_token, 'success':True})
            else:
                return jsonify({'success':False, 'msg':"The entered Password is Incorrect"})
        else:
            return jsonify({'success':False, 'msg':"The Given Organisation Does not exist"})

from flask import jsonify, request
from flask_restful import Resource
from flask_jwt_extended import create_access_token
import bcrypt

from Models.tables import cursor

class Login(Resource):
    def post(self):
        data = request.get_json()
        name = data['organisationemail']
        password = data['rootpassword']

        # Auth using MySQL
        cursor.execute('select * from root_user where root_name = %s',name)
        details = cursor.fetchone()
        if details is not None:
            if  (bcrypt.checkpw(password.encode('utf-8'), details['root_password'].encode('utf-8'))):
                access_token = create_access_token(identity = details['root_id'], additional_claims = {
                    'root_name' : details['root_name']
                })
                return ({'status':True, "message":'Login Successfull', 'token':access_token})
            return ({'status':False, 'message':'Incorrect Password'})
        return jsonify({'status':False, 'message':"Invalid Username"})

        # Making in DynamoDb
        # exist_user = users_tb.scan(
        #         FilterExpression='useremail = :name',
        #         ExpressionAttributeValues={':name': name}               
        # )
        # item = exist_user['Items']
        # if item:
        #     if (bcrypt.checkpw(password.encode('utf-8'), item[0]['password'].value)):
        #         access_token = create_access_token(identity = item[0]['user_id'], additional_claims = {
        #             'user_name': item[0]['user_name'],
        #             'uc_pro' : '1722',
        #             'org_id' : item[0]['org_id']
        #         })
        #         return jsonify({'user_name':item[0]['user_name'], 'access_token':access_token, 'success':True})
        #     else:
        #         return jsonify({'success':False, 'msg':"The entered Password is Incorrect"})
        # else:
        #     return jsonify({'success':False, 'msg':"The Given Organisation Does not exist"})
        

# import boto3
import bcrypt
# from datetime import datetime
# dynamodb = boto3.resource('dynamodb')

# Users Table
# users_tb = dynamodb.Table("users")
# organisation_tb = dynamodb.Table('organisation')

# Create table
# def create_table():
#     dynamodb.create_table(
#         TableName = "organisation",
#         KeySchema = [
#             {
#                 "AttributeName" : "org_id",
#                 "KeyType" : "HASH"
#             },
#             {
#                 "AttributeName" : "org_name",
#                 "KeyType" : "RANGE"
#             }
#         ],
#         AttributeDefinitions = [
#             {
#                 "AttributeName" : "org_name",
#                 "AttributeType" : "S"
#             },
#             {
#                 "AttributeName" : "org_id",
#                 "AttributeType" : "N"
#             }
#         ],
#         ProvisionedThroughput = {
#              'ReadCapacityUnits': 10,
#              'WriteCapacityUnits': 10
#         }
#     )

# def create_user():
# name = "root1"
# password1 = "root1"
# password = bcrypt.hashpw(password1.encode('utf-8'), bcrypt.gensalt())
#     users_tb.put_item(
#         Item = {
#             'user_name' : name,
#             'password' : password,
#             'user_id' : 2
#         }
#     )


# def create_root_user():
#     password1 = 'root1root1'
#     password = bcrypt.hashpw(password1.encode('utf-8'), bcrypt.gensalt())
#     users_tb.put_item(
#         Item = {
#             'user_name' : "root1",
#             'useremail' : 'root1@gmail.com',
#             'password' : password,
#             'user_id' : 3
#         }
#     )

# def create_roo1_organisation():
#     organisation_tb.put_item(
#         Item = {
#             'org_id' : 123456789010,
#             'org_name' : 'root1_organisation',
#             'description' : 'This is school based organisation service where students of the root1_organisation can have their information and teachers can have their with the Data Protected manner',
#             'created_date' : datetime.now().isoformat()
#         }
#     )

# Uncommand the Next line to create a table in Dynamodb
# create_table()

# Uncommand to add the first user
# create_user()

# Uncommand the below line to create a root admin
# create_root_user()

# create_roo1_organisation()


import pymysql
import os
from dotenv import load_dotenv
load_dotenv()

conn = pymysql.connect(host = os.getenv('sqlhost'),
                       user = os.getenv('sqluser'),
                       password = os.getenv('sqlpassword'),
                       database= 'beorganised',
                       cursorclass=pymysql.cursors.DictCursor
                       )
cursor = conn.cursor()

# '''
# Tables
# rootusers:
# query = '''CREATE TABLE root_user (
#     root_id INT PRIMARY KEY AUTO_INCREMENT,
#     organisation_id INT PRIMARY KEY AUTO_INCREMENT,
#     root_name VARCHAR(50) UNIQUE,
#     root_password VARCHAR(250) BINARY,
#     root_email VARCHAR(50) UNIQUE,
#     root_email_verify ENUM('False', 'True') DEFAULT 'False',
#     root_phone BIGINT(10) UNIQUE,
#     root_phone_verify ENUM('False', 'True') DEFAULT 'False'
# );'''
# cursor.execute(query)
# IAMusers
# create table users (user_id, organisation_id, user_name, password)

# organiation
# create table organisation (organisation_id, organisation_name)
# '''
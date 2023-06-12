import pymysql
import bcrypt
from datetime import datetime
import os
from dotenv import load_dotenv
load_dotenv()

conn = pymysql.connect(host = os.getenv('sqlhost'),
                       user = os.getenv('sqluser'),
                       password = os.getenv('sqlpassword'),
                       database= 'beorganised'
                       )
cursor = conn.cursor()

# query = 'create table rootusers (root_id integer primary key auto_increment, root_name varchar(50), password varchar(250) binary,root_email varchar(60) )'
# cursor.execute(query)

name = "root1"
password1 = "root1"
password = bcrypt.hashpw(password1.encode('utf-8'), bcrypt.gensalt())
# query = 'insert into rootusers (root_name, password, root_email) values (%s ,%s, "root1@gmail.com" )'
# cursor.execute(query, (name, password))
# conn.commit()

# cursor.execute('''
#     CREATE TABLE root_user (
#         root_id INT PRIMARY KEY AUTO_INCREMENT,
#         organisation_id INT,
#         root_name VARCHAR(50) UNIQUE,
#         root_password VARCHAR(250) BINARY,
#         root_email VARCHAR(50) UNIQUE,
#         root_email_verify ENUM('False', 'True') DEFAULT 'False',
#         root_phone BIGINT(10) UNIQUE,
#         root_phone_verify ENUM('False', 'True') DEFAULT 'False'
#     )
# ''')

# cursor.execute('insert into root_user (organisation_id, root_name, root_password, root_email, root_phone) values (%s,%s,%s,%s,%s) ', (123456789012, name, password, 'root1@gmail.com', 9898767654))
# conn.commit()

# cursor.execute("select root_password from root_user where root_name = 'root1'")
# name = list(cursor.fetchone())
# print(name)
# answer = bcrypt.checkpw(password1.encode('utf-8'), name[0].encode('utf-8'))
# print(answer)

# cursor.execute('''CREATE TABLE organisation (
#     organisation_id INT,
#     organisation_name VARCHAR(100) UNIQUE,
#     organisation_description VARCHAR(1000),
#     organisation_users INT DEFAULT 0,
#     organisation_created DATE
# );''')

cursor.execute('''
    insert into organisation (organisation_id, organisation_name, organisation_description, organisation_created) 
    values (%s,%s,%s,%s)
''',('2147483647','root1_organisation', 'Hello world no more commands this is to make the new organisation like a schools erp where students and parents can use it properly and maily for the official puposes', 
datetime.utcnow()))
conn.commit()
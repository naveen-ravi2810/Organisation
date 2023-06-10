import pymysql
import bcrypt

conn = pymysql.connect(host = 'database-1.cwljsueoels2.us-east-1.rds.amazonaws.com',
                       user = 'admin',
                       password = '12345678',
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

cursor.execute('insert into root_user (organisation_id, root_name, root_password, root_email, root_phone) values (%s,%s,%s,%s,%s) ', (123456789012, name, password, 'root1@gmail.com', 9898767654))
conn.commit()

# cursor.execute("select root_password from root_user where root_name = 'root1'")
# name = list(cursor.fetchone())
# print(name)
# answer = bcrypt.checkpw(password1.encode('utf-8'), name[0].encode('utf-8'))
# print(answer)
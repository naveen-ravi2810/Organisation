from datetime import timedelta
import os
from dotenv import load_dotenv
load_dotenv()

class Config:
    
    JWT_SECRET_KEY = os.getenv('token_secret_key')
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=3)
from functools import wraps
from flask_jwt_extended import verify_jwt_in_request, get_jwt

def root_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_jwt_in_request()
            claims = get_jwt()
            if claims["root_name"]:
                return fn(*args, **kwargs)
            else:

                return {'msg':"Admins only!"},401

        return decorator

    return wrapper

def organisation_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_jwt_in_request()
            claims = get_jwt()
            if claims["uc_org"]:
                return fn(*args, **kwargs)
            else:

                return {'msg':"Admins only!"},401

        return decorator

    return wrapper
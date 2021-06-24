from operator import rshift
from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os
from flask_cors import CORS

# Init app
app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://fheqbrylgdgtdz:4ff8d24aaca42d1882e92fecd8a518dba318983da6010f9360b8b9ca159508f2@ec2-34-202-54-225.compute-1.amazonaws.com:5432/dec943tmbs3gla'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# Guest Class/Model


class Guest(db.Model):
    __tablename__ = 'guest'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    rsvp = db.Column(db.Boolean, nullable=False)
    invite_code = db.Column(db.String(6), nullable=False)

    def __init__(self, name, rsvp, invite_code):
        self.name = name
        self.rsvp = rsvp
        self.invite_code = invite_code

# Guest Schema


class GuestSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'rsvp', 'invite_code')


# Init schema
guest_schema = GuestSchema()
guests_schema = GuestSchema(many=True)

# Create a Guest


@app.route('/guest', methods=['POST'])
def add_guest():
    name = request.json['name']
    rsvp = request.json['rsvp']
    invite_code = request.json['invite_code']

    new_guest = Guest(name, rsvp, invite_code)

    db.session.add(new_guest)
    db.session.commit()
    return guest_schema.jsonify(new_guest)

# Get All Guests


@app.route('/guests', methods=['GET'])
def get_guests():
    all_guests = Guest.query.all()
    result = guests_schema.dump(all_guests)
    return jsonify(result)


# @app.route('/guest/<id>', methods=['GET'])
# def get_guest(id):
#     guest = Guest.query.get(id)
#     return guest_schema.jsonify(guest)


@app.route('/guest/<code>', methods=['GET'])
def get_guest(code):
    guest = Guest.query.filter_by(invite_code=code).all()
    result = guests_schema.dump(guest)
    if not guest:
        abort(400, "You aren not a guest. Sorry, but you can still buy a gift")
    return jsonify(result)


# @app.route('/guest/<code>', methods=['PATCH'])
# def update_guest(code):
    # guest = Guest.query.get(id)

    # Get all gues attached to the invite code
    # guest = Guest.query.filter_by(invite_code=code).all()
    # result = guests_schema.dump(guest)

    # Check the rsvp status that comes from the frontend to see if it matches what is in the db
    # If they are different, update the db using the status from the frontend

    # guest = Guest.query.get(id)

    # guest_rsvp = request.json['rsvp']

    # name = request.json['name']
    # rsvp = request.json['rsvp']
    # invite_code = request.json['invite_code']

    # guest.name = name
    # guest.rsvp = rsvp
    # guest.invite_code = invite_code
    # db.session.commit()
    # return jsonify(guest_rsvp)

@app.route('/guest/<code>', methods=['PATCH'])
def update_guest(code):
    # Get data from database that has this invite code
    guest = Guest.query.filter_by(invite_code=code).all()
    result = guests_schema.dump(guest)
    # Get the request body that was sent from the frontend
    data = request.json

    # Loop through all of the data from the request body
    temp = []
    for i in range(0, len(result)):
        for person in data:
            # Update data where request id is the same as the database id
            if result[i]['id'] == person['id']:
                guest[i].rsvp = person['rsvp']
                temp.append(person)

    db.session.commit()

    return jsonify(temp)


@app.route('/guest/<id>', methods=['DELETE'])
def delete_guest(id):
    guest = Guest.query.get(id)
    db.session.delete(guest)
    db.session.commit()
    return guest_schema.jsonify(guest)


if __name__ == '__main__':
    app.run(debug=True)

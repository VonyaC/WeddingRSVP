from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# Guest Class/Model


class Guest(db.Model):
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


@app.route('/guest', methods=['GET'])
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
    return guest_schema.jsonify(guest)


@app.route('/guest/<id>', methods=['PATCH'])
def update_guest(id):
    guest = Guest.query.get(id)

    if request.json['name']:
        guest.name = request.json['name']
    if request.json['rsvp']:
        guest.rsvp = request.json['rsvp']
    if request.json['invite_code']:
        guest.invite_code = request.json['invite_code']

    # name = request.json['name']
    # rsvp = request.json['rsvp']
    # invite_code = request.json['invite_code']

    # guest.name = name
    # guest.rsvp = rsvp
    # guest.invite_code = invite_code

    db.session.commit()

    return guest_schema.jsonify(guest)


@app.route('/guest/<id>', methods=['DELETE'])
def delete_guest(id):
    guest = Guest.query.get(id)
    db.session.delete(guest)
    db.session.commit()
    return guest_schema.jsonify(guest)


if __name__ == '__main__':
    app.run(debug=True)

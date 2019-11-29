var BaseModel = require('./BaseModel');

class SpaceModel extends BaseModel {

    constructor() {
        super()
        this.attributes = {
            id: { 'type': 'number', 'required': false, 'value': 0 },
            space_name: { 'type': 'text', 'required': true, 'value': '', 'error': 'Space Name is Required' },
            description: { 'type': 'text', 'required': false, 'value': '', 'error': 'Description is Required!' },
            city: { 'type': 'text', 'required': true, 'value': '', 'error': 'City is Required!' },
            lat_long: { 'type': 'text', 'required': false, 'value': '', 'error': 'Lat and Long is Required!' },
            price: { 'type': 'text', 'required': true, 'value': '', 'error': 'Price is required' },
            image_url: { 'type': 'text', 'required': false, 'value': '', 'error': 'Please Upload image' },
            gallery: { 'type': 'text', 'required': false, 'value': '' },
            space_status: { 'type': 'password', 'required': true, 'value': '', 'error': 'Password is Required!' },
            user_id: { 'type': 'number', 'required': true, 'value': '', 'error': 'Please input Current user ID' },
            space_type: { 'type': 'text', 'required': true, 'value': '', 'error': 'Space type is required' },
            floor_space: { 'type': 'text', 'required': false, 'value': '0.00' },
            no_of_balconies: { 'type': 'number', 'required': false, 'value': '' },
            balconies_space: { 'type': 'text', 'required': false, 'value': '' },
            no_of_bedrooms: { 'type': 'number', 'required': false, 'value': '' },
            no_of_bathrooms: { 'type': 'number', 'required': false, 'value': 0 },
            no_of_garages: { 'type': 'number', 'required': false, 'value': 0 },
            no_of_parkings: { 'type': 'number', 'required': false, 'value': 0 },
            pets_allowed: { 'type': 'text', 'required': false, 'value': 0 },
            pool: { 'type': 'text', 'required': false, 'value': 0 },
            // updated_at: { 'type': 'Date', 'required': false, 'value': '' },
        }
        this._table = "spaces"
    }

    add_space(data, callback) {
        this.setAttributes(data);
        this.save(callback)
    }

    findAll(callback) {
        var query = "Select * from " + this._table;
        this.find(query, function(err, result) {
            if(result && result.length == 0) {
                callback({ 'message': "No Space is available" }, false);
            } else {
                callback(false, result);
            }
        });
    }
    
    findById(spaceId, callback) {
        var query = "Select * from " + this._table + " where id = '"+ spaceId +"'";
        this.find(query, function(err, result) {
            if(result && result.length == 0) {
                callback({ 'message': `Space ${spaceId} doesn't exist` }, false);
            } else {
                callback(false, result[0]);
            }
        });
    }

    mySpaces(userId, callback) {
        var query = `SELECT * FROM ${this._table} WHERE user_id = ${userId}`;
        this.find(query, function(err, result) {
            if((result && result.length === 0) || result === undefined) {
                callback({ 'message': `Spaces not found` }, false);
            } else {
                callback(false, result);
            }
        });
    }

    mySpaceById(data, callback) {
        var query = `SELECT * FROM ${this._table} WHERE user_id = ${data.userId} AND id = ${data.spaceId}`;
        this.find(query, function(err, result) {
            if((result && result.length === 0) || result === undefined) {
                callback({ 'message': `Space doesn't exist` }, false);
            } else {
                callback(false, result[0]);
            }
        });
    }

    updateSpaceViews(data, callback) {
        var query = `UPDATE ${this._table} SET views = ${ eval(data.views + 1) } WHERE id = ${data.spaceId} `;
        this.find(query, function(err, result) {
            if(result && result.length == 0) {
                callback({ message: `Space not found with id: ${spaceId}` }, false);
            } else {
                callback(false, result);
            }
        });
    }

}

module.exports = new SpaceModel()
var BaseModel = require('./BaseModel');

class SpaceModel extends BaseModel {

    constructor() {
        super()
        this.attributes = {
            id: { 'type': 'number', 'required': false, 'value': 0},
            space_name: { 'type': 'text', 'required': true, 'value': '', 'error': 'Space Name is Required' },
            description: { 'type': 'text', 'required': false, 'value': '', 'error': 'Description is Required!' },
            city: { 'type': 'text', 'required': true, 'value': '', 'error': 'City is Required!' },
            lat_long: { 'type': 'text', 'required': true, 'value': '', 'error': 'Lat and Long is Required!' },
            image_url: { 'type': 'text', 'required': false, 'value': '', 'error': 'Please Upload image' },
            gallery: { 'type': 'text', 'required': false, 'value': '' },
            space_status: { 'type': 'password', 'required': true, 'value': '', 'error': 'Password is Required!' },
            user_id: { 'type': 'number', 'required': true, 'value': '', 'error': 'Please input Current user ID' },
            space_type: { 'type': 'text', 'required': true, 'value': '', 'error': 'Space type is required' },
            floor_space: { 'type': 'text', 'required': false, 'value': '' },
            no_of_balconies: { 'type': 'number', 'required': false, 'value': '' },
            balconies_space: { 'type': 'text', 'required': false, 'value': '' },
            no_of_bedrooms: { 'type': 'number', 'required': false, 'value': '' },
            no_of_bathrooms: { 'type': 'number', 'required': false, 'value': 0 },
            no_of_garages: { 'type': 'number', 'required': false, 'value': 0 },
            no_of_parkings: { 'type': 'number', 'required': false, 'value': 0 },
            pets_allowed: { 'type': 'text', 'required': false, 'value': 0 },
            // created_at: { 'type': 'Date', 'required': true, 'value': '', 'error': 'Created Date is required' },
            // updated_at: { 'type': 'Date', 'required': true, 'value': '', 'error': 'Updated Date is required' },
        }
        this._table = "spaces"
    }

    add_space(data, callback) {
        this.setAttributes(data);
        this.save(callback)
    }

    checkUserExists(username, callback) {
        console.log('callback', callback);
        var query = "Select * from " + this._table + " where email = '"+ username +"'";
        this.find(query, function(err, result) {
            if(!err && result && typeof result[0] != 'undefined') {
                callback({ 'username': "Username already Exists!" }, false);
            } else {
                callback(false, true);
            }
        });
    }
}

module.exports = new SpaceModel()
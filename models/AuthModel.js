var BaseModel = require('./BaseModel');

class AuthModel extends BaseModel {

    constructor() {
        super()
        this.attributes = {
            id: { 'type': 'number', 'required': false, 'value': 0 },
            email: { 'type': 'text', 'required': true, 'value': '', 'error': 'Please enter email' },
            password: { 'type': 'text', 'required': true, 'value': '', 'error': 'Please enter password' },
        }
        this._table = "users"
    }
    
    login(data, callback) {
        var query = `SELECT id, firstname, lastname, email, phone FROM ${this._table} WHERE email = '${data.email}' AND password = '${data.password}'`;
        this.find(query, function(err, result) {
            if(result && result.length == 0) {
                callback({ 'result': `User does not exist` }, false);
            } else {
                callback(false, result[0]);
            }
        });
    }

}

module.exports = new AuthModel()
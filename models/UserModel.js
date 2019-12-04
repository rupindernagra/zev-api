var BaseModel = require('./BaseModel');

class UserModel extends BaseModel {

    constructor() {
        super()
        this.attributes = {}
        this._table = "users"
    }
    
    getAllUsers(callback) {
        var query = `SELECT id, firstname, lastname, image, email, status, role, phone, brokerage, created_at, updated_at FROM ${this._table}`;
        this.find(query, function(err, result) {
            if(result && result.length == 0) {
                callback({ 'message': "Users not found" }, false);
            } else {
                callback(false, result);
            }
        });
    }

    getUserData(userId, callback) {
        var query = `SELECT id, firstname, lastname, image, email, status, role, phone, brokerage, created_at, updated_at FROM ${this._table} WHERE id = ${userId}`;
        this.find(query, function(err, result) {
            if(result && result.length == 0) {
                callback({ message: `User id: ${userId} does not exist` }, false);
            } else {
                callback(false, result[0]);
            }
        });
    }

    updateAvatar(data, callback) {
        var query = `UPDATE ${this._table} SET image = '${data.fileName}' WHERE id = ${data.userId}`;
        this.find(query, function(err, result) {
            if(result && result.length == 0) {
                callback({ message: `User id: ${data.userId} does not exist` }, false);
            } else {
                callback(false, result);
            }
        });
    }

}

module.exports = new UserModel()
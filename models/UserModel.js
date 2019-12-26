var BaseModel = require('./BaseModel');

class UserModel extends BaseModel {

    constructor() {
        super()
        this.attributes = {}
        this._table = "users"
    }

    getAllUsers(callback) {
        var query = `SELECT id, firstname, lastname, image, email, status, role, phone, brokerage, created_at, updated_at FROM ${this._table}`;
        this.find(query, function (err, result) {
            if (result && result.length == 0) {
                callback({ 'message': "Users not found" }, false);
            } else {
                callback(false, result);
            }
        });
    }

    getUserInfo(userId, callback) {
        var query = `SELECT id, firstname, lastname, image, email, role, phone, brokerage, created_at, updated_at FROM ${this._table} WHERE id = ${userId}`;
        this.find(query, function (err, result) {
            if (result && result.length == 0) {
                callback({ message: `User id: ${userId} does not exist` }, false);
            } else {
                callback(false, result[0]);
            }
        });
    }

    getUserProfile(userId, callback) {
        var query = `SELECT id, firstname, lastname, image, email, role, phone, brokerage, created_at, updated_at FROM ${this._table} WHERE id = ${userId}`;
        this.find(query, function (err, result) {
            if (result && result.length == 0) {
                callback({ message: `User id: ${userId} does not exist` }, false);
            } else {
                callback(false, result[0]);
            }
        });
    }

    updateAvatar(data, callback) {
        var query = `UPDATE ${this._table} SET image = '${data.fileName}' WHERE id = ${data.userId}`;
        this.find(query, function (err, result) {
            if (result && result.length == 0) {
                callback({ message: `User id: ${data.userId} does not exist` }, false);
            } else {
                callback(false, result);
            }
        });
    }

    updateUserProfile(data, callback) {
        const { firstname, lastname, phone } = data.payload;
        var query = `UPDATE ${this._table} SET firstname = '${firstname}', lastname = '${lastname}', phone = '${phone}' WHERE id = ${data.userId}`;
        this.find(query, function (err, result) {
            if (result && result.length == 0) {
                callback({ message: `User id: ${data.userId} does not exist` }, false);
            } else {
                callback(false, result);
            }
        });
    }

    updatePassword(data, callback) {
        const { oldPassword, newPassword } = data.payload;
        var query = `UPDATE ${this._table} SET password = '${newPassword}' WHERE id = ${data.userId} AND password = '${oldPassword}'`;
        this.find(query, function (err, result) {
            if (typeof result === 'undefined') {
                callback({ message: `Sorry! error in API` }, false);
            } else {
                if (result && result.changedRows === 0) {
                    callback({ message: `Password is incorrect` }, false);
                } else {
                    callback(false, result);
                }
            }
        });
    }

}

module.exports = new UserModel()
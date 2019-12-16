var BaseModel = require('./BaseModel');

class ApplicationsModel extends BaseModel {

    constructor() {
        super()
        this.attributes = {
            id: { 'type': 'number', 'required': false, 'value': 0 },
            fullname: { 'type': 'text', 'required': true, 'value': '', 'error': 'Full Name is Required' },
            space_id: { 'type': 'number', 'required': true, 'value': 0, 'error': 'Space Id is required' },
            email: { 'type': 'email', 'required': true, 'value': '', 'error': 'Email is Required!' },
            phone: { 'type': 'phone', 'required': false, 'value': '' },
            message: { 'type': 'text', 'required': false, 'value': '' },
            reports: { 'type': 'text', 'required': false, 'value': '' }
        };
        this._table = "applications";        
    }

    saveApplication(data, callback) {
        this.setAttributes(data);
        this.save(callback)
    }

    getApplicants(userId, callback) {
        var query = `SELECT A.*, S.* FROM ${this._table} A INNER JOIN ${this.Spaces} S ON A.space_id = S.id WHERE S.user_id = ${userId} ORDER BY A.id DESC`;
        this.find(query, function(err, result) {
            if((result && result.length === 0) || result === undefined) {
                callback({ message: `No Applicants found` }, false);
            } else {
                callback(false, result);
            }
        });
    }

    getApplicantBySpaceId(data, callback) {
        var query = `SELECT A.*, S.* FROM ${this._table} A INNER JOIN ${this.Spaces} S ON A.space_id = S.id WHERE S.user_id = ${data.userId} AND S.id = ${data.spaceId} ORDER BY A.id DESC`;
        this.find(query, function(err, result) {
            if((result && result.length === 0) || result === undefined) {
                callback({ message: `Application not found with space id: ${data.spaceId}` }, false);
            } else {
                callback(false, result);
            }
        });
    }

    get Spaces() {
        if(typeof this.spaces === 'undefined') {
            this.spaces = require('./SpaceModel')._table;        
        }
        return this.spaces
    }

}

module.exports = new ApplicationsModel()
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
            reports: { 'type': 'text', 'required': false, 'value': '' },
            plaid_item_id: { 'type': 'text', 'required': true, 'value': '', 'error': 'Item id is required' },
            plaid_access_token: { 'type': 'text', 'required': true, 'value': '', 'error': 'Access token is required' },
            stripe_payment_id: { 'type': 'text', 'required': true, 'value': '', 'error': 'Stripe payment id is required' },
            amount: { 'type': 'text', 'required': true, 'value': '', 'error': 'Amount is requires' },
            customer_id: { 'type': 'text', 'required': true, 'value': '', 'error': 'Austomer id is required' },
            receipt_url: { 'type': 'text', 'required': true, 'value': '', 'error': 'Receipt url is required' },
            routing_number: { 'type': 'number', 'required': true, 'value': '', 'error': 'Routing number is required' }
        };
        this._table = "applications";
    }

    saveApplication(data, callback) {
        this.setAttributes(data);
        this.save(callback)
    }

    getApplicants(userId, callback) {
        var query = `SELECT A.*, S.space_name, S.description, S.city, S.lat_long, S.user_id, S.space_status, S.space_type FROM ${this._table} A INNER JOIN ${this.Spaces} S ON A.space_id = S.id WHERE S.user_id = ${userId} ORDER BY A.id DESC`;
        this.find(query, function(err, result) {
            if((result && result.length === 0) || result === undefined) {
                callback({ message: `No Applicants found` }, false);
            } else {
                callback(false, result);
            }
        });
    }

    getApplicantById(data, callback) {
        var query = `SELECT A.*, S.space_name, S.description, S.city, S.lat_long, S.user_id, S.space_status, S.space_type FROM ${this._table} A INNER JOIN ${this.Spaces} S ON A.space_id = S.id WHERE S.user_id = ${data.userId} AND A.id = ${data.applId}`;
        this.find(query, function(err, result) {
            if((result && result.length === 0) || result === undefined) {
                callback({ 'message': `Applicant doesn't exist` }, false);
            } else {
                callback(false, result[0]);
            }
        });
    }

    getApplicantBySpaceId(data, callback) {
        var query = `SELECT A.*, S.space_name, S.description, S.city, S.lat_long, S.user_id, S.space_status, S.space_type FROM ${this._table} A INNER JOIN ${this.Spaces} S ON A.space_id = S.id WHERE S.user_id = ${data.userId} AND S.id = ${data.spaceId} ORDER BY A.id DESC`;
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
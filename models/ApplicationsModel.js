var BaseModel = require('./BaseModel');

class ApplicationsModel extends BaseModel {

    constructor() {
        super()
        this.attributes = {
            id: { 'type': 'number', 'required': false, 'value': 0 },
            firstname: { 'type': 'text', 'required': true, 'value': '', 'error': 'First Name is Required' },
            lastname: { 'type': 'text', 'required': false, 'value': '' },
            space_id: { 'type': 'number', 'required': true, 'value': 0, 'error': 'Space Id is required' },
            email: { 'type': 'email', 'required': true, 'value': '', 'error': 'Email is Required!' },
            phone: { 'type': 'phone', 'required': false, 'value': '' },
            message: { 'type': 'text', 'required': false, 'value': '' },
            reports: { 'type': 'text', 'required': false, 'value': '' }
        }
        this._table = "applications"
    }

    saveApplication(data, callback) {
        this.setAttributes(data);
        this.save(callback)
    }

}

module.exports = new ApplicationsModel()
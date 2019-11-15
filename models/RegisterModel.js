var BaseModel = require('./BaseModel');

class RegisterModel extends BaseModel {

    constructor() {        
        super()
        this.attributes = {
            id: { 'type': 'number', 'required': false, 'value': 0},
            firstname: { 'type': 'text', 'required': true, 'value': '', 'error': 'First Name is Required' },
            email: { 'type': 'email', 'required': true, 'value': '', 'error': 'Email is Required!' },
            lastname: { 'type': 'text', 'required': true, 'value': '', 'error': 'Last Name is Required!' },
            role: { 'type': 'text', 'required': true, 'value': '', 'error': 'Role is Required!' },
            phone: { 'type': 'phone', 'required': true, 'value': '', 'error': 'Phone is Required!' },
            brokerage: { 'type': 'number', 'required': true, 'value': '', 'error': 'Enter Brokerage Value!' },
            password: { 'type': 'password', 'required': true, 'value': '', 'error': 'Password is Required!' }
        }
        this._table = "users"        
    }

    register(data, callback) {        
         this.setAttributes(data) 
         this.save(callback)
    }

    checkUserExists(username, callback){
        var query = "Select * from " + this._table + " where email = '"+ username +"'";
        this.find(query, function(err, result){ 
            if(!err && result && typeof result[0] != 'undefined'){
                callback({ 'username': "Username already Exists!" }, false);
            }else{
                callback(false, true);
            }
        }); 
    }
}

module.exports = new RegisterModel()
var db = require('../db');
var MysqlQuery = require('../core/MysqlQuery')

class BaseModel {

    constructor() {
        this.attributes = {}
        this.errors = {} 
        this.mysqlQuery = null       
    }

    save(callback) {
        if (!this.validate()) {
            callback(this.getError(), false);
        } else {
            this.execute(this.insertQuery(), callback); 
        }
    }    
     
    delete() {

    }

    update() {

    }

    execute(query, callback) {                      
        db.query(query, callback)
    }

    find(query, callback) {                      
        db.query(query, callback)
    }

    setAttributes(attr) {
        for (var l in attr) {
            if (typeof this.attributes[l] != 'undefined') {
                this.attributes[l].value = attr[l]
            }
        }
    }
    

    validate() {
        this.errors = {}
        for (var l in this.attributes) {
            if (this.attributes[l].required) {
                if (this.attributes[l].type == 'text' && this.attributes[l].value == '') {
                    this.errors[l] = this.attributes[l].error
                }
                if (this.attributes[l].type == 'phone' && this.attributes[l].value == '') {
                    this.errors[l] = this.attributes[l].error
                }
                if (this.attributes[l].type == 'number' && this.attributes[l].value == '') {
                    this.errors[l] = this.attributes[l].error
                }
                if (this.attributes[l].type == 'password' && this.attributes[l].value == '') {
                    this.errors[l] = this.attributes[l].error
                }
                if (this.attributes[l].type == 'email' && this.attributes[l].value == '') {
                    this.errors[l] = this.attributes[l].error
                }
            }
        }
        if (Object.keys(this.errors).length > 0) return false;
        return true
    }

    getError() {
        return this.errors
    }

    get query(){        
        if(this.mysqlQuery == null){
            this.mysqlQuery = new MysqlQuery(this._table)            
        }
        return this.mysqlQuery
    }

    insertQuery(){
        return this.query.insertQuery(this.attributes);
    }

}

module.exports = BaseModel
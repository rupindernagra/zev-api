var BaseModel = require('./BaseModel');

class SearchModel extends BaseModel {

    constructor() {
        super()        
        this.attributes = {};
    }

    searchSpaces(data, callback) {
        var query = `SELECT S.*, (SELECT COUNT(A.space_id) FROM ${this.Applications} A WHERE A.space_id = S.id ) AS applicants FROM ${this.Spaces} S WHERE S.user_id = ${data.userId} AND S.space_name LIKE '%${data.term}%'`;
        this.find(query, function(err, result) {
            if((result && result.length === 0) || result === undefined) {
                callback({ 'message': `Search for spaces do not match` }, false);
            } else {
                callback(false, result);
            }
        });
    }

    get Applications() {
        if(typeof this.applications === 'undefined') {
            this.applications = require('./ApplicationsModel')._table
        }
        return this.applications
    }
    
    get Spaces() {
        if(typeof this.spaces === 'undefined') {
            this.spaces = require('./SpaceModel')._table
        }
        return this.spaces
    }
}

module.exports = new SearchModel();
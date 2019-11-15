
class MysqlQuery{

    constructor(tableName){
        this._table = tableName
        this._select = "select"
        this._selectColumn = " * "
        this._insert = ""
        this._where = ""
    }

    select(columns){
        this._selectColumn = columns 
    }


    query(){
        return this._select + this._selectColumn + " from " + this._table;
    }

    insertQuery(columns){
        this.insertColumns = ""
        this.insertValues = ""      
        for(var l in columns){
            if(l != "id"){
                this.insertColumns += (this.insertColumns)? "," + l : l
                this.insertValues += (this.insertValues)? ", '" +columns[l].value+"'": "'"+columns[l].value+"'";
            }            
        }
        return "Insert into " + this._table + " (" + this.insertColumns + ") values (" + this.insertValues + ")"
    }



}

module.exports = MysqlQuery
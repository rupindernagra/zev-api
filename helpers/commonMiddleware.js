var config = require('../config');

function commonMiddleware(req, res, next){
    res.sendSuccess = function(data){
        if(req.new_token){
            data.new_token = req.new_token;
        }
        return res.status(200).send(data);
    }
    res.sendError = function(error){
        return res.status(200).send({status:false,error:error});
    }
    next();
}
module.exports = commonMiddleware;
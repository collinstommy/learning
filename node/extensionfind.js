


module.exports = function(dir, ext, callback){

    var fs = require('fs');

    fs.readdir(dir, function(err, list){

        if(err){
            return callback(err);
        }

        var filtered = list.filter(function(item){
            if(item.endsWith("." + ext))
            {
                return true;
            }
        });
        callback(null, filtered);
    });

}

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/water', function(req, res, next) {
    var result={
        "error_msg":null,
        "status":0,
        "data":[
            {
                "city_name":"深圳",
                "city_id":1,
                "type":1,
                "data":[0.9,1.5,2.3,3.5,3.0,3,4,3.0,2.1,4.0,4.5,3.4,3.2]
            },
            {
                "city_name":"深圳",
                "city_id":1,
                "type":2,
                "data":[1,2.3,3.0,4.0,3.5,3.0,4.0,5.5,3.0,4.3,5.0,3.8]
            }
        ]
    };
    res.json(result)
});


module.exports = router;
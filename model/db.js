module.exports={
    select: function* (whereStr, SortStr){
        // 执行sql获取数据
        var json = yield query(whereStr, SortStr);
        //console.log(json);
        var res={
            success: true,
            data: json
        };
        return res;
    },
    update: function* (whereStr, updateStr) {
        var bog = yield update(whereStr, updateStr);
        
       
        return bog;
    },
    insert: function* (data) {
        var bog = yield insert(data);
        console.log(bog);
        return bog;
    },
    delete: function* (whereStr) {
        var bog = yield remove(whereStr);
        console.log(bog);
        return bog;
    },
    save: function* (data) {
        var bog = yield save(data);
        console.log(bog);
        return bog;
    },
  
}


var MongoClient = require('mongodb');
var config = require('../config/config');
var DB_CONN_STR = config.DB_CONN_STR;



var query = function (whereStr, SortStr) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(DB_CONN_STR, function (err, db) {

           
            var collection = db.collection('Em_book');
            //查询数据
            //var whereStr = { "IncreaseID": 1 };
            //var SortStr = { "CTime": -1 };
            collection.find(whereStr).sort(SortStr).toArray(function (err, result) {
                if (err) {
                    console.log('Error:' + err);
                    reject(err);
                }
                  db.close();
                resolve(result);
            })
        });
    })
}

var update = function (whereStr, updateStr) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(DB_CONN_STR, function (err, db) {

            console.log("update");
            var collection = db.collection('Em_book');
            //
            //var whereStr = { "_id": ID };
            //var updateStr = {$inc:{"ClickPP":1}};
            collection.update(whereStr, updateStr, function (err, result) {
                if (err) {
                    console.log('Error:' + err);
                    reject(err);
                } 
                db.close();
                resolve(result);
            })
        });
    })
}

var insert = function (data) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(DB_CONN_STR, function (err, db) {

            console.log("insert");
            var collection = db.collection('Em_book');
            //
            //var whereStr = { "_id": ID };
            //var updateStr = {$inc:{"ClickPP":1}};
            collection.insert(data, function (err, result) {
                if (err) {
                    console.log('Error:' + err);
                    reject(err);
                }
                db.close();
                resolve(result);
            })
        });
    })
}
var remove = function (whereStr) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(DB_CONN_STR, function (err, db) {

            console.log("Remove");
            var collection = db.collection('Em_book');
            //
            //var whereStr = { "_id": ID };
            //var updateStr = {$inc:{"ClickPP":1}};
            collection.remove(whereStr, function (err, result) {
                if (err) {
                    console.log('Error:' + err);
                    reject(err);
                }
                db.close();
                resolve(result);
            })
        });
    })
}

var save = function (data) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(DB_CONN_STR, function (err, db) {

            console.log("Save");
            var collection = db.collection('Em_book');
            //
            //var whereStr = { "_id": ID };
            //var updateStr = {$inc:{"ClickPP":1}};
            collection.save(data, function (err, result) {
                if (err) {
                    console.log('Error:' + err);
                    reject(err);
                }
                db.close();
                resolve(result);
            })
        });
    })
}
var model = require('../model/db');

var ObjectID = require('mongodb').ObjectID;


module.exports = {
    export: function* () {
        var params = this.query;
      
        this.body = '';
    },
    index: function* () {
        yield this.render('test', { layout: false });
    },
    upfile: function* () {
        yield this.render('upfile', { layout: false });
    },
    login: function* () {
        yield this.render('Login', { layout: false });
    },
    list: function* () {
        var params = this.query;
        console.log(params.user);
        if (params.user == undefined) {
            yield this.render('404', { layout: false });
        } else {
            yield this.render('list', { layout: false });
        }
       
    },
    query:function*(){
        var params = this.query;
        var whereStr = { "IncreaseID": "1" };
        var SortStr = { "CTime": -1 };
        var res = yield model.select(whereStr, SortStr);
        this.body=res;
    },
    readfile: function* () {
        var params = this.request.body;
        console.log(params);

        this.body = true;
    },
    update: function* () {
        var params = this.query;
        var whereStr = { "_id": new ObjectID(params.Id) };
        var SortStr = { "CTime": -1 };
        var updateStr = { "$inc": { "ClickPP": 1 } };
       
        var res = yield model.update(whereStr, updateStr);
        
     
        var resclickres = yield model.select(whereStr, SortStr);

        console.log(resclickres);
        
        this.body = resclickres ;
    },
    getlist: function* () {
        var params = this.getlist;
        var whereStr = null;
        var SortStr = { "CTime": -1 };
        var res = yield model.select(whereStr, SortStr);
        this.body = res;
    },

    insert: function* () {
       
        //var res = yield model.insert(data);
        //this.body = res;
    },
    remove: function* () {
        var params = this.query;
        var whereStr = { "_id": new ObjectID(params.Id) };
        var res = yield model.delete(whereStr);
        this.body = res;
    },
    save: function* () {
        var params = this.query;
        console.log(params.data);
        var Em_book = JSON.parse(params.data);
        var IncreaseIDs = Em_book.IncreaseID.toString();
        var data;
        console.log(params.Id);
        if (params.Id == "undefined") {
            data = {
                Name: Em_book.Name,
                WZURL: Em_book.WZURL,
                FMURL: Em_book.FMURL,
                CTime: Em_book.CTime,
                ReadPP: parseInt(Em_book.ReadPP),
                ClickPP: parseInt(Em_book.ClickPP),
                Remarks: Em_book.Remarks,
                IncreaseID: IncreaseIDs

            }
        } else {
            data = {
                _id: new ObjectID(params.Id),
                Name: Em_book.Name,
                WZURL: Em_book.WZURL,
                FMURL: Em_book.FMURL,
                CTime: Em_book.CTime,
                ReadPP: parseInt(Em_book.ReadPP),
                ClickPP: parseInt(Em_book.ClickPP),
                Remarks: Em_book.Remarks,
                IncreaseID: IncreaseIDs

            }
        }
       
        console.log(data);
        var res = yield model.save(data);
        this.body = res;
    },
}
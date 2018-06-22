var controller = require('../controller/index');
module.exports = function(app){
    //首页
    app.get('/', controller.index)
        .get('/query', controller.query)
        .get('/update', controller.update)
        .get('/login', controller.login)
        .get('/list', controller.list)
        .get('/getlist', controller.getlist)
        .get('/insert', controller.insert)
        .get('/remove', controller.remove)
        .get('/save', controller.save)
        .get('/upfile', controller.upfile)
        .post('/actionfile', controller.readfile);
    
};
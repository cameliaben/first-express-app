const userController = require('./controllers/userController');

module.exports = (app) => {
    app.get('/user', userController.userGet);
    app.post('/user', userController.userCreate);

    
}


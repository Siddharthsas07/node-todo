var Todos = require('../models/todoModel');

module.exports = function (app) {
    // api end-point. Express need to know about it to use it
    app.get ('/api/setupTodos', function(req, res) {

        // seed database
        // if need to work with large amount of fake data, one could use Json Generator 
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Get a girlfriend',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn node',
                isDone: false,
                hasAttachment: false
            }
        ];
        
        // checks that can be made are 
        // 1. only run if db is empty
        // 2. get enviroment varieble and based on that run only if it is set to dev. 
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}
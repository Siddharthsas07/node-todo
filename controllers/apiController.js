var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    // bodyParser will help with parsing data from URL
    // it is used for many things including pattern matching
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true}));

    app.get('/api/todos/:uname', function(req, res) {
        Todos.find({username: req.params.uname}, function(err, todos) {
            if (err) throw err;

            // http response
            // just sending string of todos back. Will be in JSON format as mongoDb stores it as documents of JSONs
            res.send(todos);
        });
    });

    app.get('/api/todo/:id', function(req, res) {
        Todos.findById({ _id : req.params.id}, function(err, todo) {
            if (err) throw err;

            res.send(todo);
        })
    });

    app.post('/api/todo', function(req, res) {
        // add or update anything is handled
        if (req.body.id) {
            Todos.findByIdAndUpdate(
                req.body.id, 
                {
                    todo : req.body.todo, 
                    isDone: req.body.isDone,
                    hasAttachment : req.body.hasAttachment
                },
                function(err, todo) {
                    if (err) throw err;
                    res.send('Success');
                }
            );
        } else {
            var newTodo = Todo(
                {
                    username: 'test',
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                }
            );

            newTodo.save(function(err) {
                if (err) throw err;                
                res.send('Success');
            });
        }

    });

    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;                
            res.send('Success');
        })
    });
    
}
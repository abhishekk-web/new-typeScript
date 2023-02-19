"use strict";
exports.__esModule = true;
var express_1 = require("express");
var todos = todo_1.Todo[] = [];
var router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    res.status(200).json({ todos: todos });
});
router.post('/todo', function (req, res, next) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
});
exports["default"] = router;

var ADD_TODO = 'add-todo';

var addTodo = function(text) {
    return {
        type: ADD_TODO,
        text: text
    };
};

exports.ADD_TODO = ADD_TODO;
exports.addTodo = addTodo;


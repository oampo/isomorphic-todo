var actions = require('./actions');

var todoItems = function(state, action) {
    if (state === undefined) {
        return [];
    }

    if (action.type == actions.ADD_TODO) {
        var newState = state.slice(0);
        newState.push({text: action.text});
        return newState;
    }
    else {
        return state;
    }
};

exports.todoItems = todoItems;

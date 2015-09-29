var React = require('react');
var connect = require('react-redux').connect;

var TodoAddBox = require('./todo-add-box');
var TodoList = require('./todo-list');

var actions = require('../actions');

var App = React.createClass({
    onAdd: function(text) {
        this.props.dispatch(actions.addTodo(text));
    },
    render: function() {
        return (
            <div>
                <TodoAddBox onAdd={this.onAdd} />
                <TodoList items={this.props.items} />
            </div>
        );
    }
});

var selector = function(state) {
    return {
        items: state
    }
};

module.exports = connect(selector)(App);

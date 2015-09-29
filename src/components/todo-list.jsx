var React = require('react');
var TodoItem = require('./todo-item');

var TodoList = React.createClass({
    render: function() {
        var items = this.props.items.map(function(item, index) {
            return <li><TodoItem item={item} key={index} /></li>
        });
        return <ul>{items}</ul>;
    }
});

module.exports = TodoList;

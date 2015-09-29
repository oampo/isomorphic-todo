var React = require('react');

var TodoItem = React.createClass({
    render: function() {
        return <span>{this.props.item.text}</span>;
    }
});

module.exports = TodoItem;

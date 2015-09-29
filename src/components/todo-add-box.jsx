var React = require('react');

var TodoAddBox= React.createClass({
    onClick: function(event) {
        event.preventDefault();
        if (this.props.onAdd) {
            var node = React.findDOMNode(this.refs.input);
            var text = node.value.trim();
            this.props.onAdd(text);
        }
    },

    render: function() {
        return (
            <form>
                <input type="text" name="item" ref="input" />
                <button type="submit" onClick={this.onClick}>Add</button>
            </form>
        );
    }
});

module.exports = TodoAddBox;

var React = require('react');
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;

var todoItems = require('./reducers').todoItems;
var App = require('./components/app');

var store = createStore(todoItems);

window.addEventListener('DOMContentLoaded', function() {
    React.render(
        <Provider store={store}>
            {function() {return <App />;}}
        </Provider>, document.getElementById('app')
    );
});

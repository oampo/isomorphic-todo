var express = require('express');
var swig = require('swig');

var React = require('react');
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;

var todoItems = require('./reducers').todoItems;
var App = require('./components/app');

var app = express();

app.use(express.static('build'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

app.get('/', function(req, res) {
    var store = createStore(todoItems, [{text: 'Buy some bread'},
                                        {text: 'Make some lunch'}]);

    var html = React.renderToString(
        <Provider store={store}>
            {function() {return <App />;}}
        </Provider>
    );
    res.render('index', {
        html: html,
        initialState: JSON.stringify(store.getState())
    });
});

app.listen(8080, function() {
    console.log('Listening on localhost:8080');
});


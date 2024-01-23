var App = function App() {
    return React.createElement(
        Template,
        null,
        React.createElement(
            'h1',
            null,
            'Main content'
        )
    );
};

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(App, null));
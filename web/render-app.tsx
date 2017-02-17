"use strict";

const {App} = require("./components");

const React = require("react");
const ReactDOM = require("react-dom");
const {Router, Route, Link, IndexRoute, hashHistory, browserHistory} = require("react-router");
const Home = require("./components/Content/home.jsx");
const Inbox = require("./components/Content/inbox.jsx");
//const ContextWrapper = require("react-context-wrapper");

function renderApp(appProps /*: Object */, appContext /*: Object */) {
    //var destination = document.querySelector("#root");

    //ReactDOM.render(
    //    React.createElement(
    //        ContextWrapper,
    //        {context: appContext},
    //        React.createElement(App, appProps)
    //    ),
    //    document.getElementById("root")
    //);

    //ReactDOM.render(
    //    React.createElement(App, appProps),
    //    document.getElementById("root")
    //);

    ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="inbox" components={Inbox}/>
            </Route>
        </Router>),
        document.getElementById("root")
    );

}

// module.exports = renderApp;
export {
    renderApp
};

//<Route path="/inbox" component={Inbox}/>
//<Route path="/compose" component={Compose}/>
//<Route path="/reply" component={Reply}/>
//    <Route path="/viewmessage" component={ViewMessage}/>
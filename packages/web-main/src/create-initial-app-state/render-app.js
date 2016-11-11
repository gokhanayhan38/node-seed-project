"use strict";
/* @flow */

const {App} = require("web-components");

const React = require("react");
const ReactDOM = require("react-dom");
const ContextWrapper = require("react-context-wrapper");

function renderApp(appProps /*: Object */, appContext /*: Object */) {
    ReactDOM.render(
        React.createElement(
            ContextWrapper,
            {context: appContext},
            React.createElement(App, appProps)
        ),
        document.getElementById("root")
    );
}

module.exports = renderApp;

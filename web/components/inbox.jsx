"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const {Link} = require("react-router");

class MenuItemDashboard extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        //const {myPropsNames, myPropsNamess} = this.props;

        return (
            <div>Inbox</div>
        );
    }

    componentDidMount() {
    }

}

module.exports = MenuItemDashboard;
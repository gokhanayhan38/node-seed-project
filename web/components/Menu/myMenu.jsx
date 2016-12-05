"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const MenuItemDashboard = require("./menuItemDashboard.jsx");
const MenuItemEmail = require("./menuItemEmail.jsx");

class MyMenu extends Component {
    constructor(props, context) {
        super(props, context);
        //this.onSearchBtnClicked = this.onSearchBtnClicked.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <ul id="main-menu" className="gui-controls">
                <MenuItemDashboard/>
                <MenuItemEmail/>
            </ul>
        );
    }

    componentDidMount() {
    }

}

module.exports = MyMenu;
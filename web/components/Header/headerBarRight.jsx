"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const SearchListItem = require("./searchListItem.jsx");
const NotificationListItem = require("./notificationListItem.jsx");
const ShowChartsMenu = require("./showChartsMenu.jsx");
const UserProfileMenu = require("./userProfileMenu.jsx");

class HeaderBarRight extends Component {
    constructor(props, context) {
        super(props, context);
        //this.onSearchBtnClicked = this.onSearchBtnClicked.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <div className="headerbar-right">
                <ul className="header-nav header-nav-options">

                    <SearchListItem/>

                    <NotificationListItem/>

                    <ShowChartsMenu/>

                </ul>

                <UserProfileMenu/>

            </div>
        );
    }

    componentDidMount() {
    }

}

module.exports = HeaderBarRight;

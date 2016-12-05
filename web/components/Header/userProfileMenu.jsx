"use strict";

const React = require("react"),
    {Component, PropTypes} = React;

class UserProfileMenu extends Component {
    constructor(props, context) {
        super(props, context);
        //this.onSearchBtnClicked = this.onSearchBtnClicked.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <ul className="header-nav header-nav-profile">
                <li className="dropdown">

                    <a href="javascript:void(0);" className="dropdown-toggle ink-reaction" data-toggle="dropdown">
                        <img src="../images/avatar1.jpg" alt="" />
								<span className="profile-info">
									Daniel Johnson
									<small>Administrator</small>
								</span>
                    </a>

                    <ul className="dropdown-menu animation-dock">
                        <li className="dropdown-header">Config</li>
                        <li><a href="../../html/pages/profile.html">My profile</a></li>
                        <li><a href="../../html/pages/blog/post.html">My blog <span className="badge style-danger pull-right">16</span></a></li>
                        <li><a href="../../html/pages/calendar.html">My appointments</a></li>
                        <li className="divider"></li>
                        <li><a href="../../html/pages/locked.html"><i className="fa fa-fw fa-lock"></i> Lock</a></li>
                        <li><a href="../../html/pages/login.html"><i className="fa fa-fw fa-power-off text-danger"></i> Logout</a></li>
                    </ul>

                </li>
            </ul>
        );
    }

    componentDidMount() {
    }

}

module.exports = UserProfileMenu;

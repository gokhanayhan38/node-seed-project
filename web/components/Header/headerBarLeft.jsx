"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const {Link} = require("react-router");

class HeaderBarLeft extends Component {
    constructor(props, context) {
        super(props, context);
        //this.onSearchBtnClicked = this.onSearchBtnClicked.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <div className="headerbar-left">
                <ul className="header-nav header-nav-options">
                    <li className="header-nav-brand" >
                        <div className="brand-holder">
                            <Link to="/">
                                <span className="text-lg text-bold text-primary">MATERIAL ADMIN</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <a className="btn btn-icon-toggle menubar-toggle" data-toggle="menubar" >
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

    componentDidMount() {
    }
}

module.exports = HeaderBarLeft;

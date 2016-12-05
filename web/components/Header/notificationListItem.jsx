"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const SearchListItem = require("./searchListItem.jsx");
const HeaderBarLeft = require("./headerBarLeft.jsx");

class NotificationListItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.onDropdownClicked = this.onDropdownClicked.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <li className="dropdown hidden-xs">
                <a href="javascript:void(0);" className="btn btn-icon-toggle btn-default" data-toggle="dropdown" onClick={this.onDropdownClicked}>
                    <i className="fa fa-bell"></i><sup className="badge style-danger">4</sup>
                </a>
                <ul className="dropdown-menu animation-expand">
                    <li className="dropdown-header">Today's messages</li>
                    <li>
                        <a className="alert alert-callout alert-warning" href="javascript:void(0);">
                            <img className="pull-right img-circle dropdown-avatar" src="../../images/avatar2.jpg" alt="" />
                            <strong>Alex Anistor</strong><br/>
                            <small>Testing functionality...</small>
                        </a>
                    </li>
                    <li>
                        <a className="alert alert-callout alert-info" href="javascript:void(0);">
                            <img className="pull-right img-circle dropdown-avatar" src="../../images/avatar3.jpg" alt="" />
                            <strong>Alicia Adell</strong><br/>
                            <small>Reviewing last changes...</small>
                        </a>
                    </li>
                    <li className="dropdown-header">Options</li>
                    <li><a href="../../html/pages/login.html">View all messages <span className="pull-right"><i className="fa fa-arrow-right"></i></span></a></li>
                    <li><a href="../../html/pages/login.html">Mark as read <span className="pull-right"><i className="fa fa-arrow-right"></i></span></a></li>
                </ul>
            </li>
        );
    }

    componentDidMount() {
    }

    onDropdownClicked(e) {
        //TODO bu kısım işe yaramıyomu ne ?
        //$(e.currentTarget).closest('ul').find('li').removeClass('active');
        //$(e.currentTarget).closest('li').addClass('active');
    }
}

module.exports = NotificationListItem;

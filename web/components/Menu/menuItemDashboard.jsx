"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const {Link} = require("react-router");

class MenuItemDashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.onOvertoListItem = this.onOvertoListItem.bind(this);
        //this.goToDashBoardPage = this.goToDashBoardPage.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        //TODO dashboarda giden routeri koy
        return (
            <li className="active" onMouseOver={this.onOvertoListItem} >
                <Link to="/"  >
                    <div className="gui-icon">
                        <i className="md md-home">
                        </i>
                    </div>
                    <span className="title">Dashboard</span>
                </Link>
            </li>
        );
    }

    componentDidMount() {
    }

    //onClick={this.goToDashBoardPage}
    //
    //goToDashBoardPage() {
    //
    //}


    onOvertoListItem() {

        //this.parentsUntil($('#main-menu')).each(function (){
            if ($(this).is('li')) {
                $(this).addClass('active');
                $(this).addClass('expanded');
            }
        //})

    }

}

module.exports = MenuItemDashboard;
"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const ColorfulPanels =  require("./colorfulPanels");

//const propTypes = {
//
//};

class Content extends Component {
    render() {
        const {myPropsNames, myPropsNamess, title} = this.props;

        return (
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">{title}</h1>
                    </div>
                </div>

                <div className="row">
                    <ColorfulPanels panelType={"panel-primary"} title={"New Comments!<"} panelIcon={"fa-comments"} value={26}/>
                    <ColorfulPanels panelType={"panel-green"} title={"New Tasks!"} panelIcon={"fa-tasks"} value={11}/>
                    <ColorfulPanels panelType={"panel-yellow"} title={"New Orders!"} panelIcon={"fa-shopping-cart"} value={23}/>
                    <ColorfulPanels panelType={"panel-red"} title={"Support Tickets!"} panelIcon={"fa-support "} value={1}/>
                </div>

            </div>
        );
    }

    componentDidMount() {
    }
}

module.exports = Content;

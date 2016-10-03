"use strict";

const React = require("react"),
    {Component, PropTypes} = React;

//const propTypes = {
//
//};

class ColorfulPanels extends Component {
    render() {
        const {myPropsNames, myPropsNamess, panelType, title, panelIcon, value} = this.props;

        return (
            <div className="col-lg-3 col-md-6">
                <div className={"panel "+ panelType}>
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-3">
                                <i className={"fa "+panelIcon+" fa-5x"}></i>
                            </div>
                            <div className="col-xs-9 text-right">
                                <div className="huge">{value}</div>
                                <div>{title}</div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div className="panel-footer">
                            <span className="pull-left">View Details</span>
                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                            <div className="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }
}

module.exports = ColorfulPanels;

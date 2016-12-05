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
                <div classNameName={"panel "+ panelType}>
                    <div classNameName="panel-heading">
                        <div classNameName="row">
                            <div classNameName="col-xs-3">
                                <i classNameName={"fa "+panelIcon+" fa-5x"}></i>
                            </div>
                            <div classNameName="col-xs-9 text-right">
                                <div classNameName="huge">{value}</div>
                                <div>{title}</div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div classNameName="panel-footer">
                            <span classNameName="pull-left">View Details</span>
                            <span classNameName="pull-right"><i classNameName="fa fa-arrow-circle-right"></i></span>
                            <div classNameName="clearfix"></div>
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

"use strict";

const React = require("react"),
    {Component, PropTypes} = React;

class ShowChartsMenu extends Component {
    constructor(props, context) {
        super(props, context);
        //this.onSearchBtnClicked = this.onSearchBtnClicked.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <li className="dropdown hidden-xs">
                <a href="javascript:void(0);" className="btn btn-icon-toggle btn-default" data-toggle="dropdown">
                    <i className="fa fa-area-chart"></i>
                </a>
                <ul className="dropdown-menu animation-expand">
                    <li className="dropdown-header">Server load</li>
                    <li className="dropdown-progress">
                        <a href="javascript:void(0);">
                            <div className="dropdown-label">
                                <span className="text-light">Server load <strong>Today</strong></span>
                                <strong className="pull-right">93%</strong>
                            </div>
                            <div className="progress"><div className="progress-bar progress-bar-danger" style={{ width: 93 }}></div></div>
                        </a>
                    </li>
                    <li className="dropdown-progress">
                        <a href="javascript:void(0);">
                            <div className="dropdown-label">
                                <span className="text-light">Server load <strong>Yesterday</strong></span>
                                <strong className="pull-right">30%</strong>
                            </div>
                            <div className="progress"><div className="progress-bar progress-bar-success" style={{ width: 30 }}></div></div>
                        </a>
                    </li>
                    <li className="dropdown-progress">
                        <a href="javascript:void(0);">
                            <div className="dropdown-label">
                                <span className="text-light">Server load <strong>Lastweek</strong></span>
                                <strong className="pull-right">74%</strong>
                            </div>
                            <div className="progress"><div className="progress-bar progress-bar-warning" style={{ width: 74 }}></div></div>
                        </a>
                    </li>
                </ul>
            </li>
        );
    }

    componentDidMount() {
    }

}

module.exports = ShowChartsMenu;

"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const SearchListItem = require("./searchListItem.jsx");
const HeaderBarLeft = require("./headerBarLeft.jsx");
const HeaderBarRight = require("./headerBarRight.jsx");

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        //this.onSearchBtnClicked = this.onSearchBtnClicked.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <header id="header" >
                <div className="headerbar">

                    <HeaderBarLeft/>

                    <HeaderBarRight/>
                </div>
            </header>


        );
    }

    componentDidMount() {
    }

    //onSearchBtnClicked(e) {
    //    e.preventDefault();
    //
    //    var form = $(e.currentTarget).closest('form');
    //    var input = form.find('input');
    //    var keyword = input.val();
    //
    //    if ($.trim(keyword) === '') {
    //        // When there is no keyword, just open the bar
    //        form.addClass('expanded');
    //        input.focus();
    //    }
    //    else {
    //        // When there is a keyword, submit the keyword
    //        form.addClass('expanded');
    //        form.submit();
    //
    //        // Clear the timer that removes the keyword
    //        clearTimeout(this._clearSearchTimer);
    //    }
    //}
}

module.exports = Header;

//<header id="header" >
//    <div className = "headerbar">
//        <div className="headerbar-left">
//            <ul className="header-nav header-nav-options">
//                <li className="header-nav-brand" >
//                    <div className="brand-holder">
//                        <a href="../../html/dashboards/dashboard.html">
//                            <span className="text-lg text-bold text-primary">MATERIAL ADMIN</span>
//                        </a>
//                    </div>
//                </li>
//                <li>
//                    <a className="btn btn-icon-toggle menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
//                        <i className="fa fa-bars"></i>
//                    </a>
//                </li>
//            </ul>
//        </div>
//        <div className="headerbar-right">
//            <ul className="header-nav header-nav-options">
//                <li>
//                <form className="navbar-search" role="search">
//                    <div className="form-group">
//                        <input type="text" className="form-control" name="headerSearch" placeholder="Enter your keyword"/>
//                    </div>
//                    <button type="submit" className="btn btn-icon-toggle ink-reaction"><i className="fa fa-search"></i></button>
//                </form>
//                </li>
//                <li className="dropdown hidden-xs">
//                    <a href="javascript:void(0);" className="btn btn-icon-toggle btn-default" data-toggle="dropdown">
//                        <i className="fa fa-bell"></i><sup className="badge style-danger">4</sup>
//                    </a>
//                    <ul className="dropdown-menu animation-expand">
//                        <li className="dropdown-header">Today's messages</li>
//                        <li>
//                            <a className="alert alert-callout alert-warning" href="javascript:void(0);">
//                                <img className="pull-right img-circle dropdown-avatar" src="../../assets/img/avatar2.jpg?1404026449" alt="" />
//                                <strong>Alex Anistor</strong><br/>
//                                <small>Testing functionality...</small>
//                            </a>
//                        </li>
//                        <li>
//                            <a className="alert alert-callout alert-info" href="javascript:void(0);">
//                                <img className="pull-right img-circle dropdown-avatar" src="../../assets/img/avatar3.jpg?1404026799" alt="" />
//                                <strong>Alicia Adell</strong><br/>
//                                <small>Reviewing last changes...</small>
//                            </a>
//                        </li>
//                        <li className="dropdown-header">Options</li>
//                        <li><a href="../../html/pages/login.html">View all messages <span className="pull-right"><i className="fa fa-arrow-right"></i></span></a></li>
//                        <li><a href="../../html/pages/login.html">Mark as read <span className="pull-right"><i className="fa fa-arrow-right"></i></span></a></li>
//                    </ul>
//                </li>
//                <li className="dropdown hidden-xs">
//                    <a href="javascript:void(0);" className="btn btn-icon-toggle btn-default" data-toggle="dropdown">
//                        <i className="fa fa-area-chart"></i>
//                    </a>
//                    <ul className="dropdown-menu animation-expand">
//                        <li className="dropdown-header">Server load</li>
//                        <li className="dropdown-progress">
//                            <a href="javascript:void(0);">
//                                <div className="dropdown-label">
//                                    <span className="text-light">Server load <strong>Today</strong></span>
//                                    <strong className="pull-right">93%</strong>
//                                </div>
//                                <div className="progress"><div className="progress-bar progress-bar-danger" style="width: 93%"></div></div>
//                            </a>
//                        </li>
//                        <li className="dropdown-progress">
//                            <a href="javascript:void(0);">
//                                <div className="dropdown-label">
//                                    <span className="text-light">Server load <strong>Yesterday</strong></span>
//                                    <strong className="pull-right">30%</strong>
//                                </div>
//                                <div className="progress"><div className="progress-bar progress-bar-success" style="width: 30%"></div></div>
//                            </a>
//                        </li>
//                        <li className="dropdown-progress">
//                            <a href="javascript:void(0);">
//                                <div className="dropdown-label">
//                                    <span className="text-light">Server load <strong>Lastweek</strong></span>
//                                    <strong className="pull-right">74%</strong>
//                                </div>
//                                <div className="progress"><div className="progress-bar progress-bar-warning" style="width: 74%"></div></div>
//                            </a>
//                        </li>
//                    </ul>
//                </li>
//            </ul>
//            <ul className="header-nav header-nav-profile">
//                <li className="dropdown">
//                    <a href="javascript:void(0);" className="dropdown-toggle ink-reaction" data-toggle="dropdown">
//                        <img src="../../assets/img/avatar1.jpg?1403934956" alt="" />
//                <span className="profile-info">
//                    Daniel Johnson
//                    <small>Administrator</small>
//                </span>
//                    </a>
//                    <ul className="dropdown-menu animation-dock">
//                        <li className="dropdown-header">Config</li>
//                        <li><a href="../../html/pages/profile.html">My profile</a></li>
//                        <li><a href="../../html/pages/blog/post.html">My blog <span className="badge style-danger pull-right">16</span></a></li>
//                        <li><a href="../../html/pages/calendar.html">My appointments</a></li>
//                        <li className="divider"></li>
//                        <li><a href="../../html/pages/locked.html"><i className="fa fa-fw fa-lock"></i> Lock</a></li>
//                        <li><a href="../../html/pages/login.html"><i className="fa fa-fw fa-power-off text-danger"></i> Logout</a></li>
//                    </ul>
//                </li>
//            </ul>
//            <ul className="header-nav header-nav-toggle">
//                <li>
//                    <a className="btn btn-icon-toggle btn-default" href="#offcanvas-search" data-toggle="offcanvas" data-backdrop="false">
//                        <i className="fa fa-ellipsis-v"></i>
//                    </a>
//                </li>
//            </ul>
//        </div>
//    </div>
//</header>






//<div id="page-header">
//     <div className="navbar-header">
//        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
//            <span className="sr-only">Toggle navigation</span>
//            <span className="icon-bar"></span>
//            <span className="icon-bar"></span>
//            <span className="icon-bar"></span>
//        </button>
//        <a className="navbar-brand" href="index.html">SB Admin v2.0</a>
//     </div>
//
//        <ul className="nav navbar-top-links navbar-right">
//            <li className="dropdown">
//                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
//                    <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
//                </a>
//                <ul className="dropdown-menu dropdown-messages">
//                    <li>
//                        <a href="#">
//                            <div>
//                                <strong>John Smith</strong>
//                        <span className="pull-right text-muted">
//                            <em>Yesterday</em>
//                        </span>
//                            </div>
//                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a href="#">
//                            <div>
//                                <strong>John Smith</strong>
//                        <span className="pull-right text-muted">
//                            <em>Yesterday</em>
//                        </span>
//                            </div>
//                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a href="#">
//                            <div>
//                                <strong>John Smith</strong>
//                        <span className="pull-right text-muted">
//                            <em>Yesterday</em>
//                        </span>
//                            </div>
//                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a className="text-center" href="#">
//                            <strong>Read All Messages</strong>
//                            <i className="fa fa-angle-right"></i>
//                        </a>
//                    </li>
//                </ul>
//            </li>
//            <li className="dropdown">
//                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
//                    <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
//                </a>
//                <ul className="dropdown-menu dropdown-tasks">
//                    <li>
//                        <a href="#">
//                            <div>
//                                <p>
//                                    <strong>Task 1</strong>
//                                    <span className="pull-right text-muted">40% Complete</span>
//                                </p>
//                                <div className="progress progress-striped active">
//                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={width20}>
//                                        <span className="sr-only">40% Complete (success)</span>
//                                    </div>
//                                </div>
//                            </div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a href="#">
//                            <div>
//                                <p>
//                                    <strong>Task 2</strong>
//                                    <span className="pull-right text-muted">20% Complete</span>
//                                </p>
//                                <div className="progress progress-striped active">
//                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={width20}>
//                                        <span className="sr-only">20% Complete</span>
//                                    </div>
//                                </div>
//                            </div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a href="#">
//                            <div>
//                                <p>
//                                    <strong>Task 3</strong>
//                                    <span className="pull-right text-muted">60% Complete</span>
//                                </p>
//                                <div className="progress progress-striped active">
//                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={width60}>
//                                        <span className="sr-only">60% Complete (warning)</span>
//                                    </div>
//                                </div>
//                            </div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a href="#">
//                            <div>
//                                <p>
//                                    <strong>Task 4</strong>
//                                    <span className="pull-right text-muted">80% Complete</span>
//                                </p>
//                                <div className="progress progress-striped active">
//                                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={width80}>
//                                        <span className="sr-only">80% Complete (danger)</span>
//                                    </div>
//                                </div>
//                            </div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a className="text-center" href="#">
//                            <strong>See All Tasks</strong>
//                            <i className="fa fa-angle-right"></i>
//                        </a>
//                    </li>
//                </ul>
//            </li>
//            <li className="dropdown">
//                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
//                    <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
//                </a>
//                <ul className="dropdown-menu dropdown-alerts">
//                    <li>
//                        <a href="#">
//                            <div>
//                                <i className="fa fa-comment fa-fw"></i> New Comment
//                                <span className="pull-right text-muted small">4 minutes ago</span>
//                            </div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a href="#">
//                            <div>
//                                <i className="fa fa-twitter fa-fw"></i> 3 New Followers
//                                <span className="pull-right text-muted small">12 minutes ago</span>
//                            </div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a href="#">
//                            <div>
//                                <i className="fa fa-envelope fa-fw"></i> Message Sent
//                                <span className="pull-right text-muted small">4 minutes ago</span>
//                            </div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a href="#">
//                            <div>
//                                <i className="fa fa-tasks fa-fw"></i> New Task
//                                <span className="pull-right text-muted small">4 minutes ago</span>
//                            </div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a href="#">
//                            <div>
//                                <i className="fa fa-upload fa-fw"></i> Server Rebooted
//                                <span className="pull-right text-muted small">4 minutes ago</span>
//                            </div>
//                        </a>
//                    </li>
//                    <li className="divider"></li>
//                    <li>
//                        <a className="text-center" href="#">
//                            <strong>See All Alerts</strong>
//                            <i className="fa fa-angle-right"></i>
//                        </a>
//                    </li>
//                </ul>
//            </li>
//            <li className="dropdown">
//                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
//                    <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
//                </a>
//                <ul className="dropdown-menu dropdown-user">
//                    <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
//                    </li>
//                    <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
//                    </li>
//                    <li className="divider"></li>
//                    <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
//                    </li>
//                </ul>
//            </li>
//        </ul>
//</div>
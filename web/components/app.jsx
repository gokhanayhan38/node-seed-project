"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
//const {Router, Route, Link, IndexRoute, hashHistory, browseHistory} = require("react-router");
// const Header = require("./Header/header.jsx");
//webpack de modulesDirectories de ekledim bu zikkimin yerini bu şekilde de kullanilabiliyor
const Header = require("header.jsx");
const MyMenuBar = require("./Menu/myMenuBar.jsx");
const Home = require("./Content/home.jsx");
//const Sidebar = require("./sidebar.jsx");
//const Content = require("./content.jsx");
//const DataGrid = require("./data-grid.jsx");

//const propTypes = {
//
//};

const margin={
    "margin": '0px'
};

//this.props.children content degiştirmemi saglar.
class App extends Component {
    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <div id="app">
                <Header/>
                <MyMenuBar/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }

    componentDidMount() {
    }
}

module.exports = App;


//<div id="app">
//    <Header/>
//    <MyMenuBar/>
//</div>

//<ReactRouter.Router>
//    <ReactRouter.Route path="/" component={App}>
//
//    </ReactRouter.Route>
//</ReactRouter.Router>,
//    destination

//<div>hello</div>

//<div id="app">
//    <div id="wrapper">
//        <nav className="navbar navbar-default navbar-static-top" role="navigation" margin-bottom="0" style={margin}>
//            <Header/>
//
//            <Sidebar/>
//        </nav>
//
//    </div>
//</div>

//<Content title={"Dashboard"}/>

//<DataGrid/>
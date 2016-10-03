"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const Header = require("./header");
const Sidebar = require("./sidebar");
const Content = require("./content");

//const propTypes = {
//
//};

const margin={
    "margin": '0px'
};

class App extends Component {
    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <div id="app">
                <div id="wrapper">
                    <nav className="navbar navbar-default navbar-static-top" role="navigation" margin-bottom="0" style={margin}>
                        <Header/>

                        <Sidebar/>
                    </nav>

                    <Content title={"Dashboard"}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }
}

module.exports = App;

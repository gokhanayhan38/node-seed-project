"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const MyMenu = require("./myMenu.jsx");

class MyMenuBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.onOverMenuBarChange = this.onOverMenuBarChange.bind(this);
        this.onOutMenuBarChange = this.onOutMenuBarChange.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <div id="menubar" className="menubar-inverse " onMouseOver={this.onOverMenuBarChange} onMouseOut={this.onOutMenuBarChange}>
                <div className="menubar-scroll-panel" >
                    <MyMenu/>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }

    onOverMenuBarChange() {
        //menuyu ac
        if( $('#menubar').data('expanded') !== true){
            $('body').addClass('menubar-visible');
            $('#menubar').data('expanded', true);

            // Triger enter event
            $('#menubar').triggerHandler('enter');
        }
    }

    onOutMenuBarChange() {
        if( $('#menubar').data('expanded') === true){
            //menuyu kapat
            $('body').removeClass('menubar-visible');
            $('#menubar').data('expanded', false);
        }
    }

}

module.exports = MyMenuBar;


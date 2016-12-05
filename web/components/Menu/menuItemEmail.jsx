"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const {Link, IndexLink} = require("react-router");

class MenuItemEmail extends Component {
    constructor(props, context) {
        super(props, context);
        this.onOpenSubMenu = this.onOpenSubMenu.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        //TODO routingleri koy
        return (
            <li id="guiFolder" className="gui-folder" onClick={this.onOpenSubMenu} >
                <a>
                    <div className="gui-icon" ><i className="md md-email" ></i></div>
                    <span className="title">Email</span>
                </a>

                <ul>
                    <li><IndexLink to="/"><span className="title">Home</span></IndexLink></li>
                    <li><Link to="/Inbox"><span className="title">Inbox</span></Link></li>
                </ul>
            </li>
        );
    }

    componentDidMount() {
    }

    onOpenSubMenu() {

        if( !$('#guiFolder').hasClass('expanded')){
            $('#guiFolder').addClass('expanding');
            $('#guiFolder').addClass('expanded');
            $('#guiFolder').removeClass('expanding');

            $('#main-menu ul').removeAttr('style');
        }else{
            $('#guiFolder').removeClass('expanded');
        }
        this._evalMenuScrollbar();

    }

    _evalMenuScrollbar() {
        if (!$.isFunction($.fn.nanoScroller)) {
            return;
        }

        // First calculate the footer height
        var footerHeight = $('#menubar .menubar-foot-panel').outerHeight();
        footerHeight = Math.max(footerHeight, 1);
        $('.menubar-scroll-panel').css({'padding-bottom': footerHeight});


        // Check if there is a menu
        var menu = $('#menubar');
        if (menu.length === 0)
            return;

        // Get scrollbar elements
        var menuScroller = $('.menubar-scroll-panel');
        var parent = menuScroller.parent();

        // Add the scroller wrapper
        if (parent.hasClass('nano-content') === false) {
            menuScroller.wrap('<div class="nano"><div class="nano-content"></div></div>');
        }

        // Set the correct height
        var height = $(window).height() - menu.position().top - menu.find('.nano').position().top;
        var scroller = menuScroller.closest('.nano');
        scroller.css({height: height});

        // Add the nanoscroller
        scroller.nanoScroller({preventPageScrolling: true, iOSNativeScrolling: true});
    };

}

module.exports = MenuItemEmail;
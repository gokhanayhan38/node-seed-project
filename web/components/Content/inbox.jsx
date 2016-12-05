"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const {Link} = require("react-router");

class Inbox extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <div id="base">
                <div id="content">
                    <section>
                        <p>Inbox</p>
                    </section>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }

}

module.exports = Inbox;
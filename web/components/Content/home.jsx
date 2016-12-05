"use strict";

const React = require("react"),
    {Component, PropTypes} = React;
const {Link} = require("react-router");

class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <div id="base">
                <div id="content">
                    <section>
                        <p>asd asd asd as</p>
                    </section>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }

}

module.exports = Home;
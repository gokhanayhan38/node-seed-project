"use strict";

const React = require("react"),
    {Component, PropTypes} = React;

class SearchListItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.onSearchBtnClicked = this.onSearchBtnClicked.bind(this);
        this.onSearchFieldLosesFocus = this.onSearchFieldLosesFocus.bind(this);
    }

    render() {
        const {myPropsNames, myPropsNamess} = this.props;

        return (
            <li>
                <form className="navbar-search" role="search">
                    <div className="form-group" >
                        <input type="text" className="form-control" name="headerSearch" placeholder="Enter your keyword" onBlur={this.onSearchFieldLosesFocus}/>
                    </div>
                    <button type="submit" className="btn btn-icon-toggle ink-reaction" onClick={this.onSearchBtnClicked}  >
                        <i className="fa fa-search">
                        </i>
                    </button>
                </form>
            </li>
        );
    }

    componentDidMount() {
    }

    onSearchBtnClicked(e) {
        e.preventDefault();

        var form = $(e.currentTarget).closest('form');
        var input = form.find('input');
        var keyword = input.val();

        if ($.trim(keyword) === '') {
            // When there is no keyword, just open the bar
            form.addClass('expanded');
            input.focus();
        }
        else {
            // When there is a keyword, submit the keyword
            form.addClass('expanded');
            form.submit();

            // Clear the timer that removes the keyword
            clearTimeout(this._clearSearchTimer);
        }
    }
    //onBlur={this.onSearchFieldLosesFocus}
    onSearchFieldLosesFocus(e){
        e.preventDefault();

        var input = $(e.currentTarget);
        var form = input.closest('form');

        // Collapse the search field
        form.removeClass('expanded');

        // Clear the textfield after 300 seconds (the time it takes to collapse the field)
        clearTimeout(this._clearSearchTimer);
        this._clearSearchTimer = setTimeout(function () {
            input.val('');
        }, 300);
    }
}

module.exports = SearchListItem;

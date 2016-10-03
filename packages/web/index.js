"use strict";

const actionDefs = require("action-defs");
const ActionDispatcher = require("action-dispatcher");
const ActionListener = require("action-listener");
const ActionNames = require("action-names");
const Stores = require("stores");
const componentPropsFactory = require("component-props-factory");
const components = require("components");

const web = {
    actionDefs,
    ActionDispatcher,
    ActionListener,
    ActionNames,
    Stores,
    componentPropsFactory,
    components
};

module.exports = web;

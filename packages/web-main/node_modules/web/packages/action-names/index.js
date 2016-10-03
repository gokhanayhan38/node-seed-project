"use strict";

const keyMirror = require("key-mirror");

const ActionNames = keyMirror({
    VIEW_INIT_REQUESTED: null,

    SITE_TOUR_START_REQUESTED: null,
    SITE_TOUR_END_REQUESTED: null
});

module.exports = ActionNames;

"use strict";

const PropTypes = require("prop-types");
const fetchHelpers = require("@yavuzmester/fetch-helpers");
const wsConstants = require("ws-constants");

const propTypes = {
    key1: PropTypes.string,
    key2: PropTypes.string
};

function getJson(options={} /*: object */) /*: Promise*/ {
    PropTypes.validateWithErrors(propTypes, options, "getJson");

    const {key1, key2} = options;

    //return fetchHelpers.get({
    //    origin: wsConstants.INTERNAL_HTTP_SERVER_ORIGIN,
    //    path: `/data/data-jsons/${key1}.json`,
    //    reload: true,
    //    responseType: "buffer"
    //}).catch(err => {
    //    throw new Error(`getJson - err for key "${key1}": ${err.message}`);
    //});

    return fetchHelpers.get({
        origin: `http://echo.jsontest.com`,
        path: `/${key1}/${key2}`,
        reload: true,
        responseType: "buffer"
    }).catch(err => {
        throw new Error(`getJson - err for key "${key1}/${key2}": ${err.message}`);
    });

    return fetchHelpers.post({
        origin: `http://echo.jsontest.com`,
        path: `/${key1}/${key2}`,
        reload: true,
        responseType: "buffer"
    }).catch(err => {
        throw new Error(`getJson - err for key "${key1}/${key2}": ${err.message}`);
    });
}

module.exports = getJson;

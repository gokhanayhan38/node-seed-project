"use strict";
/* @flow */

const dvServerUrls /*: {[key:string]: string} */ = {
    DATA_HTTP_SERVER_URL: typeof window !== "undefined" ?
        `http://${window.location.hostname}:9001/data` :
        "http://web:9001/data",

    DV_WS_SERVER_URL: typeof window !== "undefined" ?
        `http://${window.location.hostname}:3000` :
        "http://ws:3000"
};

module.exports = dvServerUrls;

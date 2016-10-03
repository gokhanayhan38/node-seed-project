"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contentTypeOverride = require("express-content-type-override");

const getJson = require("get-json");

const app = express();
app.use(contentTypeOverride({contentType: "application/json", charset: "utf-8"}));
app.use(bodyParser.json());
app.use(cors());

app.use('/urunler/*',function (req,res,next) {

    ///urunler url inin altındaki tum url ler icin
    //access key yoksa requesti sonlandırır.
    if(req.query.access_key){
        next();
    }else {
        return res.status(401).send('access key!');
    }

});

main();

function main() {
    exposeEndpoints();
    app.listen(3000);
}

function exposeEndpoints() {

    app.get("/get-json/:key1/:key2", function(httpReq, httpRes) {
        const {key1, key2} = httpReq.params;

        getJson({key1: key1, key2: key2}).then(response => {
            sendResponse(httpRes, response);
        }).catch(err => {
            sendErrorResponse(httpRes, 500, err.message);
        });
    });

    //app.get("/get-json/", function(httpReq, httpRes) {
    //    const emailAddress = httpReq.query.emailAddress;
    //
    //    getJson({key: emailAddress}).then(response => {
    //        sendResponse(httpRes, response);
    //    }).catch(err => {
    //        sendErrorResponse(httpRes, 500, err.message);
    //    });
    //});
    //
    //app.get("/get-json/", function(httpReq, httpRes) {
    //    const body = httpReq.body;
    //
    //    getJson({key: body}).then(response => {
    //        sendResponse(httpRes, response);
    //    }).catch(err => {
    //        sendErrorResponse(httpRes, 500, err.message);
    //    });
    //});

    app.post("/get-json/:key1/:key2", function(httpReq, httpRes) {
        const {key1,key2} = httpReq.params;

        getJson({key1: key1, key2: key2}).then(response => {
            sendResponse(httpRes, response);
        }).catch(err => {
            sendErrorResponse(httpRes, 500, err.message);
        });
    });

}

function sendResponse(httpRes /*: object */, response /*: object */) {
    httpRes.send(response);
}

function sendErrorResponse(httpRes /*: object */, status /*: number */, message /*: string */) {
    httpRes.status(status).send(message);
}

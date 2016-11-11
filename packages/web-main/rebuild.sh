#!/bin/bash

#install
npm install &&

#clean
rm -rf dir-to-http-serve && mkdir dir-to-http-serve &&

#copy
cp index.html dir-to-http-serve &&
cp -r css dir-to-http-serve &&
cp -r js dir-to-http-serve &&
cp -r images dir-to-http-serve &&
cp -r lib dir-to-http-serve &&

#browserify
npm run browserify &&

#copy to dv-http-serve
rm -rf ../dv-httpserve/dir-to-http-serve-dv-web && mkdir ../dv-httpserve/dir-to-http-serve-dv-web &&
cp -r dir-to-http-serve/. ../dv-http-serve/dir-to-http-serve/dv-web &&

true;

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
mkdir dir-to-http-serve/lib/less && cp -r node_modules/less/dist/less.js dir-to-http-serve/lib/less/ &&

#browserify
npm run browserify &&

true;

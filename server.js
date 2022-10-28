/*********************************************************************************
* WEB322 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
of this
* assignment has been copied manually or electronically from any other source (including web sites)
or
* distributed to other students.
*
* Name: Nguyen Duy Hoang Student ID: 108397217 Date: 28 - OCT - 2022
*
* Online (Cyclic) Link: ________________________________________________________
*
********************************************************************************/
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var path = require("path");
var officeData = require("./modules/officeData")
var app = express();
app.use(express.static('public'));

app.get("/storefront", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/storefront.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/storefront.html"));
});
app.get("/newrelease", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/newRelease.html"));
});
app.get("/bestseller", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/bestseller.html"));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, () => { officeData.initialize(); console.log("server listening on port: " + HTTP_PORT) },);
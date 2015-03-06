"use strict";

var nconf = require("nconf"),
    OpenSecretsClient = require("./index");

nconf.use("file", { file: "./config.json" });
nconf.load();

var client = new OpenSecretsClient(nconf.get("apiKey"));

client.candContrib(
        { cid: "N00008051", cycle: 2014, output: "json" }, function(err, res) {
    if (err) { throw err; }
    console.log("########### candContrib ###########");
    console.log(JSON.parse(res.body)["response"]["contributors"]["contributor"]);
});

client.candIndByInd(
        { cid: "N00008051", cycle: 2014, ind: "K02" }, function(err, res) {
    if (err) { throw err; }
    console.log("########### candIndByInd ###########");
    console.log(res.body);
});

client.candIndustry(
        { cid: "N00008051", cycle: 2014, output: "json" }, function(err, res) {
    if (err) { throw err; }
    console.log("########### candIndustry ###########");
    console.log(JSON.parse(res.body)["response"]["industries"]["industry"]);
});

client.candSector(
        { cid: "N00008051", cycle: 2014, output: "json" }, function(err, res) {
    if (err) { throw err; }
    console.log("########### candSector ###########");
    console.log(JSON.parse(res.body)["response"]["sectors"]["sector"]);
});

client.candSummary(
        { cid: "N00008051", cycle: 2014, output: "json" }, function(err, res) {
    if (err) { throw err; }
    console.log("########### candSummary ###########");
    console.log(JSON.parse(res.body)["response"]["summary"]["@attributes"]);
});

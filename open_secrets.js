#!/usr/bin/env node

"use strict";

var OpenSecretsClient = require("./index"),
    program = require("commander");

program
    .option("--cid [string]", "candidate identification")
    .option("--cycle [integer]", "2012 or 2014")
    .option("--ind [string]", "3-character industry code")
    .option("--output [string]", "output format")
    .option("--verbose [boolean]", "display verbose HTTP response")
    .usage("<api_key> <method> [options]")
    .version("0.0.1")
    .parse(process.argv);

// validation
if (typeof(program.args[0]) === "undefined") {
    console.error("Must provide an 'apiKey'");
    process.exit(1);
};

if (typeof(program.args[1]) === "undefined") {
    console.error("Must specify a 'method'");
    process.exit(1);
};

var apiKey = program.args[0],
    client = new OpenSecretsClient(apiKey),
    method = program.args[1],
    options = {};

switch (method) {
    case "candContrib":
    case "candIndustry":
        options.cid = program.cid;
        options.cycle = program.cycle;
        options.output = program.output;
        break;
    case "candIndByInd":
        options.cid = program.cid;
        options.cycle = program.cycle;
        options.ind = program.ind;
        break;
    default:
        console.error("Unsupported method: " + method);
}

client[method](options, function(err, res) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        if (program.verbose) {
            console.log(res);
        } else {
            console.log(res.body);
        }
        process.exit(0);
    }
});

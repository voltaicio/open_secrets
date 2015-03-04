#!/usr/bin/env node

"use strict";

var OpenSecretsClient = require("./index"),
    program = require("commander");

program
    .usage("<api_key> <method> [options]")
    .version("0.0.1")
    .parse(process.argv);

// validation
if (typeof(program.args[0]) === "undefined") {
    console.error("Must provide an 'apiKey'");
    process.exit(1);
};

var apiKey = program.args[0],
    client = new OpenSecretsClient(apiKey);

process.exit(0);

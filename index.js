"use strict";

var querystring = require("querystring"),
    request = require("request");

/**
 * @constructor
 * @param {String} apiKey
 * @return {Null}
 */
var OpenSecrets = module.exports = function(apiKey) {
    if (!apiKey || typeof(apiKey) !== "string") {
        throw new Error("constructor(): first parameter must be a string.");
    }
    this.apiKey = apiKey;
};

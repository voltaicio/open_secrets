"use strict";

var querystring = require("querystring"),
    request = require("request");

/**
 * OpenSecrets API client
 *
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


/**
 * Prepares a request for the 'candContrib' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.cid
 * @param {Number} config.cycle
 * @param {String} config.output
 * @param {Function} callback
 * @return {Null}
 */
OpenSecrets.prototype.candContrib = function(config, callback) {
    return this._makeRequest({
        method: "candContrib",
        params: config,
    }, callback);
};


/**
 * Prepares a request for the 'candIndByInd' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.cid
 * @param {Number} config.cycle
 * @param {String} config.ind
 * @param {Function} callback
 * @return {Null}
 */
OpenSecrets.prototype.candIndByInd = function(config, callback) {
    return this._makeRequest({
        method: "candIndByInd",
        params: config,
    }, callback);
};


/**
 * Sends a HTTP GET request to the OpenSecrets API.
 *
 * @param {Object} config
 * @param {Function} callback
 * @return {Null}
 */
OpenSecrets.prototype._makeRequest = function(config, callback) {
    var cfg = {
        url: "http://www.opensecrets.org/api/?method=" + config.method + "&apikey=" +
            this.apiKey + "&" + querystring.stringify(config.params)
    };

    request.get(cfg, function(err, res, body) {
        if (res && res.statusCode === 200) {
            callback(null, res);
        } else {
            callback(new Error("makeRequest(): " + res.statusCode + " error."));
        }
    });
};

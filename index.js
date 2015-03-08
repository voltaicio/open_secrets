"use strict";

var querystring = require("querystring"),
    request = require("request");

var VALID_OUTPUTS = ["doc", "json", "xml"];

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
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=candContrib|OpenSecrets}
 */
OpenSecrets.prototype.candContrib = function(config, callback) {
    if (!config.cid || typeof(config.cid) !== "string") {
        throw new Error("candContrib(): config.cid attribute must be a string.");
    }
    if (!config.cycle || typeof(config.cycle) !== "number") {
        throw new Error("candContrib(): config.cycle attribute must be a number.");
    }
    if (!config.output || typeof(config.output) !== "string") {
        throw new Error("candContrib(): config.output attribute must be a string.");
    }
    if (VALID_OUTPUTS.indexOf(config.output) === -1) {
        throw new Error(
            "candContrib(): invalid config.output attribute '" + config.output +
            "'; please choose from 'doc', 'json' or 'xml'.");
    }
    if (!callback || typeof(callback) !== "function") {
        throw new Error("candContrib(): callback parameter must be a function.");
    }

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
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=candIndByInd|OpenSecrets}
 */
OpenSecrets.prototype.candIndByInd = function(config, callback) {
    return this._makeRequest({
        method: "candIndByInd",
        params: config,
    }, callback);
};


/**
 * Prepares a request for the 'candIndustry' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.cid
 * @param {Number} config.cycle
 * @param {String} config.output
 * @param {Function} callback
 * @return {Null}
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=candIndustry|OpenSecrets}
 */
OpenSecrets.prototype.candIndustry = function(config, callback) {
    return this._makeRequest({
        method: "candIndustry",
        params: config,
    }, callback);
};


/**
 * Prepares a request for the 'candSector' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.cid
 * @param {Number} config.cycle
 * @param {String} config.output
 * @param {Function} callback
 * @return {Null}
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=candSector|OpenSecrets}
 */
OpenSecrets.prototype.candSector = function(config, callback) {
    return this._makeRequest({
        method: "candSector",
        params: config,
    }, callback);
};


/**
 * Prepares a request for the 'candSummary' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.cid
 * @param {Number} config.cycle
 * @param {String} config.output
 * @param {Function} callback
 * @return {Null}
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=candSummary|OpenSecrets}
 */
OpenSecrets.prototype.candSummary = function(config, callback) {
    return this._makeRequest({
        method: "candSummary",
        params: config,
    }, callback);
};


/**
 * Prepares a request for the 'congCmteIndus' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.cmte
 * @param {Number} config.congno
 * @param {String} config.indus
 * @param {String} config.output
 * @param {Function} callback
 * @return {Null}
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=congCmteIndus|OpenSecrets}
 */
OpenSecrets.prototype.congCmteIndus = function(config, callback) {
    return this._makeRequest({
        method: "congCmteIndus",
        params: config,
    }, callback);
};


/**
 * Prepares a request for the 'getLegislators' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.output
 * @param {String} config.id
 * @param {Function} callback
 * @return {Null}
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=getLegislators|OpenSecrets}
 */
OpenSecrets.prototype.getLegislators = function(config, callback) {
    return this._makeRequest({
        method: "getLegislators",
        params: config,
    }, callback);
};


/**
 * Prepares a request for the 'getOrgs' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.org
 * @param {Function} callback
 * @return {Null}
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=getOrgs|OpenSecrets}
 */
OpenSecrets.prototype.getOrgs = function(config, callback) {
    return this._makeRequest({
        method: "getOrgs",
        params: config,
    }, callback);
};


/**
 * Prepares a request for the 'memPFDprofile' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.cid
 * @param {String} config.output
 * @param {Number} config.year
 * @param {Function} callback
 * @return {Null}
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=memPFDprofile|OpenSecrets}
 */
OpenSecrets.prototype.memPFDprofile = function(config, callback) {
    return this._makeRequest({
        method: "memPFDprofile",
        params: config,
    }, callback);
};


/**
 * Prepares a request for the 'orgSummary' OpenSecrets API endpoint.
 *
 * @param {Object} config
 * @param {String} config.id
 * @param {Function} callback
 * @return {Null}
 * @see {@link https://www.opensecrets.org/api/?output=doc&method=orgSummary|OpenSecrets}
 */
OpenSecrets.prototype.orgSummary = function(config, callback) {
    return this._makeRequest({
        method: "orgSummary",
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

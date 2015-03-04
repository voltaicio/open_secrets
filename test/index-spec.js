var OpenSecretsClient = require("../index"); 

var API_KEY = "0123456789";

describe("constructor", function() {
    it("requires the 'apiKey' parameter", function() {
        expect(function() {
            new OpenSecretsClient();
        }).toThrow(new Error("constructor(): first parameter must be a string."));
    });

    it("expects the 'apiKey' parameter to be a string", function() {
        expect(function() {
            new OpenSecretsClient(0);
        }).toThrow(new Error("constructor(): first parameter must be a string."));
    });

    it("stores the 'apiKey' parameter as an attribute", function() {
        var client = new OpenSecretsClient(API_KEY);
        expect(client.apiKey).toEqual(API_KEY);
    });

    it("is not null", function() {
        var client = new OpenSecretsClient(API_KEY);
        expect(client).not.toBe(null);
    });
});

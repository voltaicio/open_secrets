var OpenSecretsClient = require("../index"),
    request = require("request");

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

describe("candContrib", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "candContrib",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.candContrib(cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("_makeRequest", function() {
    it("calls 'request'", function() {
        var client = new OpenSecretsClient(API_KEY);

        spyOn(request, "get");
        client.candContrib({}, function() {});
        expect(request.get).toHaveBeenCalled();
    });
});

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

describe("candIndByInd", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "candIndByInd",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.candIndByInd(cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("candIndustry", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "candIndustry",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.candIndustry(cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("candSector", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "candSector",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.candSector(cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("candSummary", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "candSummary",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.candSummary(cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("congCmteIndus", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "congCmteIndus",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.congCmteIndus(cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("getLegislators", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "getLegislators",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.getLegislators(cfg.params, callback);
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

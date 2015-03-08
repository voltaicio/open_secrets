var OpenSecretsClient = require("../index"),
    request = require("request");

var API_KEY = "0123456789",
    JSON_STR = "json",
    STRING = "test",
    NUMBER = 11;

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
    var client = new OpenSecretsClient(API_KEY),
        methodName = "candContrib";

    it("requires the 'config' parameter to be an object", function() {
        var cfg = STRING,
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("requires the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("requires the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("requires the 'config.output' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("requires the 'config.output' attribute to be valid", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: STRING },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("requires the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STR },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
                method: methodName,
                params: { cid: STRING, cycle: NUMBER, output: JSON_STR }
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("candIndByInd", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "candIndByInd";

    it("requires the 'config' parameter to be an object", function() {
        var cfg = STRING,
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("requires the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("requires the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING, cylce: STRING },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("requires the 'config.ind' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER, ind: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.ind' must be a string."));
    });

    it("requires the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, ind: STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: methodName,
                params: { cid: STRING, cycle: NUMBER, ind: STRING }
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("candIndustry", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "candIndustry";

    it("requires the 'config' parameter to be an object", function() {
        var cfg = STRING,
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("requires the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("requires the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("requires the 'config.output' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("requires the 'config.output' attribute to be valid", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: STRING },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("requires the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STR },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
                method: methodName,
                params: { cid: STRING, cycle: NUMBER, output: JSON_STR }
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("candSector", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "candSector";

    it("requires the 'config' parameter to be an object", function() {
        var cfg = STRING,
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("requires the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("requires the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("requires the 'config.output' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("requires the 'config.output' attribute to be valid", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: STRING },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("requires the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STR },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
                method: methodName,
                params: { cid: STRING, cycle: NUMBER, output: JSON_STR }
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("candSummary", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "candSummary";

    it("requires the 'config' parameter to be an object", function() {
        var cfg = STRING,
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("requires the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("requires the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("requires the 'config.output' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("requires the 'config.output' attribute to be valid", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: STRING },
            callback = function() {};

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("requires the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STR },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
                method: methodName,
                params: { cid: STRING, cycle: NUMBER, output: JSON_STR }
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, callback);
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

describe("getOrgs", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "getOrgs",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.getOrgs(cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("memPFDprofile", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "memPFDprofile",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.memPFDprofile(cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("orgSummary", function() {
    it("calls '_makeRequest'", function() {
        var client = new OpenSecretsClient(API_KEY),
            cfg = {
                method: "orgSummary",
                params: {}
            },
            callback = function() {};

        spyOn(client, "_makeRequest");
        client.orgSummary(cfg.params, callback);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, callback);
    });
});

describe("_makeRequest", function() {
    it("calls 'request'", function() {
        var client = new OpenSecretsClient(API_KEY);

        spyOn(request, "get");
        client.candContrib(
            { cid: STRING, cycle: NUMBER, output: "json" }, function() {});
        expect(request.get).toHaveBeenCalled();
    });
});

var OpenSecretsClient = require("../index"),
    request = require("request");

var API_KEY = "0123456789",
    CALLBACK = function() {},
    JSON_STRING = "json",
    STRING = "test",
    NUMBER = 11;

describe("constructor", function() {
    it("expects the 'apiKey' parameter to be defined", function() {
        expect(function() {
            new OpenSecretsClient();
        }).toThrow(new Error("constructor(): 'apiKey' must be defined."));
    });

    it("expects the 'apiKey' parameter to be a string", function() {
        expect(function() {
            new OpenSecretsClient(0);
        }).toThrow(new Error("constructor(): 'apiKey' must be a string."));
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

    it("expects the 'config' parameter to be defined", function() {
        expect(function() {
            client[methodName]();
        }).toThrow(new Error(methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.cid' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be defined."));
    });

    it("expects the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("expects the 'config.cycle' attribute to be defined", function() {
        var cfg = { cid: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be defined."));
    });

    it("expects the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING, cycle: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("expects the 'config.output' attribute to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be defined."));
    });

    it("expects the 'config.output' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("expects the 'config.output' attribute to be valid", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STRING };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
            method: methodName,
            params: { cid: STRING, cycle: NUMBER, output: JSON_STRING }
        };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("candIndByInd", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "candIndByInd";

    it("expects the 'config' parameter to be defined", function() {
        expect(function() {
            client[methodName]();
        }).toThrow(new Error(methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.cid' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be defined."));
    });

    it("expects the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("expects the 'config.cycle' attribute to be defined", function() {
        var cfg = { cid: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(methodName + "(): 'config.cycle' must be defined."));
    });

    it("expects the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING, cycle: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("expects the 'config.ind' attribute to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.ind' must be defined."));
    });

    it("expects the 'config.ind' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER, ind: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.ind' must be a string."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER, ind: STRING };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, ind: STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
            method: methodName,
            params: { cid: STRING, cycle: NUMBER, ind: STRING }
        };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("candIndustry", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "candIndustry";

    it("expects the 'config' parameter to be defined", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName]();
        }).toThrow(new Error(
            methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.cid' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be defined."));
    });

    it("expects the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("expects the 'config.cycle' attribute to be defined", function() {
        var cfg = { cid: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be defined."));
    });

    it("expects the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING, cycle: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("expects the 'config.output' attribute to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be defined."));
    });

    it("expects the 'config.output' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("expects the 'config.output' attribute to be valid", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STRING };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
            method: methodName,
            params: { cid: STRING, cycle: NUMBER, output: JSON_STRING }
        };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("candSector", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "candSector";

    it("expects the 'config' parameter to be defined", function() {
        expect(function() {
            client[methodName]();
        }).toThrow(new Error(
            methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.cid' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be defined."));
    });

    it("expects the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("expects the 'config.cycle' attribute to be defined", function() {
        var cfg = { cid: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be defined."));
    });

    it("expects the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING, cycle: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("expects the 'config.output' attribute to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be defined."));
    });

    it("expects the 'config.output' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("expects the 'config.output' attribute to be valid", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STRING };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
            method: methodName,
            params: { cid: STRING, cycle: NUMBER, output: JSON_STRING }
        };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("candSummary", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "candSummary";

    it("expects the 'config' parameter to be defined", function() {
        expect(function() {
            client[methodName]();
        }).toThrow(new Error(
            methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.cid' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be defined."));
    });

    it("expects the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("expects the 'config.cycle' attribute to be defined", function() {
        var cfg = { cid: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be defined."));
    });

    it("expects the 'config.cycle' attribute to be a number", function() {
        var cfg = { cid: STRING, cycle: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cycle' must be a number."));
    });

    it("expects the 'config.output' attribute to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be defined."));
    });

    it("expects the 'config.output' attribute to be a string", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("expects the 'config.output' attribute to be valid", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STRING };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING, cycle: NUMBER, output: JSON_STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
            method: methodName,
            params: { cid: STRING, cycle: NUMBER, output: JSON_STRING }
        };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("congCmteIndus", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "congCmteIndus";

    it("expects the 'config' parameter to be defined", function() {
        expect(function() {
            client[methodName]();
        }).toThrow(new Error(
            methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.cmte' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cmte' must be defined."));
    });

    it("expects the 'config.cmte' attribute to be a string", function() {
        var cfg = { cmte: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cmte' must be a string."));
    });

    it("expects the 'config.congno' attribute to be defined", function() {
        var cfg = { cmte: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.congno' must be defined."));
    });

    it("expects the 'config.congno' attribute to be a number", function() {
        var cfg = { cmte: STRING, congno: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.congno' must be a number."));
    });

    it("expects the 'config.indus' attribute to be defined", function() {
        var cfg = {
            cmte: STRING,
            congno: NUMBER
        };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.indus' must be defined."));
    });

    it("expects the 'config.indus' attribute to be a number", function() {
        var cfg = {
            cmte: STRING,
            congno: NUMBER,
            indus: NUMBER
        };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.indus' must be a string."));
    });

    it("expects the 'config.output' attribute to be defined", function() {
        var cfg = {
                cmte: STRING,
                congno: NUMBER,
                indus: STRING
            };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be defined."));
    });

    it("expects the 'config.output' attribute to be a string", function() {
        var cfg = {
                cmte: STRING,
                congno: NUMBER,
                indus: STRING,
                output: NUMBER
            };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("expects the 'config.output' attribute to be valid", function() {
        var cfg = {
                cmte: STRING,
                congno: NUMBER,
                indus: STRING,
                output: STRING
            };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = {
                cmte: STRING,
                congno: NUMBER,
                indus: STRING,
                output: JSON_STRING
            };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = {
                cmte: STRING,
                congno: NUMBER,
                indus: STRING,
                output: JSON_STRING
            },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
            method: methodName,
            params: {
                cmte: STRING,
                congno: NUMBER,
                indus: STRING,
                output: JSON_STRING
            }
        };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("getLegislators", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "getLegislators";

    it("expects the 'config' parameter to be defined", function() {
        expect(function() {
            client[methodName]();
        }).toThrow(new Error(
            methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.id' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.id' must be defined."));
    });

    it("expects the 'config.id' attribute to be a string", function() {
        var cfg = { id: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.id' must be a string."));
    });

    it("expects the 'config.output' attribute to be defined", function() {
        var cfg = { id: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be defined."));
    });

    it("expects the 'config.output' attribute to be a string", function() {
        var cfg = { id: STRING, output: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.output' must be a string."));
    });

    it("expects the 'config.output' attribute to be valid", function() {
        var cfg = { id: STRING, output: STRING };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): invalid 'config.output' attribute '" + STRING +
            "'; please choose from 'doc', 'json' or 'xml'."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = { id: STRING, output: JSON_STRING };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = { id: STRING, output: JSON_STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
            method: methodName,
            params: { id: STRING, output: JSON_STRING }
        };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("getOrgs", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "getOrgs";

    it("expects the 'config' parameter to be defined", function() {
        expect(function() {
            client[methodName]();
        }).toThrow(new Error(
            methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.org' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.org' must be defined."));
    });

    it("expects the 'config.org' attribute to be a string", function() {
        var cfg = { org: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.org' must be a string."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = { org: STRING };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = { org: STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
                method: methodName,
                params: { org: STRING }
            };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("memPFDprofile", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "memPFDprofile";

    it("expects the 'config' parameter to be defined", function() {
        expect(function() {
            client[methodName]();
        }).toThrow(new Error(
            methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.cid' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be defined."));
    });

    it("expects the 'config.cid' attribute to be a string", function() {
        var cfg = { cid: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.cid' must be a string."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = { cid: STRING };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = { cid: STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
            method: methodName,
            params: { cid: STRING }
        };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("orgSummary", function() {
    var client = new OpenSecretsClient(API_KEY),
        methodName = "orgSummary";

    it("expects the 'config' parameter to be defined", function() {
        expect(function() {
            client[methodName]();
        }).toThrow(new Error(
            methodName + "(): 'config' must be defined."));
    });

    it("expects the 'config' parameter to be an object", function() {
        var cfg = STRING;

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config' must be an object."));
    });

    it("expects the 'config.oid' attribute to be defined", function() {
        expect(function() {
            client[methodName]({}, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.oid' must be defined."));
    });

    it("expects the 'config.oid' attribute to be a string", function() {
        var cfg = { oid: NUMBER };

        expect(function() {
            client[methodName](cfg, CALLBACK);
        }).toThrow(new Error(
            methodName + "(): 'config.oid' must be a string."));
    });

    it("expects the 'callback' parameter to be defined", function() {
        var cfg = { oid: STRING };

        expect(function() {
            client[methodName](cfg);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be defined."));
    });

    it("expects the 'callback' parameter to be a function", function() {
        var cfg = { oid: STRING },
            callback = STRING;

        expect(function() {
            client[methodName](cfg, callback);
        }).toThrow(new Error(
            methodName + "(): 'callback' must be a function."));
    });

    it("calls '_makeRequest'", function() {
        var cfg = {
            method: methodName,
            params: { oid: STRING }
        };

        spyOn(client, "_makeRequest");
        client[methodName](cfg.params, CALLBACK);
        expect(client._makeRequest).toHaveBeenCalledWith(cfg, CALLBACK);
    });
});

describe("_makeRequest", function() {
    it("calls 'request'", function() {
        var client = new OpenSecretsClient(API_KEY);

        spyOn(request, "get");
        client.candContrib(
            { cid: STRING, cycle: NUMBER, output: "json" }, CALLBACK);
        expect(request.get).toHaveBeenCalled();
    });
});

open_secrets
============

A NodeJS toolset for working with the OpenSecrets API.

Overview
--------

This project is largely based upon the work started with [opensecrets](https://github.com/ameensol/opensecrets).
The NodeJS module contained herein implements a different API than ameensol's
module, thus simple pull-requests were deemed inappropriate. Additionally,
this module:

1. Includes a CLI client
2. Includes unit tests
3. Features an expanded list of methods that interact with the OpenSecrets API
4. Does not include any hard-coded API parameters

Setup
-----

Register for an [API key](https://www.opensecrets.org/api/admin/index.php?function=signup),
and then install the package:

    $ npm install open_secrets

Module Usage
------------

Format:

    var client = new OpenSecretsClient(<api_key>);
    client.<method>(<config>, <callback>);

Example:

    var OpenSecretsClient = require("./index");

    var client = new OpenSecretsClient("0123456789"),
        config = {
            cid: "N00008051",
            cycle: 2014,
            output: "json"
        },
        callback = function(err, response) {
            if (err) { throw err; }
            console.log(response);
        };

    client.candContrib(config, callback);

CLI Usage
---------

Format:

    $ ./open_secrets.js <api_key> <method> [params]

Example:

    $ ./open_secrets.js 0123456789 candContrib --cid=N00008051 --cycle=2014 --output=json

Examples
--------

To run the examples, create a config.json file in the module root:

    $ echo '{ "apiKey": "0123456789" }' > config.json

...and then execute (WARNING: use judiciously because the examples submit live requests that count against your API quota):

    $ node examples.js

Testing
-------

The unit tests are written for Jasmine and can be executed with:

    $ npm test

...or if you have jasmine-node installed globally:

    $ jasmine-node test

Contributions
-------------

Contributions are absolutely welcome and should be accompanied by necessary and
passing tests.

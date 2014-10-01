# winston-slack

* * * 

Basic transport that works just like all other winston transports. Sends logged messages to a specified slack chat channel


Winston Transport for Slack chat integration

    $ npm install winston-slack 

Also requires install of winston

    $ npm install winston



## Options:

### `domain` _Required_
sub-domain of the slack instance

    domain: "yourcompany"

### `apiToken` _Required_
token given by the slack integration API

    apiToken: "j7w7tjBMdytjXzEZu9HQooni"

### `channel` _Required_
the channel to talk in

    channel: "#test-channel"


### `username` ["winston-slack"]
name displayed in the chat channel. default "winston-slack"

    username: ErrorBot

### `level` ["info"]
the level of verbosity

    level: "error"


## Example

in javascript:

    var winston = require('winston');
    var wslack = require('winston-slack').Slack;

    winston.add(wslack, {
        domain: "yourcompany",
        apiToken: "j7w7tjBMdytjXzEZu9HQooni",
        channel: "#test-channel",
        username: "ErrorBot",
        level: 'error',
        handleExceptions : true
    });

in coffeescript:

    winston = require 'winston'
    wslack = require('winston-slack').Slack
    
    winston.add wslack,
        domain: "yourcompany"
        apiToken: "j7w7tjBMdytjXzEZu9HQooni"
        channel: "#test-channel"
        username: "ErrorBot"
        level: 'error'
        handleExceptions : true

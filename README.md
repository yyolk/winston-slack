winston-slack
=============

Winston Transport for Slack chat integration

$ npm install winston-slack 

Also requires install of winston
$ npm install winston


Basic transport that works just like all other winston transports. Sends logged messages to a specified slack chat channel

additonal options:
domain: sub-domain of the slack instance 
apiToken: token given by the slack integration API
username: name displayed in the chat channel. default "winston-slack"

<code>

    var winston = require('winston');
    require('winston-slack');
    var slack = new (winston.transports.SlackLogger)({
        domain: "yourcompany",
        apiToken: "j7w7tjBMdytjXzEZu9HQooni",
        channel: "#test-channel",
        username: "winston-slack",
        level: 'error'
    });
</code>

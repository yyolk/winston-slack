winston-slack
=============

Winston Transport for Slack chat integration 


Basic transport that works just like all other winston transports. Sends logged messages to a specified slack chat channel

additonal options:
domain: sub-domain of the slack instance 
apiToken: token given by the slack integration API
username: name displayed in the chat channel. default "winston-slack"

var winston = require('winston');
var slackTrans = require('./lib/winston-slack');

var slack = new (winston.transports.SlackLogger)({
    domain: "tritondigital",
    apiToken: "niBMdytjXzEZuj7w7tj9HQoo",
    channel: "#test-annoying-things",
    username: "winston-slack",
    level: 'error'
});

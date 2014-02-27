/**
 * Created by andy.batchelor on 2/26/14.
 */

var Slack = require('node-slack'),
    util = require('util'),
    winston = require('winston');

var SlackLogger = winston.transports.SlackLogger = function (options) {
    //
    // Set the level from your options
    //
    if(options){
        this.apiToken = options.apiToken;
        this.channel = options.channel;
        this.domain = options.domain;
        this.username = options.username || "winston-slack";
        this.level = options.level || 'info';

        this.slack = new Slack(this.domain, this.apiToken);
    }
    else{
        throw "options cannot be null"
    }

    //
    // Configure your storage backing as you see fit
    //
};

//
// Inherit from `winston.Transport` so you can take advantage
// of the base functionality and `.handleExceptions()`.
//
util.inherits(SlackLogger, winston.Transport);

//
// Name this logger
//
SlackLogger.prototype.name = 'slack';

SlackLogger.prototype.log = function (level, msg, meta, callback) {
    //
    // Store this message and metadata, maybe use some custom logic
    // then callback indicating success.
    //

    this.slack.send({
        text: "[" + level + "] " + msg,
        channel: this.channel,
        username: this.username
    });

    callback(null, true);
};
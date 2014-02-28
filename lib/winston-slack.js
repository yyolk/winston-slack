/**
 * Created by andy.batchelor on 2/26/14.
 */

var nodeSlack = require('node-slack'),
    util = require('util'),
    winston = require('winston');

var Slack = exports.Slack  = function (options) {
    options = options || {};
    if(!options.apiToken || !options.domain){
        throw new Error("options cannot be null");
    }
    else{
        this.apiToken   = options.apiToken;
        this.channel    = options.channel;
        this.domain     = options.domain;
        this.username   = options.username || "winston-slack";
        this.level      = options.level    || 'info';
        this.silent     = options.silent   || false;
        this.raw        = options.raw      || false;
        this.name       = options.name     || 'slack';
        this.customFormatter = options.customFormatter;

        //- Enabled loging of uncaught exceptions
        this.handleExceptions = options.handleExceptions || false

        //- Configure node-slack module
        this.slack = new nodeSlack(this.domain, this.apiToken);
    }
};

//
// Inherit from `winston.Transport` so you can take advantage
// of the base functionality and `.handleExceptions()`.
//
util.inherits(Slack, winston.Transport);

//- Attaches this Transport to the list of available transports
winston.transports.Slack = Slack;


Slack.prototype.log = function (level, msg, meta, callback) {
    //- Use custom formatter for message if set
    var message = this.customFormatter
        ? this.customFormatter(level, msg, meta)
        : { text: "[" + level + "] " + msg,
            channel: this.channel,
            username: this.username
        };
    this.slack.send(message);

    callback(null, true);
};
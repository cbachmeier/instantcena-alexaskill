var Alexa = require('alexa-sdk');
exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(newSessionHandler);
    alexa.execute();
};
var newSessionHandler = {
    'LaunchRequest': function () {
        this.emit(':tell', "<audio src='https://s3.amazonaws.com/johncena17/cena.mp3'/>");
    },
    'Unhandled': function () {
        this.emit(':tell','Say, Alexa there is a marine who needs my help');
    }
};
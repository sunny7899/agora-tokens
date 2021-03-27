//var fs = require('fs');
//var https = require('https');
var http = require('http');
var express = require('express');
var {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')

var PORT = 8080;

// Fill the appID and appCertificate key given by Agora.io
var appID = "b1a776384fe24b58a43030c834b8f7dd";
var appCertificate = "5b4b7878c61740dcb5a35ae72f0fefdd";

// token expire time, hardcode to 3600 seconds = 1 hour
var expirationTimeInSeconds = 3600
var role = RtcRole.PUBLISHER

var app = express();
app.disable('x-powered-by');
app.set('port', PORT);
// app.use(express.favicon());
app.use(app.router);


http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });   // Send the HTTP header, HTTP Status: 200 : OK, Content Type: text/plain

    console.log('got http://127.0.0.1:8081/');

    response.write('hi');

    response.end('Hello World\n');  // Send the response body as "Hello World"

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
// var generateRtcToken = function(req, resp) {
//     var currentTimestamp = Math.floor(Date.now() / 1000)
//     var privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
//     var channelName = req.query.channelName;
//     // use 0 if uid is not specified
//     var uid = req.query.uid || 0
//     if (!channelName) {
//         return resp.status(400).json({ 'error': 'channel name is required' }).send();
//     }


//     var key = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);

//     resp.header("Access-Control-Allow-Origin", "*")
//         //resp.header("Access-Control-Allow-Origin", "http://ip:port")
//     return resp.json({ 'key': key }).send();
// };

// var generateRtmToken = function(req, resp) {
//     var currentTimestamp = Math.floor(Date.now() / 1000)
//     var privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
//     var account = req.query.account;
//     if (!account) {
//         return resp.status(400).json({ 'error': 'account is required' }).send();
//     }

//     var key = RtmTokenBuilder.buildToken(appID, appCertificate, account, RtmRole, privilegeExpiredTs);

//     resp.header("Access-Control-Allow-Origin", "*")
//         //resp.header("Access-Control-Allow-Origin", "http://ip:port")
//     return resp.json({ 'key': key }).send();
// };

// app.get('/rtcToken', generateRtcToken);
// app.get('/rtmToken', generateRtmToken);


// http.createServer(app).listen(app.get('port'), function() {
//     console.log('AgoraSignServer starts at ' + app.get('port'));
// });

//https.createServer(credentials, app).listen(app.get('port') + 1, function() {
//    console.log('AgoraSignServer starts at ' + (app.get('port') + 1));
//});
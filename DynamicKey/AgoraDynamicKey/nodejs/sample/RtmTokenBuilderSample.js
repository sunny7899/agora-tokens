const RtmTokenBuilder = require('../src/RtmTokenBuilder').RtmTokenBuilder;
const RtmRole = require('../src/RtmTokenBuilder').Role;
const Priviledges = require('../src/AccessToken').priviledges;
const appID  = "b1a776384fe24b58a43030c834b8f7dd";
const appCertificate = "5b4b7878c61740dcb5a35ae72f0fefdd";
const account = "1234";

const expirationTimeInSeconds = 3600
const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

const token = RtmTokenBuilder.buildToken(appID, appCertificate, account, RtmRole, privilegeExpiredTs);
console.log("Rtm Token: " + token);

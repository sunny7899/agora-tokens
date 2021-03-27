#! /usr/bin/python
# ! -*- coding: utf-8 -*-

import sys
import os
import time
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from src.RtmTokenBuilder import RtmTokenBuilder,Role_Rtm_User

appID = "b1a776384fe24b58a43030c834b8f7dd"
appCertificate = "5b4b7878c61740dcb5a35ae72f0fefdd"
user = "1234"
expirationTimeInSeconds = 3600
currentTimestamp = int(time.time())
privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

def main():
    token = RtmTokenBuilder.buildToken(appID, appCertificate, user, Role_Rtm_User, privilegeExpiredTs)
    print("Rtm Token: {}".format(token))


if __name__ == "__main__":
    main()

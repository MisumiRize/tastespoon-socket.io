/// <reference path="../node_modules/tastespoon/tastespoon.d.ts" />
/// <reference path="../typings/tsd.d.ts" />

import Context = require("tastespoon/lib/context");
import SocketIOResource = require("./socket_io_resource");
import SocketIO = require("socket.io-client");

class SocketIOContext extends Context {

    result() {
        var url = (<SocketIOResource> this.resource).url;
        var loc = `${url.protocol}//${this.server.address}:${url.port || 80}`;
        return SocketIO(loc);
    }
}

export = SocketIOContext;

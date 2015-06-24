import SocketIOResource = require("./socket_io_resource");
import SocketIOContext = require("./socket_io_context");
import Server = require("tastespoon/lib/server");

var socketIO: (string) => ((Server) => SocketIOContext) = (url) => {
    var resource = new SocketIOResource(url);
    var contextify = (server: Server) => {
        return new SocketIOContext(server, resource);
    };
    contextify["toString"] = () => {
        return resource.toString();
    };
    return contextify;
}

export = socketIO;

import assert = require("power-assert");
import TasteSpoon = require("tastespoon");
import SocketIO = require("../../lib");
require("./spec_helper");

let server = TasteSpoon.server("socket.io");
describe(server, () => {

    let io = SocketIO("http://example.com:8080");
    describe(io, () => {
        it("returns connection", (done) => {
            io(server).result().on("connect", () => {
                done();
            });
        });
    });
});

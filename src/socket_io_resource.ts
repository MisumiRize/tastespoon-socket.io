/// <reference path="../node_modules/tastespoon/tastespoon.d.ts" />

import Resource = require("tastespoon/lib/resource");
import NodeUrl = require("url");

class SocketIOResource extends Resource {

    url: NodeUrl.Url;

    constructor(url: string) {
        super();
        this.url = NodeUrl.parse(url);
    }

    toString(): string {
        return `socket.io '${this.url.href}'`
    }
}

export = SocketIOResource;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Events_1 = require("./Events");
exports.spells = {
    _default: function () { return Events_1.default.registerAll(); },
    // Below: Utility functions only, not required for MCT1 operation.
    registerAll: function () { return Events_1.default.registerAll(); },
    unregisterAll: function () { return Events_1.default.unregisterAll(); },
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_routes_1 = __importDefault(require("./users.routes"));
const pius_routes_1 = __importDefault(require("./pius.routes"));
const routes = (0, express_1.Router)();
routes.use('/users', users_routes_1.default);
routes.use('/pius', pius_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map
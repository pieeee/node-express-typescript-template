"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// UTILS
const app = (0, express_1.default)();
// MIDDLEWARES
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(4000, () => console.log('Server Running on port: ' + 4000));

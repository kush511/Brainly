"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.ContentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const ObjectId = mongoose_1.default.Types.ObjectId;
mongoose_1.default.connect("mongodb+srv://kushkathuria511:Nq3x0PbNmWJR4Vdb@cluster0.jkyiqnr.mongodb.net/brainly-app-database");
const UserSchema = new mongoose_2.Schema({
    username: { type: String, unique: true },
    password: String
});
const ContentSchema = new mongoose_2.Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: "Tags" }],
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "users", required: true }
});
exports.ContentModel = mongoose_1.default.model("content", ContentSchema);
exports.UserModel = mongoose_1.default.model("users", UserSchema);

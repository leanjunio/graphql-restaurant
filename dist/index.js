"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
dotenv_1.default.config({ path: path_1.resolve(__dirname, '../.env') });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const mongoose_1 = require("mongoose");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const DB_URL = (_a = process.env.DATABASE_URL) !== null && _a !== void 0 ? _a : 'mongodb://localhost:27017/restaurant';
mongoose_1.connect(DB_URL, { useNewUrlParser: true });
const server = new apollo_server_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map
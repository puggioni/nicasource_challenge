"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("reflect-metadata");
const db_1 = require("./db");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_1.AppDataSource.initialize();
            console.log('Database connected');
            const app = new app_1.App(3000);
            yield app.listen();
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();

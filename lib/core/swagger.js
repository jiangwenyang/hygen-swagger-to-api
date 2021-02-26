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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const getSwaggerDoc = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield node_fetch_1.default(url);
        if (response.ok) {
            return yield response.json();
        }
        else {
            throw new Error(yield response.text());
        }
    }
    catch (error) {
        console.log(`请求失败：${error}`);
    }
});
getSwaggerDoc('http://36.110.47.222:11703/user/v2/api-docs').then((value) => console.log(value));
//# sourceMappingURL=swagger.js.map
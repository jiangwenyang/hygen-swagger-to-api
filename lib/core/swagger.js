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
const fetch = require('node-fetch');
const getSwaggerDoc = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    if (response.ok) {
        return yield response.json();
    }
    else {
        console.log(response.text());
    }
});
getSwaggerDoc('http://36.110.47.222:11703/user/v2/api-docs').then((value) => console.log(value));

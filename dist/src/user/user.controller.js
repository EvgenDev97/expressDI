var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { BaseController } from "../common/base.controller";
import { HttpError } from "../errors/http.error";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
let UserController = class UserController extends BaseController {
    loggerService;
    constructor(loggerService) {
        super(loggerService);
        this.loggerService = loggerService;
        this.bindRouter([
            { path: "/register", func: this.register, methods: "post" },
            { path: "/login", func: this.login, methods: "post" }
        ]);
    }
    login(req, res, next) {
        this.ok(res, "login");
    }
    register(req, res, next) {
        next(new HttpError(401, "error"));
    }
};
UserController = __decorate([
    injectable(),
    __param(0, inject(TYPES.ILogger)),
    __metadata("design:paramtypes", [Object])
], UserController);
export { UserController };

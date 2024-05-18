var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from "express";
import { injectable } from "inversify";
let BaseController = class BaseController {
    logger;
    _router;
    constructor(logger) {
        this.logger = logger;
        this._router = Router();
    }
    get router() {
        return this._router;
    }
    send(res, code, message) {
        res.type("application/json");
        return res.status(code).json(message);
    }
    ok(res, message) {
        return this.send(res, 200, message);
    }
    created(res) {
        return res.sendStatus(201);
    }
    async bindRouter(routes) {
        for (const route of routes) {
            this.logger.log(`[${route.methods}] ${route.path}`);
            const handler = route.func.bind(this);
            this.router[route.methods](route.path, handler);
        }
    }
};
BaseController = __decorate([
    injectable(),
    __metadata("design:paramtypes", [Object])
], BaseController);
export { BaseController };

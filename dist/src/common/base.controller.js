import { Router } from "express";
export class BaseController {
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
}

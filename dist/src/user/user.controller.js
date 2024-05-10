import { BaseController } from "../common/base.controller";
import { HttpError } from "../errors/http.error";
export class UserController extends BaseController {
    constructor(logger) {
        super(logger);
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
}

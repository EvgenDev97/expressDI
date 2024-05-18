import express, {Express, Router} from "express";
import {Server} from "http"
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./user/user.controller";
import {ExceptionFilter} from "./errors/exception.filter";
import {ILogger} from "./logger/logger.interface";
import {injectable, inject} from "inversify";
import {TYPES} from "./types";
import "reflect-metadata"

@injectable()
export class App {
    // port = process.env.PORT || 3000;
    app:Express;
    server:Server;
    port:number

    constructor(
        @inject(TYPES.ILogger) private logger: ILogger,
        @inject(TYPES.UserController) private userController: UserController,
        @inject(TYPES.ExceptionFilter) private exceptionFilter: ExceptionFilter,

    ) {
        this.app = express()
        this.port = parseInt(process.env.PORT) || 3000
        this.userController = userController;
        this.logger = logger
        this.exceptionFilter = exceptionFilter
    }

    userRouter(){
        this.app.use("/user", this.userController.router)
    }

    useExceptionFilters(){
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
    }

    public async init(){
        this.userRouter()
        this.useExceptionFilters()
        this.server = this.app.listen(this.port)
        this.logger.log(`Server started. port: ${this.port}`)
    }
}


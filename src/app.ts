import express, {Express, Router} from "express";
import {Server} from "http"
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./user/user.controller";
import {ExceptionFilter} from "./errors/exception.filter";
import {ILogger} from "./logger/logger.interface";



export class App {
    // port = process.env.PORT || 3000;
    app:Express;
    server:Server;
    port:number
    logger:LoggerService;
    userController:UserController;
    exceptionFilter:ExceptionFilter;

    constructor(userController:UserController,
                logger:ILogger,
                exceptionFilter:ExceptionFilter ) {
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


import express, {Express, Router} from "express";
import {Server} from "http"
import {Logger, ILogObj} from "tslog"
import {LoggerService} from "./logger/logger.service";

export class App {
    app:Express;
    server:Server;
    port:number;
    logger:LoggerService;
    constructor(userRouter:Router, logger:LoggerService ) {
        this.app = express()
        this.port = 8000
        this.app.use("/user", userRouter )
        this.logger = logger
    }


    public async init(){
        this.server = this.app.listen(this.port)
        this.logger.log(`Server started. port: ${this.port}`)
    }
}


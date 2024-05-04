import {App} from "./app";
import {ExceptionFilter} from "./errors/exception.filter";
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./user/user.controller";
import * as dotenv from "dotenv";



dotenv.config();
async function bootstrap(){
    const logger = new LoggerService()
    const app = new App(
        new UserController(logger),
        logger,
        new ExceptionFilter(logger))
    await app.init()
}

bootstrap().then()
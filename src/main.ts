import {App} from "./app";
import {ExceptionFilter} from "./errors/exception.filter";
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./user/user.controller";
import * as dotenv from "dotenv";
import {Container} from "inversify";
import {ILogger} from "./logger/logger.interface";
import {Logger} from "tslog";
import {TYPES} from "./types";
import {IExceptionFilter} from "./errors/exception.filter.interface";



dotenv.config();

//composition root

    // const logger = new LoggerService()
    // const app = new App(
    //     new UserController(logger),
    //     logger,
    //     new ExceptionFilter(logger)
    // )

    const appContainer = new Container();
    appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
    appContainer.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
    appContainer.bind<UserController>(TYPES.UserController).to(UserController);
    appContainer.bind<App>(TYPES.Application).to(App);

    const app = appContainer.get<App>(TYPES.Application);
    await app.init()

    export {app, appContainer}


import {App} from "./app";
import {router} from "./user/userRouter";
import {LoggerService} from "./logger/logger.service";

async function bootstrap(){
    const app = new App(router, new LoggerService())
    await app.init()
}

bootstrap().then()
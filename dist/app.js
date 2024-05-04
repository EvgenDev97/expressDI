import express from "express";
export class App {
    app;
    server;
    port;
    logger;
    userController;
    exceptionFilter;
    constructor(userController, logger, exceptionFilter) {
        this.app = express();
        this.port = parseInt(process.env.PORT) || 3000;
        this.userController = userController;
        this.logger = logger;
        this.exceptionFilter = exceptionFilter;
    }
    userRouter() {
        this.app.use("/user", this.userController.router);
    }
    useExceptionFilters() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
    }
    async init() {
        this.userRouter();
        this.useExceptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server started. port: ${this.port}`);
    }
}

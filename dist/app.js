import express from "express";
export class App {
    app;
    server;
    port;
    logger;
    constructor(userRouter, logger) {
        this.app = express();
        this.port = 8000;
        this.app.use("/user", userRouter);
        this.logger = logger;
    }
    async init() {
        this.server = this.app.listen(this.port);
        this.logger.log(`Server started. port: ${this.port}`);
    }
}

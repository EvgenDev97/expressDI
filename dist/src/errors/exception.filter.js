import { HttpError } from "./http.error";
export class ExceptionFilter {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    catch(err, req, res, next) {
        if (err instanceof HttpError) {
            this.logger.error(`[${err.context}] Error: ${err.statusCode} : ${err.message}`);
            res.status(err.statusCode).send(`err:${err.message}`);
        }
        else {
            this.logger.error(err.message);
            res.status(500).send(`[${err.message}]`);
        }
    }
}

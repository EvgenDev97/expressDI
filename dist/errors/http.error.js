export class HttpError extends Error {
    statusCode;
    context;
    constructor(statusCode, message, context) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.context = context;
    }
}

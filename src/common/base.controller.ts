import {LoggerService} from "../logger/logger.service";
import {Router} from "express";
import {IController} from "./route.interface";
import {Request, Response} from "express";


export abstract class BaseController {
    private readonly _router: Router;

    constructor (private logger:LoggerService) {
        this._router = Router()
    }

    get router(){
        return this._router
    }

    public send <T>(res:Response, code:number ,message:T){
        res.type("application/json")
        return res.status(code).json(message)
    }

    public ok<T>(res:Response, message:T){
        return this.send<T>(res, 200, message)
    }

    public created(res:Response){
        return res.sendStatus(201)
    }

    protected async bindRouter(routes:IController[]){
        for(const route of routes){
            this.logger.log(`[${route.methods}] ${route.path}`)
            const handler = route.func.bind(this) // without bind this will refer to this as to the express function
            this.router[route.methods](route.path,handler)
        }
    }
}

import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import {IController} from "../common/route.interface";
import {Request,Response, NextFunction} from "express";
import {HttpError} from "../errors/http.error";
import {inject, injectable} from "inversify";
import {ILogger} from "../logger/logger.interface";
import {TYPES} from "../types";
import "reflect-metadata"

@injectable()
export class UserController extends BaseController{
    constructor(@inject(TYPES.ILogger)  private loggerService:ILogger ) {
        super(loggerService);
        this.bindRouter([
            {path:"/register", func:this.register, methods:"post"},
            {path:"/login", func:this.login, methods:"post"}
        ])

    }

   login(req:Request, res:Response,next:NextFunction)    {
       this.ok(res, "login")

   }

   register(req:Request, res:Response,next:NextFunction){
      next(new HttpError(401, "error"))
   }
}
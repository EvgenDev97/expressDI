import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import {IController} from "../common/route.interface";
import {Request,Response, NextFunction} from "express";
import {HttpError} from "../errors/http.error";

export class UserController extends BaseController{
    constructor( logger:LoggerService) {
        super(logger);
        this.bindRouter([
            {path:"/register", func:this.register, methods:"post"},
            {path:"/login", func:this.login, methods:"post"}
        ])

    }

   login(req:Request, res:Response,next:NextFunction) {
       this.ok(res, "login")

   }

   register(req:Request, res:Response,next:NextFunction){
      next(new HttpError(401, "error"))
   }
}
import {NextFunction,Request,Response, Router} from "express";

export interface IController{
    path:string;
    func:(req:Request, res:Response, next:NextFunction)=>void;
    //The Pick utility creates a new type by extracting from Type a set
    // (set) of Keys properties (Keys is a string literal or their union):
    methods:keyof Pick<Router, "get" | "post" | "put" | "delete" | "patch">
}
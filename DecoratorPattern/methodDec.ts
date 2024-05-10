
import {throws} from "node:assert";

interface IUserService{
    users:number;
    getUserInDB():number
}

class UserServiceThree implements IUserService{
    users:number = 1000;

    // @Log()
    @Catch({rethrow:true})
    getUserInDB():number{
        throw new Error("err")
    }
}


function Catch({rethrow}: { rethrow:boolean } = {rethrow:true}) {
    return (
        target:Object,
        propertyKey:string,
        descriptor:TypedPropertyDescriptor<(...args:any[])=>any>
    )=> {
        const method = descriptor.value
        descriptor.value = async (...args:any[]) => {
            try {
                const res = await method?.apply(target, args)
                return res
            }catch(e){
                if(e instanceof Error){
                    console.log(e.message)
                    if(rethrow){
                        throw e
                    }
                }
            }
        }
    }
}

// function Log(){
//     return (target:Object,
//      propertyKey:string | symbol,
//      descriptor:TypedPropertyDescriptor<(...args:any[]) => any>)
//         :TypedPropertyDescriptor<(...args:any[])=> any> | void => {
//     console.log(target) //class
//     console.log(propertyKey) // this is getUserInDB
//     console.log(descriptor) //
//     //value - function
//     // writable - can change property value (true/false)
//     // enumerable - listing properties (for in/of) (true/false) Object.keys()
//     //configurable - delete/change property
//     const oldValue = descriptor.value
//     descriptor.value = ()=>{
//         console.log("no error");
//         oldValue
//     }
// }}


console.log(new UserServiceThree().getUserInDB());
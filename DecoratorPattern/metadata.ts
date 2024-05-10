import "reflect-metadata"


const POSITIVE_METADATA_KEY = Symbol("POSITIVE_METADATA");

interface IUserService{
    getUserInDB():number
}

class ReflectUser implements IUserService{
    private _users:number
    getUserInDB(): number {
        return  this._users
    }
    @Validate()
    setUserInDB(@Positive() num:number):void{
        this._users = num;
    }
}

function Positive(){
    return(
        target:Object,
        propertyKey:string,
        parameterIndex:number,
    )=>{
        console.log(Reflect.getOwnMetadata("design:type", target, propertyKey))
        console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey))
        console.log(Reflect.getOwnMetadata("design:returntype", target, propertyKey))
        let existParams:number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY,target,propertyKey) || []
        existParams.push(parameterIndex)
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey)
        // console.log(target) //{}
        // console.log(propertyKey) //{}setUserInDB
        // console.log(parameterIndex)// 0 - parameter index setUserInDB
    }
}

function Validate(){
    return(
        target:Object,
        propertyKey:string,
        descriptor:TypedPropertyDescriptor<(...args:any[])=>any>
    )=>{
        let method = descriptor.value
        descriptor.value = async (...args:any[]) => {
            let positiveParams:number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY,target,propertyKey)
            if(positiveParams){
                for(let index of positiveParams){
                    if(args[index] < 0){
                        throw  new Error("number must to be more than 0")
                    }
                }
            }
            return method?.apply(args)
        }

    }

}

const ReflectUsers = new ReflectUser()
console.log(ReflectUsers.setUserInDB(10))
console.log(ReflectUsers.setUserInDB(-1))


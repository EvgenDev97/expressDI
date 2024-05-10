interface IUserService {
    getUserInDB():number
}

class UserFive implements IUserService {
    private _users:number;

    @Log()
    set users(num:number){
        this._users=num;
    }
    get users():number {
        return this._users;
    }

    getUserInDB(): number {
        throw new Error('err');
    }
}

function Log(){
    return(
        target:Object,
        propertyKey: string,
        descriptor:PropertyDescriptor
    )=>{
        const set = descriptor.set
        descriptor.set = (...args:any) => {
            console.log(args)
            set?.apply(target, args)
        }
    }
}
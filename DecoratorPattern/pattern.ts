interface IService {
    users:number;
    getUsersInDB():number
}

class Service implements IService {
    users:number = 1000;
    getUsersInDB():number{
        return this.users
    }
}

function nullUser(obj:IService){
    obj.users = 0
    return obj
}

console.log(new Service().getUsersInDB())
console.log(nullUser(new Service()).getUsersInDB())
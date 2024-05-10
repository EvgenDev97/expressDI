interface IService {
    users:number;
    getUsersInDB():number
}


// @nullUserAdvanced
@CreatedAt(7)
@setUsersAdvanced(15)
class ServiceTwo implements IService {
    users:number = 1000;
    getUsersInDB():number{
        return this.users
    }
}

function nullUserAdvanced<T extends {new(...args:any[]): {}}>(constructor: T) {
    return class extends constructor{
        users:number = 122
    }
}
//decorators factory

// function setUsers(users:number){
//     return (target:Function) =>{
//         target.prototype.users = users
//     }
// }

function setUsersAdvanced(users:number){
    return <T extends {new(...args:any[]): {}}>(constructor: T) => {
        return class extends constructor{
            users:number = users
        }
}}

function CreatedAt(users:number){
    return <T extends {new(...args:any[]): {}}>(constructor: T) => {
        return class extends constructor{
            createdAt:number = users * 100
            getDate = new Date()
        }
}}

type CreatedAt = {
    createdAt: string;
    getDate:Date
}


console.log((new ServiceTwo() as ServiceTwo & CreatedAt).createdAt  )
console.log((new ServiceTwo() as ServiceTwo & CreatedAt).getDate  )

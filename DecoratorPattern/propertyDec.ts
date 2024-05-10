interface IUserService{
    users:number;
    getUserInDB():number
}

class UserFour {
    @Max(10)
    users:number    ;
    // @Catch({rethrow:true})
    getUserInDB():number{
        throw new Error('err');
    }
}

function Max(max:number){
    return(target:Object,propertyKey:string) => {
        let value:number
        const setter =  function (newValue:number){
            if(newValue > max){
                console.log(`no more than ${max}`)
            }else{
                value = newValue
            }
        }
        const getter = ()=>{
            return value
        }

        Object.defineProperty(target,propertyKey,{
            set:setter,
            get:getter
        });
    }
}


// function Catch({rethrow}:{rethrow:boolean} = {rethrow:true}) {
//     return (target:Object,
//             propertyKey:string,
//             descriptor:TypedPropertyDescriptor<(...args:any[])=>any>
//     ) => {
//       const method = descriptor.value
//         try{
//             descriptor.value = async (...args:any[]) => {
//                 return  await method?.apply(target, args)
//             }
//         }catch (e){
//           if( e instanceof Error){
//               console.log(e.message)
//               if(rethrow){
//                   throw e
//               }
//           }
//         }
//     }
// }

const userFour = new UserFour()
userFour.users = 1
console.log(userFour.users)
userFour.users = 1000;
console.log(userFour.users)
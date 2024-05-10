"use strict";
class Service {
    users = 1000;
    getUsersInDB() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
console.log(new Service().getUsersInDB());
console.log(nullUser(new Service()).getUsersInDB());

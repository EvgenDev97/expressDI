"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ServiceTwo = class ServiceTwo {
    users = 1000;
    getUsersInDB() {
        return this.users;
    }
};
ServiceTwo = __decorate([
    CreatedAt(7),
    setUsersAdvanced(15)
], ServiceTwo);
function nullUserAdvanced(constructor) {
    return class extends constructor {
        users = 122;
    };
}
function setUsersAdvanced(users) {
    return (constructor) => {
        return class extends constructor {
            users = users;
        };
    };
}
function CreatedAt(users) {
    return (constructor) => {
        return class extends constructor {
            createdAt = users * 100;
            getDate = new Date();
        };
    };
}
console.log(new ServiceTwo().createdAt);
console.log(new ServiceTwo().getDate);

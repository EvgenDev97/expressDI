"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class UserFour {
    users;
    getUserInDB() {
        throw new Error('err');
    }
}
__decorate([
    Max(10),
    __metadata("design:type", Number)
], UserFour.prototype, "users", void 0);
function Max(max) {
    return (target, propertyKey) => {
        let value;
        const setter = function (newValue) {
            if (newValue > max) {
                console.log(`no more than ${max}`);
            }
            else {
                value = newValue;
            }
        };
        const getter = () => {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
const userFour = new UserFour();
userFour.users = 1;
console.log(userFour.users);
userFour.users = 1000;
console.log(userFour.users);

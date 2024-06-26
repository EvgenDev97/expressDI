var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import "reflect-metadata";
const POSITIVE_METADATA_KEY = Symbol("POSITIVE_METADATA");
class ReflectUser {
    _users;
    getUserInDB() {
        return this._users;
    }
    setUserInDB(num) {
        this._users = num;
    }
}
__decorate([
    Validate(),
    __param(0, Positive()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReflectUser.prototype, "setUserInDB", null);
function Positive() {
    return (target, propertyKey, parameterIndex) => {
        console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
        console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey));
        console.log(Reflect.getOwnMetadata("design:returntype", target, propertyKey));
        let existParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parameterIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
    };
}
function Validate() {
    return (target, propertyKey, descriptor) => {
        let method = descriptor.value;
        descriptor.value = async (...args) => {
            let positiveParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
            if (positiveParams) {
                for (let index of positiveParams) {
                    if (args[index] < 0) {
                        throw new Error("number must to be more than 0");
                    }
                }
            }
            return method?.apply(args);
        };
    };
}
const ReflectUsers = new ReflectUser();
console.log(ReflectUsers.setUserInDB(10));
console.log(ReflectUsers.setUserInDB(-1));

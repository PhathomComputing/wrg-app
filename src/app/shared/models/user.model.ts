export class UserModel{
    constructor(public name:string, 
                public email:string, 
                public role:string,
                public permissions:number,
                token:string,
                id?: number
                ) {}
}
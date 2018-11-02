export class ProductModel{
    constructor(public name:string, 
                public description:string, 
                public imageUrl:string[],
                public slug:string,
                public brand:number,
                public category:number             
                ){}
}
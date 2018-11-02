import { ProductModel } from "../models/product.model";

export class DebuggingService {
    toLog(log:any){
        if(typeof(log)==typeof('string')){
            //console.log(log);
        } 
        else if(typeof(log)==typeof(ProductModel)){
            //console.log(log.name);
        }
    }
}
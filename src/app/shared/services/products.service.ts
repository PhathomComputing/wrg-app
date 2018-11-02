import { ProductModel } from "../models/product.model";
import { OnInit } from "@angular/core";

export class ProductService{
    tempList = ['1','2','3','4','5','6','7','8','9','0'];
    product: ProductModel;
    productSet: ProductModel[]=[];
    productCategories=[];
    constructor(){}

    populateProducts(){
        this.tempList.forEach(item => {
            this.addProduct(item);

        });
    }
    
    printSetDetails(){
        if(this.productSet){
        console.log(this.productSet);
        } else {
            console.log("Product List Empty");
        }
    }

    addProduct(item){
        this.product = new ProductModel(item,'test description for '+item,['./assets/img/example_detailed_image.gif','http://www.net'+item+'.com/2'],'test-item-'+item,1,100);
        this.productSet.push(new ProductModel(item,'test description for '+item,['./assets/img/example_detailed_image.gif','http://www.net'+item+'.com/2'],'test-item-'+item,1,100) );
    }
}
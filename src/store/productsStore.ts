import { makeAutoObservable } from "mobx";
export interface Product{
    name: string;
    count: number;
    id: string;
    completed: boolean;
}
class ProductsStore{
    products:Product[] = JSON.parse(localStorage.getItem('products')!) || [];
    constructor(){
        makeAutoObservable(this);
    }
        deleteAll():void{
        this.products = [];
        this.push();
    }
    deleteOne(id:string):void{
        const products:Product[] = [];
        this.products.forEach((item) => {
            
            if(item.id !== id){
                products.push(item);
            }
        });
        this.products = [...products];
        this.push();
    }
    decremment(id:string):void{
        this.products.forEach((item:Product) => {
            if(item.id === id){
                item.count -= 1;
                if(item.count <= 0){
                    this.deleteOne(item.id);
                }
            }
        });
        this.push();
    }
    incremment(id:string):void{
        this.products.forEach((item:Product) => {
            if(item.id === id){
                item.count += 1;
            }
        });
        this.push();
    }
    complete(id:string):void{
        this.products.forEach(item => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
        });
        this.push();
    }
    create(name:string, count:number):void{
        let product:Product = {
            name,
            count,
            completed: false,
            id: Date.now().toLocaleString()
        };
        this.products.push(product);
        this.push();
    }
    push():void{
        this.products = [...this.products];
        localStorage.setItem('products', JSON.stringify(this.products));
    }
}
export default new ProductsStore();
import { makeAutoObservable } from "mobx";
interface Product{
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
        this.products.filter(item => item.id !== id);
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
        localStorage.setItem('products', JSON.stringify(this.products));
    }
}
export default new ProductsStore();
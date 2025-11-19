const formatValue = (input: string |number| boolean) =>{
    if (typeof input === "string"){
        return input.toUpperCase();
    }
    else if (typeof input === "number"){
        return input*10;
    }
    else{
        return (!input);
    }
}


const getLength = (input: string | string[] | number[]| boolean[]) =>{
    if(typeof input === 'string'){
        return input.length;
    }
    else{
        return input.length;
    }
}


class Person{
    name: string;
    age : number;

    constructor(name: string, age: number){
    this.name = name;
    this.age = age;
 }
getDetails(){
    console.log(`'Name: ${this.name}, Age: ${this.age}'`)
    }
}


interface Ibook{
    title: string;
    rating: number;
}
const new_rating_books: Ibook[] =[];
const filterByRating =(books:Ibook[]): Ibook[] =>{
    books.filter(book=>{
        if((book.rating) >=4 && (book.rating)<=5){
            new_rating_books.push(book);
        }
        else{
            return 0;
        }
    });
    return new_rating_books;
    
}


interface IUser{
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const active_user: IUser[] =[];
const filterActiveUsers =(users:IUser[]): IUser[] =>{
    users.filter(user=>{
        if((user.isActive) === true){
            active_user.push(user);
        }
        else{
            return 0;
        }
    });
    return active_user;
    
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book) => {
    if(typeof book === 'object'){
        console.log("Title:", book.title +",","Author:", book.author+",","Published:", book.publishedYear+",",
        "Available:", (book.isAvailable)? "Yes": "No");
    }
    else{
        return 0;
    }
}


const getUniqueValues = (arr1: number[]|string[], arr2: number[]| string[]) =>{
   const uniqueArray: number[]|string[]=[];
   for(let i=0;i< arr1.length; i++){
    let flag = false;
    for(let j=0;j< uniqueArray.length; j++){
        if(uniqueArray[j] === arr1[i]){
            flag = true;
            break;
        } 
    }
    if(!flag){
        uniqueArray[uniqueArray.length] = arr1[i];
    }
}
for(let i=0;i< arr2.length; i++){
    let flag = false;
    for(let j=0;j< uniqueArray.length; j++){
        if(uniqueArray[j] === arr2[i]){
            flag = true;
            break;
        } 
    }
    if(!flag){
        uniqueArray[uniqueArray.length] = arr2[i];
    }
 }
    return uniqueArray;
}


interface Product{
    name :string;
    price :number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice=(products: Product[]): number =>{
    if(products.length ===0){
        return 0;
    }
    
    const productPrice = products.map(product =>{
        let total= product.price * product.quantity;
        return product.discount? total -(total*product.discount)/100 : total;
    });
    
    let totalPrice = productPrice.reduce((sum, price)=> sum + price, 0);
    return totalPrice;
}
const products = [];
module.exports = class Product{
  constructor(title){
    this.title = title;
  }
  save(){
    products.push(this);
  }
  //the static keyworld allows us to call the method without instantiating the class
    static fetchAll(){
        return products;
        }


}
class Product{
    constructor(id){
        this.id = id;
    }
}

class ProductBuilder{
    constructor(id){
        this.product = new Product(id);
    }
    withName(name){
        this.product.name = name;
        return this;
    }
    
    withPrice(price){
        this.product.price = price;
        return this;
    }
    withDescription(description){
        this.product.description = description;
        return this;
    }
    withImage(image){
        this.product.image = image;
        return this;
    }
    withCategory(category){
        this.product.category = category;
        return this;
    }
    withBrand(brand){
        this.product.brand = brand;
        return this;
    }
    withRating(rating){
        this.product.rating = rating;
        return this;
    }
    withNumReviews(numReviews){
        this.product.numReviews = numReviews;
        return this;
    }
    withCountInStock(countInStock){
        countInStock === null ? this :  this.product.countInStock = countInStock;
        return this;
    }
    build(){
        return this.product;
    }


}

module.exports = ProductBuilder;
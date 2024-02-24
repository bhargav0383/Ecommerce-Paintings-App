# EcommercePaintingsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

Made using Angular materials, Data-binding, Local Storage, Services, Forms and routing. Creating development environment and testing Http calls with Mockoon Api using HttpClient and observables. This doesn't update details in the backend but can see the calls and ensure that the function is working.

## User Functionalities

This website is basically a user interface of ecommerce painting site, where user can effortlessly see paintings in home/paintings page and add to cart on clicking on a particular painting. 

It also has searching by product name and sorting by price functionalities.

Can see the cart window with the total price of items, clear the cart and checkout.

## Website view
These are zoom out views.
### VIEW 1: Viewing the products.
This is the home page where we can see the products and can use search input for a particular product by name and sort dropdown them by price : High-to-Low/Low-to-High.

![Screenshot 2024-02-24 104155](https://github.com/bhargav0383/Ecommerce-Paintings-App/assets/102506024/3902265e-f9f0-476e-94b3-156b1ea05caf)  

### VIEW 2: Sorting by price.
Here on selectiong 'Price:Low to High' we can see the products in Low to High price order.
![Screenshot 2024-02-24 104255](https://github.com/bhargav0383/Ecommerce-Paintings-App/assets/102506024/64f3ae2b-b7d9-4d6a-a98b-ef7abbdb85dd)

### VIEW 3: Filtering by name.
Here we searched for the letter 'D', So its displaying products which have letter 'd' in them.
![Screenshot 2024-02-24 104220](https://github.com/bhargav0383/Ecommerce-Paintings-App/assets/102506024/0ab04346-de3f-4ab9-be0d-c11dcf9f9d3c)

### VIEW 4: Combining both filtering and sorting,  and adding to cart.
For the previous searched results we can add sort High to Low price. Here we have clicked on Owl painting so we can see the pop on top-right that "Product has added to cart!"
![Screenshot 2024-02-24 112106](https://github.com/bhargav0383/Ecommerce-Paintings-App/assets/102506024/ec9cd009-477a-4ae9-9d34-4119bf463d08)

### VIEW 5: Clearing the Cart.
Here we clicked on the button clear, So we can see the popUp "Cart is cleared!". Here we can cart is not cleared because we are using Mockoon Api test things only, we don't have any backend database connected.
![Screenshot 2024-02-24 105144](https://github.com/bhargav0383/Ecommerce-Paintings-App/assets/102506024/31da5dac-0355-4bc8-8ec3-1d93d11afbd9)


### VIEW 6: Checking-Out the Cart.
Here we clicked on the button checkout, So we can see the popUp "Cart is checked out!"
![Screenshot 2024-02-24 105153](https://github.com/bhargav0383/Ecommerce-Paintings-App/assets/102506024/a78a14bb-8aee-4746-a950-a0ca7b036429)


## Mockoon API Logs 
We can see logs of Adding to cart => POST Http call, Clearing the cart => DELETE Http call, Checkout the cart => POST Http call.

### Adding to cart: 
![Screenshot 2024-02-24 112309](https://github.com/bhargav0383/Ecommerce-Paintings-App/assets/102506024/93e12741-4a6c-4467-bb3a-20ad376cfcc9)

### Clearing to cart: 
![Screenshot 2024-02-24 112344](https://github.com/bhargav0383/Ecommerce-Paintings-App/assets/102506024/6fe7c189-3ce5-4d22-ab68-093160d244be)

### Checkout to cart: 
![Screenshot 2024-02-24 112359](https://github.com/bhargav0383/Ecommerce-Paintings-App/assets/102506024/82c1c098-c3aa-4f69-b0b6-eb2ff180d162)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

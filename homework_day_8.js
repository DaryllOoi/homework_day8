/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let var1 = [1,2,3,4,5];
console.log("first 5 numbers",var1);


/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let arrayMe = [
    {Name : "daryll"},
    {surname : "ooi"},
    {email : "daryllooi@hotmail.com"},
    {age: 24},
];
console.log("me :",arrayMe);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

if( arrayMe.age >= 18){
    console.log("you are allowed to have a driving license");
}else{
    console.log("you can't have driving license")
};

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

arrayMe.splice(3);
console.log("new :",arrayMe);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let arrayMeNew = [
    {Name : "john"},
    {surname : "doe"},
    {email : "johndoe@hotmail.com"},
];
console.log("me :",arrayMeNew);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 50;
let shippingFee = 10
if(totalShoppingCart === 50){
    console.log("user is eligible for free shipping, ",totalShoppingCart);
}else{
        console.log("user has to pay 10, ",totalShoppingCart+shippingFee);
    }

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let BlackFriday = 0.8;
console.log("black friday sales: ",totalShoppingCart * BlackFriday);


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car={
    brand : "vw",
    model : "polo",
    licensePlate : "12D64650",
} 

let car1={
    brand : "vw",
    model : "polo",
    licensePlate : "12D64651",
} 
let car2={
    brand : "vw",
    model : "polo",
    licensePlate : "12D64652",
} 
let car3={
    brand : "vw",
    model : "polo",
    licensePlate : "12D64653",
} 
let car4={
    brand : "vw",
    model : "polo",
    licensePlate : "12D64654",
} 
let car5={
    brand : "vw",
    model : "polo",
    licensePlate : "12D64655",
} 

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent =[
    car1,car2,car3,car4,car5
];

console.log("total cars, ",carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.splice(0,1);
carsForRent.pop(car5);
console.log("new",carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

for( let i=0; i<carsForRent.length; i+=1){
    let carForRentNew = carsForRent[i];

console.log("new",
    carForRentNew.brand,
    carForRentNew.licensePlate);
}

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = []
let car6={
        brand : "vw",
        model : "polo",
        licensePlate : "12D64656",}

        let car7={
            brand : "vw",
            model : "polo",
            licensePlate : "12D64657",}

            let car8={
                brand : "vw",
                model : "polo",
                licensePlate : "12D64658",}
carsForSale = [car6,car7,car8];

let totalCars = carsForSale.concat(carsForRent);
console.log("total cars ", totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for( let i=0; i<carsForSale.length; i+=1){
     let totalVehicle = carsForSale[i];

    console.log("total cars", totalVehicle);
}

   

//Assignment 1
//Q2
/*
let pName = "Eric";
console.log(`Hey ${pName}, would you like to learn some Python today?`);
*/
//Q3
/*
function titleCase(pName){
pName = pName.split(' ');
for(let i = 0; i < pName.length; i++){
    pName[i] = pName[i].charAt(0).toUpperCase()+ pName[i].slice(1);
    return pName.join(' ');
}
}
let pName = "Hey Eric";
console.log(pName.toLowerCase());
console.log(pName.toUpperCase());
console.log(titleCase(pName));
*/
//Q4
/*
console.log('Quaid-e-Azam once said, "I do not believe in taking the right decision, I take a decision and make it right."');
*/
//Q5
/*
let famousPerson = "Quaid-e-Azam";
let msg = '"I do not believe in taking the right decision, I take a decision and make it right."';
console.log(`${famousPerson} once said, ${msg}`);
*/
//Q6
/*
let pName = "\tHey \nEric";
console.log("Before Stripping: " + pName);
console.log("After Stripping: " + pName.trim());
*/
//Q7
/*
console.log("Add: ", 5+3);
console.log("Sub: ", 12-4);
console.log("Mul: ", 2*4);
console.log("Div: ", 32/4);
*/
//Q8
/*
for(let i = 0; i < 4; i++){
   for(let j = 0; j < 40; j++){
    process.stdout.write("-"); // Used Node js (process.stdout.write) here for printing dashes in a same line
}
    console.log("\n",5+3);
    for(let k = 0; k < 40; k++){
        process.stdout.write("-");
    }console.log("\n");
}
*/
//Q9
/*
let favNumber = 13;
if(favNumber == 13){
    console.log(`Hey, is your favorite number ${favNumber}?`);
}
*/
//Q10
/*
for(let i = 0; i < 4; i++){
   for(let j = 0; j < 40; j++){
    process.stdout.write("-"); // Used Node js (process.stdout.write) here for printing dashes in a same line
}
    console.log("\n",5+3);
    for(let k = 0; k < 40; k++){
        process.stdout.write("-");
    }console.log("\n");
}
------------------------------------------------------------------
let favNumber = 13;
if(favNumber == 13){
    console.log(`Hey, is your favorite number ${favNumber}?`);
}
*/
//Q11
/*
let arrayNames = ["Eric","Alexa","Jarvis"];
console.log(arrayNames[0]);
console.log(arrayNames[1]);
console.log(arrayNames[2]);
*/
//Q12
/*
let arrayNames = ["Eric","Alexa","Jarvis"];
for(let i = 0; i < arrayNames.length; i++){
console.log("Hey " + arrayNames[i] + ", how are you?");
}
*/
//Q13
/*
let transportArray = ["I like to own a private jets", "I like to own an audi", "I like to own a Kawasaki Ninja", "YBR is also good!"];
for(let i = 0; i < transportArray.length; i++){
    console.log(transportArray[i]);
}
*/
//Q14
/*
let guestList = ["Burak", "Alexa", "Jarvis"];
for(let i = 0; i < guestList.length; i++){
    if(guestList[i] == "Burak"){
        console.log(`Mr. ${guestList[i]}, You are cordially invited to our dinner tommorow night.`);
    }
    else if(guestList[i] == "Alexa"){
        console.log(`Ms. ${guestList[i]}, Bring your own food!`);
    }
    else{
        console.log(`Mr. ${guestList[i]}, You are cordially invited to our dinner on 30 Feb.`);
    }
}
*/
//Q15
/*
let guestList = ["Burak", "Alexa", "Jarvis"];
for(let i = 0; i < guestList.length; i++){
    if(guestList[i] == "Burak"){
        console.log(`Mr. ${guestList[i]}, You are cordially invited to our dinner tommorow night.`);
    }
    else if(guestList[i] == "Alexa"){
        console.log(`Ms. ${guestList[i]}, Bring your own food!`);
    }
    else{
        console.log(`Mr. ${guestList[i]}, You are cordially invited to our dinner on 30 Feb.`);
    }
}
console.log(guestList[1] + " can`t make it to the dinner tommorow night.");
guestList[1] = "Google";
console.log("New guest list is: ");
for(let i = 0; i < guestList.length; i++){
    console.log(guestList[i]);
}
for(let i = 0; i < guestList.length; i++){
    if(guestList[i] == "Burak"){
        console.log(`Again, Mr. ${guestList[i]}, You are cordially invited to our dinner tommorow night.`);
    }
    else if(guestList[i] == "Jarvis"){
        console.log(`Again, Mr. ${guestList[i]}, You are cordially invited to our dinner on 30 Feb.`);
    }
}
*/
//Q16
/*
let guestList = ["Burak", "Alexa", "Jarvis"];
for(let i = 0; i < guestList.length; i++){
    if(guestList[i] == "Burak"){
        console.log(`Mr. ${guestList[i]}, You are cordially invited to our dinner tommorow night.`);
    }
    else if(guestList[i] == "Alexa"){
        console.log(`Ms. ${guestList[i]}, Bring your own food!`);
    }
    else{
        console.log(`Mr. ${guestList[i]}, You are cordially invited to our dinner on 30 Feb.`);
    }
}
console.log("We have got a bigger dining table and now we are inviting some more guests and they are: ");
guestList.splice(1,0,"Matrix");
guestList.unshift("Google");
guestList.push("Tesla");
for(let j = 0; j < guestList.length; j++){
    if(guestList[j] == "Burak"){
        console.log(`Mr. ${guestList[j]}, You are cordially invited to our dinner tommorow night.`);
    }
    else if(guestList[j] == "Alexa"){
        console.log(`Ms. ${guestList[j]}, Bring your own food!`);
    }
    else if(guestList[j] == "Google"){
        console.log(`Mr. ${guestList[j]}, Bring your own food! You are extra.`);
    }
    else if(guestList[j] == "Tesla"){
        console.log(`Mr. ${guestList[j]}, Bring your own food! You are extra.`);
    }
    else if(guestList[j] == "Matrix"){
        console.log(`Mr. ${guestList[j]}, Bring your own food! You are extra.`);
    }
    else{
        console.log(`Mr. ${guestList[j]}, You are cordially invited to our dinner on 30 Feb.`);
    }
}
*/

//Q17
/*
let guestList = ["Burak", "Alexa", "Jarvis"];
for(let i = 0; i < guestList.length; i++){
    if(guestList[i] == "Burak"){
        console.log(`Mr. ${guestList[i]}, You are cordially invited to our dinner tommorow night.`);
    }
    else if(guestList[i] == "Alexa"){
        console.log(`Ms. ${guestList[i]}, Bring your own food!`);
    }
    else{
        console.log(`Mr. ${guestList[i]}, You are cordially invited to our dinner on 30 Feb.`);
    }
}
console.log("We have got a bigger dining table and now we are inviting some more guests and they are: ");
guestList.splice(1,0,"Matrix");
guestList.unshift("Google");
guestList.push("Tesla");
for(let j = 0; j < guestList.length; j++){
    if(guestList[j] == "Burak"){
        console.log(`Mr. ${guestList[j]}, You are cordially invited to our dinner tommorow night.`);
    }
    else if(guestList[j] == "Alexa"){
        console.log(`Ms. ${guestList[j]}, Bring your own food!`);
    }
    else if(guestList[j] == "Google"){
        console.log(`Mr. ${guestList[j]}, Bring your own food! You are extra.`);
    }
    else if(guestList[j] == "Tesla"){
        console.log(`Mr. ${guestList[j]}, Bring your own food! You are extra.`);
    }
    else if(guestList[j] == "Matrix"){
        console.log(`Mr. ${guestList[j]}, Bring your own food! You are extra.`);
    }
    else{
        console.log(`Mr. ${guestList[j]}, You are cordially invited to our dinner on 30 Feb.`);
    }
}
console.log("Sorry Guys! The new table won`t arrive in time, now only two people can come to the dinner.");
for(let k = 0; k < (guestList.length)+1; k++){
   let lastElement = guestList.pop();
   if(lastElement == "Tesla"){
    console.log(`${lastElement}, we have removed you from the list`);
   }
   else if(lastElement == "Google"){
    console.log(`${lastElement}, we have removed you from the list`);
   }
   else if(lastElement == "Burak"){
    console.log(`${lastElement}, we have removed you from the list`);
   }
   else if(lastElement == "Alexa"){
    console.log(`${lastElement}, we have removed you from the list`);
   }
   else if(lastElement == "Jarvis"){
    console.log(`${lastElement}, we have removed you from the list`);
   }
   else if(lastElement == "Matrix"){
    console.log(`${lastElement}, we have removed you from the list`);
   }
}
for(let f = 0; f < guestList.length; f++){
    console.log(`${guestList[f]}, You are still invited. `); 
}
for(let l = 0; l <= guestList.length; l++){
    guestList.pop();
}
console.log("Anyone left: ", guestList);
*/
//Q18
/*
let myArray = ["Tokyo","Kashmir","Pakistan","India", "China"];
for(let i = 0; i < myArray.length; i++){
    process.stdout.write(myArray[i]);
    process.stdout.write(", ")
}
let newArray = [...myArray].sort();
console.log("\nSorted Array: ");
for(let i = 0; i < newArray.length; i++){
    process.stdout.write(newArray[i]);
    process.stdout.write(", ");
}
process.stdout.write("\nOriginal Array: ");
for(let i = 0; i < myArray.length; i++){
    process.stdout.write(myArray[i]);
    process.stdout.write(", ");
}
newArray = [...myArray].sort();
let myarray = newArray.reverse();
process.stdout.write("\nReverse Sorted Array: ");
for(let i = 0; i < myarray.length; i++){
    process.stdout.write(myarray[i]);
    process.stdout.write(", ");
}
process.stdout.write("\nOriginal Array: ");
for(let i = 0; i < myArray.length; i++){
    process.stdout.write(myArray[i]);
    process.stdout.write(", ");
}
myArray = ["China", "India", "Pakistan","Kashmir", "Tokyo"];
process.stdout.write("\nNew Original Array: ");
for(let i = 0; i < myArray.length; i++){
    process.stdout.write(myArray[i]);
    process.stdout.write(", ");
}
myArray = ["Tokyo","Kashmir","Pakistan","India", "China"];
process.stdout.write("\nRturned to Original Array: ");
for(let i = 0; i < myArray.length; i++){
    process.stdout.write(myArray[i]);
    process.stdout.write(", ");
}
 newArray = [...myArray].sort();
console.log("\nSorted Array: ");
for(let i = 0; i < newArray.length; i++){
    process.stdout.write(newArray[i]);
    process.stdout.write(", ");
}
process.stdout.write("\nOriginal Array: ");
for(let i = 0; i < myArray.length; i++){
    process.stdout.write(myArray[i]);
    process.stdout.write(", ");
}
newArray = [...myArray].sort();
 myarray = newArray.reverse();
process.stdout.write("\nReverse Sorted Array: ");
for(let i = 0; i < myarray.length; i++){
    process.stdout.write(myarray[i]);
    process.stdout.write(", ");
}
process.stdout.write("\nOriginal Array: ");
for(let i = 0; i < myArray.length; i++){
    process.stdout.write(myArray[i]);
    process.stdout.write(", ");
}
*/
//Q19
/*
let guestList = ["Burak", "Google", "Jarvis"];
console.log("No. of guests are: ", guestList.length);
*/
//Q20
/*
let myList = ["Nile", "Pacific"];
    myList.push("Arabian Sea", "Atlantic");
console.log(myList);
*/
//Q21
/*
const myObject = {name: "Everest", height: "800m", peak: 1};
console.log(myObject);
*/
//Q22
/*
let myList = ["Burak", "Google", "Jarvis"];
console.log(myList[4]);
console.log(myList[2]);
*/
//Q23
/*
let myCar = ["Subaru", "BMW", "Audi", "Peugot", "Ferrari"];
console.log("Verifying whether the first car is Subaru or not...");
if(myCar[0] == "Subaru"){
    console.log(true);
}
else{
    console.log(false);
}
console.log("Verifying whether the fourth car is Peugot or not...");
if(myCar[3] == "Peugot"){
    console.log(true);
}
else{
    console.log(false);
}
console.log("Verifying whether the fifth car is Ferrari or not...");
if(myCar[4] == "Ferrari"){
    console.log(true);
}
else{
    console.log(false);
}
console.log("Verifying whether the second car is BMW or not...");
if(myCar[1] == "BMW"){
    console.log(true);
}
else{
    console.log(false);
}
console.log("Verifying whether the third car is Audi or not...");
if(myCar[2] == "Audi"){
    console.log(true);
}
else{
    console.log(false);
}
console.log("Verifying whether the first car is BMW or not...");
if(myCar[0] == "BMW"){
    console.log(true);
}
else{
    console.log(false);
}
console.log("Verifying whether the first car is Audi or not...");
if(myCar[0] == "Audi"){
    console.log(true);
}
else{
    console.log(false);
}
console.log("Verifying whether the second car is Subaru or not...");
if(myCar[1] == "Subaru"){
    console.log(true);
}
else{
    console.log(false);
}

console.log("Verifying whether the second car is Audi or not...");
if(myCar[1] == "Audi"){
    console.log(true);
}
else{
    console.log(false);
}
console.log("Verifying whether the third car is Subaru or not...");
if(myCar[2] == "Subaru"){
    console.log(true);
}
else{
    console.log(false);
}
*/
//Q24
/*
//First Bullet
let firstFruit = "Apple";
let secondFruit = "Apple";
if(firstFruit == secondFruit){
    console.log(true);
}
let firsFruit = "Apple";
let seconFruit = "Apple";
if(firsFruit != seconFruit){
    console.log(true);
}else{console.log(false);}
//Second Bullet
let firstfruit = "Apple";
let secondfruit = "apple";
if(firstfruit == secondfruit){
    console.log(true);
}else{console.log(false);}
//Third Bullet
if(4 == 4){
    console.log(true);
}
if(3 != 4){
    console.log(false);
}
if(4 > 3){
    console.log(true);
}
if(4 < 3){
    console.log(true);
}else{console.log(false);}
if(4 >= 4){
    console.log(true);
}
if(3 <= 4){
    console.log(false);
}
//Fourth Bullet
if(3 < 4 && 4 < 5){
    console.log(true);
}else{console.log(false);}
if(3 > 4 || 4 < 3){
    console.log(true);
}else{console.log(false);}
//Fifth Bullet
let newArray = ["Apple", "Mango"];
for(let i = 0; i < newArray.length; i++){
    if(newArray[i] == "Apple"){
        console.log(true);
    }else if(newArray[i] != "Apple"){
        console.log(false);
    }
}
*/
//Q25
/*
//First
let alien_color = "red";
if(alien_color == "red"){
    console.log("Yeah! You earned five points.");
}
//Second
let alien_color1 = "green";
if(alien_color1 == "red"){
    console.log("You earned five points");
}
*/
//Q26
/*
//First
let alien_color = "green";
if(alien_color == "green"){
    console.log("You earned 5 points for shooting the alien");
}
//Second
else{console.log("You earned 10 points for shooting the alien");}
//Third
let alien_color1 = "red";
if(alien_color1 == "green"){
    console.log("You earned 5 points for shooting the alien");
}
else{console.log("You earned 10 points for shooting the alien");}
*/
//Q27
/*
//First
let alien_color = "green";
if(alien_color == "green"){
    console.log("You earned 5 points for shooting the alien.");
}
else if(alien_color == "yellow"){
    console.log("You earned 10 points for shooting the alien");
}
else{
    console.log("You earned 15 points for shooting the alien");
}
//Second
let alien_color1 = "yellow";
if(alien_color1 == "green"){
    console.log("You earned 5 points for shooting the alien.");
}
else if(alien_color1 == "yellow"){
    console.log("You earned 10 points for shooting the alien");
}
else{
    console.log("You earned 15 points for shooting the alien");
}
//Third
let alien_color2 = "red";
if(alien_color2 == "green"){
    console.log("You earned 5 points for shooting the alien.");
}
else if(alien_color2 == "yellow"){
    console.log("You earned 10 points for shooting the alien");
}
else{
    console.log("You earned 15 points for shooting the alien");
}
*/
//Q28
/*
let pAge = 15;
if(pAge < 2 ){
    console.log("Person is a baby.");
}
else if(pAge > 2 && pAge < 4 ){
    console.log("Person is a toddler.");
}
else if(pAge >= 4 && pAge < 13 ){
    console.log("Person is a kid.");
}
else if(pAge >= 13 && pAge < 20 ){
    console.log("Person is a teenager.");
}
else if(pAge >= 20 && pAge < 65 ){
    console.log("Person is an adult.");
}else{
    console.log("Person is an elder.");
}
*/
//Q29
/*
let favorite_fruit = ["Apple", "Mango", "Banana"];
for(let i = 0; i < favorite_fruit.length; i++){
    if(favorite_fruit[i] == "Apple"){
        console.log(`You really like: ${favorite_fruit[i]}`);
    }
    if(favorite_fruit[i] == "Mango"){
        console.log(`You really like: ${favorite_fruit[i]}`);
    }
    if(favorite_fruit[i] == "Banana"){
        console.log(`You really like: ${favorite_fruit[i]}`);
    }
    if(favorite_fruit[i] == "Leechi"){
        console.log(`You really like: ${favorite_fruit[i]}`);
    }
    if(favorite_fruit[i] == "Japani"){
        console.log(`You really like: ${favorite_fruit[i]}`);
    }
}
*/
//Q30
/*
let userNames = ["Admin", "Eric", "Alpha", "Bravo", "Charlie", "Leo"];
for(let i = 0; i < userNames.length; i++){
    if(userNames[i] == "Admin"){
        console.log("Hello admin would you like to see a status report?");
    }
    else if(userNames[i] == "Eric"){
        console.log(`Hello ${userNames[i]}, good to see you again`);
    }
    else if(userNames[i] == "Alpha"){
        console.log(`Hello ${userNames[i]}, good to see you again`);
    }
    else if(userNames[i] == "Bravo"){
        console.log(`Hello ${userNames[i]}, good to see you again`);
    }
    else if(userNames[i] == "Charlie"){
        console.log(`Hello ${userNames[i]}, good to see you again`);
    }
    else if(userNames[i] == "Leo"){
        console.log(`Hello ${userNames[i]}, good to see you again`);
    }
}
*/
//Q31
/*
let userNames = [];
if(userNames.length < 1){
console.log("We need to find some users.");
}else{
    for(let i = 0; i < userNames.length; i++){
        if(userNames[i] == "Admin"){
            console.log("Hello admin would you like to see a status report?");
        }
        else if(userNames[i] == "Eric"){
            console.log(`Hello ${userNames[i]}, good to see you again`);
        }
        else if(userNames[i] == "Alpha"){
            console.log(`Hello ${userNames[i]}, good to see you again`);
        }
        else if(userNames[i] == "Bravo"){
            console.log(`Hello ${userNames[i]}, good to see you again`);
        }
        else if(userNames[i] == "Charlie"){
            console.log(`Hello ${userNames[i]}, good to see you again`);
        }
        else if(userNames[i] == "Leo"){
            console.log(`Hello ${userNames[i]}, good to see you again`);
        }
    }
}
*/
//Q32
/*
let current_users = ["GOOGLE", "Burak", "Jarvis", "Algo", "Ultron"];
let new_users = ["Google", "jarvis", "Leo", "Bake", "Cake"];
for(let i = 0; i < new_users.length; i++){
    for(let j = 0; j < current_users.length; j++){
        if(new_users[i].toLowerCase() == current_users[j].toLowerCase()){
            console.log(`${new_users[i]}, username already exist.`);
        }else{console.log(`${new_users[i]}, username available.`)};
    }
}
*/
//Q33
/*
let numArray = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i < numArray.length; i++){
    if(numArray[i] == 1){
        console.log(`${numArray[i]}st`);
    }
    else if(numArray[i] == 2){
        console.log(`${numArray[i]}nd`);
    }
    else if(numArray[i] == 3){
        console.log(`${numArray[i]}rd`);
    }else{
        console.log(`${numArray[i]}th`);
    }
}
*/
//Q34
/*
let favPizza = ["Tikka", "Fajita", "Pepproni"];
for(let i = 0; i < favPizza.length; i++){
    if(favPizza[i] == "Tikka"){
        console.log(`${favPizza[i]}, pizza is life.`);
    }
    else if(favPizza[i] == "Fajita"){
        console.log(`${favPizza[i]}, pizza is complementry.`);
    }
    else if(favPizza[i] == "Pepproni"){
        console.log(`${favPizza[i]}, pizza is life saver.`);
    }
}
console.log("I`ll say that PIZZA is life, I usually think what would be life like if there won`t be any pizza invented ever?\nAnd not just that pizza is actually good for health as it contains many good ingredients like cheese and vegetables. That`s one of the reasons I love pizza!");
*/
//Q35
/*
let petAnimal = ["Horse", "Dog", "Cat"];
for(let i = 0; i < petAnimal.length; i++){
    if(petAnimal[i] == "Horse"){
    console.log(`${petAnimal[i]}, is one of the loyal animals.`);
   }
   else if(petAnimal[i] == "Dog"){
    console.log(`${petAnimal[i]}, will be your best pal.`);
   }
   else if(petAnimal[i] == "Cat"){
    console.log(`${petAnimal[i]}, never leaves you.`);
   }
}
console.log("All of these animals are loyal to their owners.");
*/
//Q36
/*
function make_shirt(size, message){
    console.log(`Size of shirt is: ${size}, and the message to be printed is: `);
    console.log(message);
}

let size = "Medium";
let message = "Rul ty gaye han, pr chuss bari ayi hai";

make_shirt(size, message);
*/
//Q37
/*
function make_shirt(size, message){
    if(size == "Large"){
        console.log(`Size of shirt is: ${size}, and the message to be printed is`);
        console.log(message);
    }
    else if(size == "Medium"){
        console.log(`Size of shirt is: ${size}, and the message to be printed is`);
        console.log(message);
    }
    else{
        console.log(`Size of shirt is: ${size}, and the message to be printed is`);
        console.log("Angrezi da the aur Punjabi da 'da' jithy lg jaye la");
    }
}
let size = "Large";
let d_msg = "I Love JavaScript";
make_shirt(size, d_msg);
*/
//Q38
/*
function describe_city(city, country){
    console.log(`${city}, is in ${country}.`);
}
describe_city(city = "Karachi", country = "Pakistan");
describe_city(city = "Lahore", country = "Pakistan");
describe_city(city = "Las Vegas", country = "Pakistan");
*/
//Q39
/*
function city_country(city, country){
    let nameCountry = `${city}, ${country}`;
    return nameCountry;
}
console.log(city_country(city="Lahore", country = "Pakistan"));
console.log(city_country(city="Karachi", country = "Pakistan"));
console.log(city_country(city="Las Vegas", country = "Pakistan"));
*/
//Q40
/*
function make_album(artist_name, album_title, track){
    if(track <= 0){
    const albumObject = {artist_name, album_title};
    console.log(albumObject);
}else{
    const albumObject = {artist_name, album_title, track};
    console.log(albumObject);
}
}

make_album(aName = "Ali Zafar", alTitle = "Berukhi", tracks = 5);
*/
//Q41
/*
function show_magician(magician){
    for(let i = 0; i < magician.length; i++){
        console.log(magician[i]);
    }
}
let magician = ["Zakoota", "Ainak Wala", "Chakar Bhotia"];
show_magician(magician);
*/
//Q42
/*
function make_great(magician){
    for(let i = 0; i < magician.length; i++){
        console.log(`Great! ${magician[i]}`);
    }
}
function show_magician(magician){
    make_great(magician);
}
let magician = ["Zakoota", "Ainak Wala", "Chakar Bhotia"];
show_magician(magician);
*/
//Q43
/*
function make_great(magician){
   return magician;
}
function show_magician(magician){
    return magician;
}
let magician = ["Zakoota", "Ainak Wala", "Chakar Bhotia"];
show_magician(magician);
console.log("New Array: ");
let great_magician = make_great(magician);
for(let i = 0; i < great_magician.length; i++){
    console.log(`Great ${great_magician[i]}`);
}
console.log("Original Array: ");
console.log(show_magician(magician));
*/
//Q44
/*
function makeSandwhich(toppings){
for(let i = 0; i < toppings.length; i++){
    process.stdout.write(`${toppings[i]}, `);
}
console.log("\n");
}
makeSandwhich(topping = ["Cheese", "Tikka", "Beef"]);
makeSandwhich(topping = ["Mozerella", "Tikka"]);
makeSandwhich(topping = ["Chatter", "Tikka"]);
*/
//Q45
/*
function carInfo(manufacturer, model, argument){
    console.log("Manufacturer is: " + manufacturer);
    console.log("Model is: " + model);
    console.log("Color is: " + argument.color);
    console.log("Designed by: " + argument.design);
}
carInfo("BMW", "2022", argue = {color: 'royal black', design: 'bmw'});
*/

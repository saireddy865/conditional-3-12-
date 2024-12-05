// ------ scenario -1 library --------

var membership = "premium";
if (membership == "basic") {
    console.log("Access to only free books");
}
else if (membership == "standard") {
    console.log("Access to all books and discounted paid books");
}
else if (membership == "premium") {
    console.log("Access to all books,including exclusive content");
}
else {
    console.log("invalid member");
}


console.log(" ---------------- ");


//--------  scenario -2 E-commerce ------------------


var membership = "vip";
var purchaseamount = -400;
if (membership == "regular") {
    if (purchaseamount > 0 && purchaseamount < 100) {
        console.log("no discount");
    }
    else if (purchaseamount >= 100 && purchaseamount < 500) {
        console.log(purchaseamount - purchaseamount * 0.05);
    }
    else if (purchaseamount >= 500) {
        console.log(purchaseamount - purchaseamount * 0.1);
    }
    else {
        console.log("invalid amount entered")
    }
}
else if (membership == "vip") {
    if (purchaseamount > 0 && purchaseamount < 100) {
        console.log(purchaseamount - purchaseamount * 0.1);
    }
    else if (purchaseamount >= 100 && purchaseamount < 500) {
        console.log(purchaseamount - purchaseamount * 0.15);
    }
    else if (purchaseamount >= 500) {
        console.log(purchaseamount - purchaseamount * 0.2);
    }
    else {
        console.log("invalid amount entered")
    }
}
else {
    console.log("invalid user")
}


console.log(" ---------------- ");



// -------- scenario-3 academic --------


var gpa = 2.7;
var ECA = 1;
var commhrs = 100;
if (gpa >= 3.5 && ECA < 2 && commhrs <= 100) {
    console.log("You are eligible for Merit based scholarship");
}
else if (gpa >= 3.0 && ECA >= 2 && commhrs <= 100) {
    console.log("you are eligible for Leaderhip scholarship");
}
else if (gpa >= 2.5 && commhrs >= 100 && ECA < 2) {
    console.log("you are eligible for community service scholarship");
}
else if (gpa >= 3.5 && ECA >= 2 && commhrs >= 100) {
    console.log("eligible for multiple scholarships");
}
else {
    console.log("not eligible for scholarships");
}


console.log(" ---------------- ");



//--------  scenario-4  ---------------


var day = "thursday";
var age = 100;
if ((day == "saturday" || day == "sunday") && (age >= 65 || age <= 12)) {
    price = 12;
    console.log(price = price - price * 0.5);
}
else if ((day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") && (age >= 65 || age <= 12) && age <=100 ) {
    price = 15;
    console.log(price = price - price * 0.3);
}
else if ((age > 12 && age < 65) && (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday" || day == "saturday" || day == "sunday")) {
    console.log("no discount applicable")
}
else {
    console.log("invalid day or age entered");
}



console.log(" ---------------- ");


//--------  scenario-5   --------


var age = 19;
var email = "sai@gmail.com";
var participants = 1000;
if ((age >= 18 && participants <= 100) && email == "sai@gmail.com") {
    console.log("you can register for the event");
}
else if ((age >= 18 && participants > 100) && email == "sai@gmail.com") {
    console.log("event is full ,no more registrations  are accepted");
}
else if (age < 18) {
    console.log("your age is not eligible");
}
else {
    console.log("invalid email address");
}



console.log(" ---------------- ");
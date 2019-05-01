"use strict";

let userHealth = 40;
let grantHealth = 10;
let userwins = 0;
let grantwins = 0;

let play = prompt("  Do you want to play?");
let user = prompt (" please input user name.");

if( play === "yes"){

while (userwins < 3 && grantwins < 1) {
    console.log(`${user} has ${userHealth = userHealth - (Math.floor(Math.random() * 2) + 1)} health left.`);
    console.log(`The Almighty Grant has ${grantHealth = grantHealth - (Math.floor(Math.random() * 2) + 1)} health left.`);
    if (grantHealth <= 0) {
        userwins++;
        grantHealth = 10;

        console.log(`${user} wins.`);

    } if (userHealth <= 0) {
        // grantwins++;
        console.log(`The Almighty Grant wins`);
        break;

    } if (userwins === 3) {
        console.log(`Finish him! ${user} wins.`);
        break;
    }


}
}
        
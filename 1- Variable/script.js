// Variables are used to store the value of something like "user ID", "count" etc.

// JS has 3 variables declaration method
// const, let, var

// var - Can be redeclare & it’s value can be changed in its scope which is "global"

// let - Can not be redeclare in it’s scope but value of variable can be changed. Its scope is "block".

// const - Can not be redeclare in it’s scope but value of variable can’t be changed. Its scope is "block".


/* Tip: let and const are not hoisted. */


const accountID = 14445
// accountID = 464644
// As const value can't be change so line 16 will give an error.

let accountEmail = "ABC@gmail.com"

var accoountPW = "154684"
accountLocation = "Chandigarh"
// By default variable is declare in var
/* Tip: Not use var till you not have any other choise as it has scope problem. */

// To print something in console we can use
console.log();

// To print something in tabular form we use
console.table([accountID,accountEmail,accoountPW,accountLocation])
// output has index value & value of variable

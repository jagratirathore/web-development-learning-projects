//Qs3. Write a switch statement to print the months in a quarter. 
// Months in Quarter 1 : January,February,March 
// Months in Quarter2 : April,May,June
// Months in Quarter3 : July,August,September
// Months in Quarter4 : October,November,December
// [ Use the number as the case value in switch]

// let quarter= Number(prompt("Enter quarter number 1-4: "));

let quarter=3;

switch(quarter){
    case 1: console.log("jan,feb,mar");
    break;

    case 2: console.log("apr,may,jun");
    break;

    case 3: console.log("jul,aug,sep");
    break;

    case 4: console.log("oct,nov,dec");
    break;

    

    default: console.log("there is not remaning any month in quarter");
}
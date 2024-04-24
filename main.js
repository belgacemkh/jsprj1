//3.Write a function called returnFive that takes no parameters and returns the number 5 when invoked. HINT: Use “console.log()”.


function returnFive(){
    console.log(5);
}

returnFive();


//4.Write a function called helloWorldAgain that takes no parameters and returns the string “Hello World Again” when invoked.

function helloWorldAgain(){

    return "Hello World Again"
}

console.log(helloWorldAgain())


//5. Write a function called returnParameter that takes one parameter and returns the parameter when invoked.

function returnParameter(param1){
    return param1;
}

console.log(returnParameter('This is my parameter'))

//6.Write a function called add that takes two numbers as parameters and when invoked adds them together then return the result.

function add(var1,var2){

    return var1+var2
}
console.log(add(2,5));

//7.Write a function called subtract that takes two numbers as parameters and when invoked subtracts them from each other then returns the result.

function subtract(number1,number2){
    return number1-number2
}

console.log(subtract(15,4));

//8.Write a function called multiply that takes two numbers as parameters and when invoked multiplies them together then returns the result.

function multiply(parm1,param2){
    return parm1*param2
}

console.log(multiply(5,8));

//9.Write a function called stringLength that takes a string as a parameter and when invoked returns the length of the string as a number. HINT: use “.length”.

function stringLength(chaine1){

    return chaine1.length
}

console.log('the length of "this my length" is', stringLength('this my length'));

//10.Write a function called concatTwoStrings that takes two strings as parameters and returns a combined (concatenated) string when invoked.

function concatTwoStrings(str1, str2){
    return str1+str2;
}

console.log(concatTwoStrings('chaine1', 'chaine2'));

//11.Write a function called fullName that takes two strings as parameters and when invoked returns a combined (concatenated) string as full name with a white space in between.

function fullName(str1,str2){
    return str1+' '+str2
}
console.log('FirstName','LatsName');


//Extended

//1.Write a function called square that takes a number as a parameter, squares it and returns the result.

function square(number){
    return number*number
}

console.log(square(5));

//2.Write a function called cube that takes a number as a parameter, cube it and returns the result.

function cube(number){
    return number*number*number
}

console.log(cube(4));

//3.Write a function called charAtIndex that takes a string and an integer as parameters and returns the the character at the index of the number. HINT: Use “.charAt”.

function charAtIndex(str1,int1){
    return str1.charAt(int1)
}

console.log(charAtIndex('Business',2));

//4.Write a function called addFourNums that takes four numbers as four parameters and returns the summation of the numbers.

function addFourNums(number1,number2,number3,number4){

    return number1+number2+number3+number4
}

console.log(addFourNums(4,2,3,1))

//5.Write a function called perimeterRect that takes a numerical width and length as parameters and returns the perimeter of the rectangle.

function perimeterRect(width,length){

    return (width+length)*2
}

console.log(perimeterRect(4,2));

//6.Write a function called areaRect that takes a numerical width and length as parameters and returns the area of the rectangle.

function areaRect(width,length){

    return width*length
}

console.log(areaRect(4,5));

//7.Write a function called perimeterTriangle that takes the numerical length of each side as parameters and returns the perimeter of the triangle.


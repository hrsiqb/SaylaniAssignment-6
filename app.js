/* ================================Chapter#21 to 25=============================== */
/* ================================Task#1=============================== */
// var firstName = prompt("Enter your first name:");
// var secondName = prompt("Enter your second name:");
// var fullName = firstName + " " + secondName;
// alert("Welcome " + fullName);

/* ================================Task#2=============================== */
// var phoneModel = prompt("Enter your favourite mobile phone model:");
// var length = phoneModel.length;
// document.write("<h1>My favourite phone is: " + phoneModel + "<br>Length of string: " + length + "/<h1>");

/* ================================Task#3=============================== */
// var word = "pakistani";
// var index = word.indexOf('n');
// document.write("<h1> String: " + word + "<br>Index of 'n': " + index + "</h1>");

/* ================================Task#4=============================== */
// var word = "hello world";
// var index = word.lastIndexOf('l');
// document.write("<h1> String: " + word + "<br>Last index of 'l': " + index + "</h1>");


/* ================================Task#5=============================== */
// var word = "pakistani";
// var index = word.charAt(3);
// document.write("<h1> String: " + word + "<br>Word at index 3: " + index + "</h1>");

/* ================================Task#6=============================== */
// var firstName = prompt("Enter your first name:");
// var secondName = prompt("Enter your second name:");
// var fullName = firstName.concat(" ",secondName);
// alert("Welcome " + fullName);

/* ================================Task#7=============================== */
// var city = "hyderabad";
// var newCity = city.replace("hyder","Islam");
// document.write("<h1>City: " + city + "<br>After Replacement: " + newCity + "</h1>");

/* ================================Task#8=============================== */
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMsg = message.replaceAll("and", "&");
// document.write("<h1>Message: " + message + "<br>After Replacement: " + newMsg + "</h1>");

/* ================================Task#9=============================== */
// var numStr = "472";
// var numStrTyp = typeof(numStr);
// var num = parseInt(numStr);
// var numTyp = typeof(num);
// document.write("<h1>Value: " + numStr + "<br>Type: " + numStrTyp + "<br>Value: " + num + "<br>Type: " + numTyp + "</h1>");

/* ================================Task#10=============================== */
// var word = prompt("Enter a word to capitalize:");
// var capWord = word.toUpperCase();
// document.write("<h1>User input: " + word + "<br>Upper case: " + capWord + "</h1>");

/* ================================Task#11=============================== */
// var word = prompt("Enter a word to make letter case:");
// var firstWord = word.slice(0,1);
// var otherWords = word.slice(1);
// var newWord = firstWord.toUpperCase() + otherWords.toLowerCase();
// document.write("<h1>User input: " + word + "<br>Upper case: " + newWord + "</h1>");

/* ================================Task#12=============================== */
// var num = 35.36;
// var word = num.toString();
// var newWord = word.replace('.','');
// document.write("<h1>User input: " + word + "<br>Result: " + newWord + "</h1>");

/* ================================Task#13=============================== */
// // method#1
// var name = prompt("Enter your username:");
// if((name.indexOf('@') != -1) || (name.indexOf('.') != -1) || (name.indexOf(',') != -1) || (name.indexOf('!') != -1)){
//     alert("Please enter a valid name");
// }

// // method#2
// var name = prompt("Enter your username:");
// var len = name.length;
// for(var i=0; i<=len; i++){
//     if(name.charCodeAt(i) == 33 || name.charCodeAt(i) == 44 || name.charCodeAt(i) == 46 || name.charCodeAt(i) == 64){
//         alert("Please enter a valid name");
//     }
// }

/* ================================Task#14=============================== */
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var sItemIn = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
// var sItem = sItemIn.toLowerCase();
// var res = items.indexOf(sItem);
// if(res === -1){
//     document.write("We are sorry " + sItem + " is <b>not availlable</b> in our bakery.");
// }
// else{
//     document.write(sItem + " is <b>available</b> at index " + res + " of our bakery.");
// }

/* ================================Task#15=============================== */
// function checkAlphaNum(str){
//     var alpha = 0;
//     var num = 0;
//     for(var i=0; i<=str.length; i++){
//         if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)){
//             alpha = 1;
//         }
//         else if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
//             num = 1;
//         }
//     }
//     if(alpha === 0 || num === 0){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }
// var pswd = prompt("Enter your password:");
// if(pswd.charCodeAt(0) >= 48 && pswd.charCodeAt(0) <= 57){
//     document.write("<h1>Entered Password: " + pswd + "<br>Password can not begin with a number<br>Please enter a valid password</h1>");
// }
// else if(pswd.length < 6){
//     document.write("<h1>Entered Password: " + pswd + "<br>Password must be atleast 6 characters long<br>Please enter a valid password</h1>");
// }
// else if(checkAlphaNum(pswd)){
//     document.write("<h1>Entered Password: " + pswd + "<br>Password must contain alphabets and numbers<br>Please enter a valid password</h1>");
// }
// else{
//     document.write("<h1>Entered Password: " + pswd + "<br>Your password is valid</h1>");    
// }

/* ================================Task#16=============================== */
// var university = "University of Karachi";
// var uniArr = university.split("");
// for(var i=0; i<uniArr.length; i++){
//     document.write(uniArr[i] + "<br>");
// }

/* ================================Task#17=============================== */
// var char = prompt("Enter a character");
// var lastChar = char[char.length - 1];
// document.write("<h1>User input: " + char + "<br>Last character of input: " + lastChar + "</h1>");

/* ================================Task#18=============================== */
// var str = "The quick brown fox jumps over the lazydog";
// str1 = str.toLowerCase();
// var count = (str1.match(/the/g)).length;
// document.write("<h1>Text: " + str + "<br>There are " + count + " occurance(s) of word 'the'</h1>");

/* ================================Chapter#26 to 30=============================== */
/* ================================Task#1=============================== */
// var flt = parseFloat(prompt("Enter a positive float value:"));
// if(flt > 0)
//     document.write("<h1>Number: " + flt + "<br>Round off value: " + Math.round(flt) + "<br>Floor value: " + Math.floor(flt) + "<br>Ceil value: " + Math.ceil(flt) + "</h1>");

/* ================================Task#2=============================== */
// var flt = parseFloat(prompt("Enter a negative float value:"));
// if(flt < 0)
//     document.write("<h1>Number: " + flt + "<br>Round off value: " + Math.round(flt) + "<br>Floor value: " + Math.floor(flt) + "<br>Ceil value: " + Math.ceil(flt) + "</h1>");

/* ================================Task#3=============================== */
// var num = parseFloat(prompt("Enter a number to get it's absolute value value:"));
// document.write("<h1>The absolute value of " + num + " is " + Math.abs(num) + "</h1>");

/* ================================Task#4=============================== */
// document.write("<h1>Random dice value: " + Math.ceil(Math.random() * 6) + "</h1>");

/* ================================Task#5=============================== */
// if(Math.ceil(Math.random() * 2) === 1)
//     document.write("<h1>Random coin value: Tails</h1>");
// else
//     document.write("<h1>Random coin value: Heads</h1>");

/* ================================Task#6=============================== */
// document.write("<h1>Random number between 1 and 100: " + Math.ceil(Math.random() * 100) + "</h1>");

/* ================================Task#7=============================== */
// var weightIn = prompt("Enter your weight in kilograms");
// var weight = "";
// var size = 0;
// for(var i=0; i<weightIn.length; i++){
//     if((!isNaN(weightIn[i])) || weightIn[i] === '.'){
//          size++;
//     }
//     else{
//         weight = weightIn.slice(0,size);
//         document.write("<h1>The weight of user is " + parseFloat(weight) + " Kilograms</h1>");
//         break;
//     }
// }

/* ================================Task#8=============================== */
// var num = Math.ceil(Math.random() * 10);
// var numIn = parseInt(prompt("Enter a number between 1 and 10"));
// if(numIn === num)
//     alert("Congrats you've guessed the right number");
// else
//     alert("Try again!");

/* ================================Chapter#31 to 34=============================== */
/* ================================Task#1=============================== */
// var date = new Date();
// document.write("<h1>" + date + "</h1>");

/* ================================Task#2=============================== */
// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","Deember"];
// var month = date.getMonth();
// document.write("<h1>Current month: " + months[month] + "</h1>");

/* ================================Task#3=============================== */
// var date = new Date();
// var dat = date.toString();
// document.write("<h1>Today is " + dat.charAt(0) + dat.charAt(1) + dat.charAt(2) + "</h1>");

/* ================================Task#4=============================== */
// var date = new Date();
// if(date.getDay() === 0 || date.getDay() === 6)
//      document.write("<h1>It’s Fun day</h1>");

/* ================================Task#5=============================== */
// var date = new Date();
// if(date.getDate() <= 15)
//     document.write("<h1>First fifteen days of the month</h1>");
// else
//     document.write("<h1>Last days of the month</h1>");

/* ================================Task#6=============================== */
// var date = new Date();
// var mills = date.getTime();
// var mins = mills/1000/60;
// document.write("<h1>Current date: " + date + "<br>Elapsed milliseconds since January 1, 1970: " + mills + "<br>Elapsed minutes since January 1, 1970: " + mins + "</h1>");

/* ================================Task#7=============================== */
// var date = new Date();
// var hours = date.getHours();
// if(hours < 12)
//     document.write("<h1>It's AM</h1>");
// else
//     document.write("<h1>It's PM</h1>");

/* ================================Task#8=============================== */
// var date = new Date("Dec 31, 2020");
// document.write("<h1>Later Date: " + date + "</h1>");

/* ================================Task#9=============================== */
// var date = new Date();
// var dateRamadan = new Date("Apr 25, 2020");
// var dayCur = (date.getTime())/1000/60/60/24;
// var dayRamadan = (dateRamadan.getTime())/1000/60/60/24;
// var days = dayCur-dayRamadan;
// document.write("<h1>" +  + Math.floor(days) + " days have passed since first ramadan 2020</h1>");

/* ================================Task#10=============================== */
// var refDate = new Date("Sat Dec 05 2015 22:50:16");
// var fstDate = new Date("Jan 01, 2015");
// var refMilli = refDate.getTime();
// var fstMilli = fstDate.getTime();
// var passMilli = (refMilli - fstMilli)/1000;
// document.write("<h1>On reference date " + refDate + ",<br> " + passMilli + " Seconds had passed since the beginning of 2015</h1>");

/* ================================Task#11=============================== */
// var curDate = new Date();
// var lstDate = new Date();
// lstDate.setHours(lstDate.getHours()-1);
// document.write("<h1>Curret date: " + curDate + ",<br>1 hour ago, it was " + lstDate + "</h1>");

// /* ================================Task#12=============================== */
// var curDate = new Date();
// var lstDate = new Date();
// lstDate.setFullYear(lstDate.getFullYear()-100);
// document.write("<h1>Curret date: " + curDate + ",<br>100 years back, it was " + lstDate + "</h1>");

/* ================================Task#13=============================== */
// var age = prompt("Enter your age");
// var curDate = new Date();
// var curYear = curDate.getFullYear();
// brtYear = curYear - age;
// document.write("<h1>Your age is " + age + "<br>Your birth year is " + brtYear + "</h1>");

/* ================================Task#14=============================== */
// var curDate = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","Deember"];
// var curMonth = months[curDate.getMonth()];
// var customerName = "Haris Iqbal";
// var units = 411.55894723;
// var amountPerUnit = 16;
// var lateSurcharge = 350;
// var amountDue = parseFloat((units * amountPerUnit).toFixed(2));
// var amountAftDue = parseFloat((amountDue + lateSurcharge).toFixed(2));;
// document.write("<h1>Customer name: <b>" + customerName + "</b><br>Month: <b>" + curMonth + "</b><br>Number of units: <b>" + units + "</b><br>Charges per unit: <b>" + amountPerUnit + "</b><br><br>Net amount payable(within due date): <b>" + amountDue + "</b><br>Late payment surcharge: <b>" + lateSurcharge + "</b><br>Gross amount payable after due date: <b>" + amountAftDue + "</b></h1>");

/* ================================Chapter#35 to 38=============================== */
/* ================================Task#1=============================== */
// function date(){
//     return(new Date());
// }
// document.write("<h1>" + date() +"</h1>")

/* ================================Task#2=============================== */
// function name(fstName, lstName){
//     return(fstName + ' ' + lstName);
// }
// var fstnam = prompt("Enter your first name");
// var lstnam = prompt("Enter your last name");
// var fullName = name(fstnam, lstnam);
// document.write("<h1>Welcome: " + fullName +"</h1>")

/* ================================Task#3=============================== */
// function name(fsNum, scNum){
//     return(fsNum + scNum);
// }
// var fstNum = parseInt(prompt("Enter the first number"));
// var scnNum = parseInt(prompt("Enter the second number"));
// var sum = name(fstNum, scnNum);
// document.write("<h1>The sum of " + fstNum +" and " + scnNum + " is " + sum + "</h1>")

/* ================================Task#4=============================== */
// function calc(fsNum, scNum, op){
//     switch(op){
//         case '+':
//             return(fsNum + scNum);
//         case '-':
//             return(fsNum - scNum);
//         case '*':
//             return(fsNum * scNum);
//         case '/':
//             return(fsNum / scNum);
//         case '%':
//             return(fsNum % scNum);
//     }
// }
// var fstNum = parseInt(prompt("Enter the first number"));
// var scnNum = parseInt(prompt("Enter the second number"));
// var opr = prompt("Enter the operator");
// var ans = calc(fstNum, scnNum, opr);
// document.write("<h1>The '" + opr + "' of " + fstNum +" and " + scnNum + " is " + ans + "</h1>")

/* ================================Task#5=============================== */
// function sqr(num){
//     return(Math.pow(num, 2));
// }
// document.write("<h1>The square of 5 is " + sqr(5) + "</h1>");

/* ================================Task#6=============================== */
// function fct(num){
//     if (num < 0) 
//         return -1;
//     else if (num == 0) 
//         return 1;
//     else 
//         return (num * fct(num - 1));
// }
// document.write("<h1>The factorial of 5 is " + fct(6) + "</h1>")

/* ================================Task#7=============================== */
// function counting(numSt, numEn){
//     for(i = numSt; i<=numEn; i++)
//         document.write(i + ' ');
// }
// counting(1,90);

/* ================================Task#8=============================== */
// function calculateHypotenuse(Fbase, Fperp){
//     function calculateSquare(temp){
//         return(Math.pow(temp, 2));
//     }
//     var hyp = calculateSquare(Fbase) + calculateSquare(Fperp);
//     return(Math.sqrt(hyp));
// }
// document.write(calculateHypotenuse(20,50));

/* ================================Task#9=============================== */
// function calculateArea(fWidth, fHeight){
//     return(fWidth * fHeight);
// }
// var width = 10;
// var height = 20;
// document.write(calculateArea(20,50) + " Meters&sup2; (using arguments as values)");

// document.write("<br>");

// document.write(calculateArea(width, height) + " Meters&sup2; (using arguments as variables)");

/* ================================Task#10=============================== */
// function checkPalindrome(str){
//     var strRev = "";
//     for(i = str.length-1; i>=0; i--){
//         strRev += str[i];
//     }
//     if(str === strRev)
//         return(1);
//     else
//         return(0);
// }
// var string = "racecar";
// if(checkPalindrome(string))
//     document.write("The string \"" + string + "\"is palindrome");
// else
//     document.write("The string \"" + string + "\"is not palindrome");

/* ================================Task#11=============================== */
// function makeFirstUpper(str){
//     for(i = 0; i<str.length; i++){
//         if(i === 0 || str[i-1] === ' '){
//            str = (str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1));
//         }
//     }
//     return(str);
// }
// var string = "the quick brown fox jumps over the lazy dog";
// document.write("<h1>Input string: " + string + "<br>Output string: " + makeFirstUpper(string) + "</h1>");

/* ================================Task#12=============================== */
// function longestWord(str){
//     var len = 0;
//     var ind = 0;
//     for(var i=0; i<str.length; i++){
//         if(str[i].length > len){
//             len = str[i].length;
//             ind = i;
//         }
//     }
//     return(ind);
// }
// var strg = "Web Development Tutorial"
// var string = strg.split(' ');
// var index = longestWord(string);
// document.write("<h1>String: " + strg + "<br>Longest word in the strin is: " + string[index] + "</h1>");

/* ================================Task#13=============================== */
// function findOccurances(str, occ){
//     var temp = RegExp(occ,'g')
//     return(str.match(temp)).length;
// }
// var string = "JSResourceS.com"
// var numOccur = findOccurances(string, 'o');
// document.write("<h1>Text: " + string + "<br>There are " + numOccur + " occurance(s) of word 'o'</h1>");

/* ================================Task#14=============================== */
// function calcCircumference(rad){
//     var circumference = 2*(22/7)*rad;
//     document.write("<h1>The circumference is " + circumference + "</h1>"); 
// }
// function calcArea(rad){
//     var area = (22/7)*(Math.pow(rad,2));
//     document.write("<h1>The area is " + area + "</h1>");
// }
// calcCircumference(25);
// calcArea(25);
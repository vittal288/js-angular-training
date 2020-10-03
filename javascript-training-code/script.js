// "use strict";
// // // ES 5 standard
// // // functional scope
// // var myName = 'student'; // string
// // var age = 32;// number
// // var dob = new Date(); // date
// // var areYouStudent = true; // variable
// // ////---------------

// // var myName,age, dob, address;

// // myName ='Hetal';
// // age = 25;
// // dob = new Date();
// // address = 'asd';
// // // -----

// // // ES 6 standards
// // let age = 30; // block scope
// // const PI = 3.215465; // functional scope

// // // global scope
// // var myName = 'Hetal';
// // const age = 32; // one time value , it will not change further
// // var timeOfBirth = null;
// // var hospitalName;
// // function sample(){// functional scope
// //    console.log(timeOfBirth);
// //     if(age === 32){ // block scope
// //         var country = 'USA';
// //         // age = 34;
// //         console.log('My Name is ' + myName + ' and age is ' + age);

// //     }

// //     console.log('Residing at ' + country);
// // }

// // sample();

// // javascript hoisting
// // global scope
// var myName = 'Hetal';
// var age;

// function firstFn(){
//     // console.log('My Name is 1', myName);
//     console.log('firstFn is called from global scope');
//     secondFn();
// }

// function secondFn(){
//     console.log('secondFn is called from block or functional scope');
//     // console.log('My Name is 2', myName);
//     // console.log('My age is', age);
// }

// // var, let, const, for, forin, if else, if else , function

// // break , case , catch , continue , debugger , default , delete , do , else , finally , for , function , if , in , instanceof , new , return , switch , this , throw , try , typeof , var , void , while , and with .

// // firstFn();
// // firstFn();
// // firstFn();
// // firstFn();

// console.log(~15);

// // global variable
// var message = "Hello";
// function say() {
//     // local variable
//     message = 'Hi';
//     console.log(message);
// }
// console.log(message);
// say();// Hi
// console.log(message);

// // Hello
// // Hi
// // Hi

// OPERATORS
// Assignment // =
// Arithmetic operator (+, -, *, /, %, Increment , Decrement )

// var x = 9; // number
// var y = 10; // string

// x +=5; // x  = x+5
// y -= 10; // y = y-10
// console.log(x) //
// console.log(y) //

//  var x  = 'Hello';
//  var y = 'Welocme';
//  console.log(x+" "+y); // Hello Welcome

// Comparison operator
// // ==, ===, !=, !==, >,<,>=,<=, ?

// var x = 10;
// var y = 10;
// if (x <= y) { // == (this only checks the value , it will not check the data type)
//   console.log("IF BLOCK");
// } else {
//   console.log("ELSE BLOCK");
// }

// ternary operator

// var x = 10;
// var y = 10;
// //  if(x === y){
// //     console.log('X is equal to Y');
// // }else{
// //     console.log('X is NOT equal to Y');
// //  }
// // x > y ? console.log('X is equal to Y') : console.log('X is NOT equal to Y');

// // condition  ? 'EXECUTE THIS BLOCK' : 'IF FAILS EXECUTE THIS';

// // x === 10 ? ++x : --x;
// // console.log(x);

// // x !== 10 ? y === 10 ? console.log('y is 10') : console.log('Y is not 10') : console.log('X is NOT equal to 10');

// // y is 10

// LOGICAL OPERATOR (&&, ||, !)
// var x = true;
// var y = false;

// var a = true;
// var b = false;

//  // AND operator :  true
// // if((x || y) || (a && b)){ // true || false
// //     console.log('IF BLOCK')
// // }else{
// //     console.log('ELSE BLOCK');
// // }

// if(!x){
//     console.log('IF')
// }else{
//     console.log('ELSE');
// }

// conditional statements
// if, else and if else and switch

// var x = 9;
// if (x === 10) { //
//   console.log("IF BLOCK1");
// } else if (x === 11) {
//   console.log("IF BLOCK2");
// } else if (x === 12) {
//   console.log("IF BLOCK3");
// } else {
//   console.log("DEFAULT BLOCK");
// }

// // switch statement to check more than 4

// var str = undefined;
// switch (str) {
//   case null:
//     console.log("SWITCH CASE 1");
//     break;
//   case undefined:
//     console.log("SWITCH CASE 2");
//     break;
//   case 12:
//     console.log("SWITCH CASE 3");
//     break;
//   case 13:
//     console.log("SWITCH CASE 4");
//     break;
//   case 15:
//     console.log("SWITCH CASE 5");
//     break;
//   default:
//     console.log("DEFAULT ONE");
// }

// primitive data types(object and array) and non primitive data types(string, number, date, null, undefined, boolean)

// var x = 10;
// console.log(x);
// x = 11;
// console.log(x);

// var obj = {};
// obj['name'] = 'name1';
// obj['name'] = 'name2';
// console.log(obj);

// var arr = [1,2,3,4];
// console.log(arr.length);
// var arr1 = [1,'2',true, new Date(), null, undefined];

// loops : do while, for loop, for in loop

// var str = "";
// var index = 0;
// do{
//   str += 'new number ' + index;
//   console.log(str);
//   index++;
// } while (index < 5);

// var numbersArr = [1,2,'3',4, 'my name'];

// // 5

// for(var i=0;i<=numbersArr.length;i++){
//     var item = numbersArr[i];
//     console.log(item);
// }

// var a = 10;
// var b = a;
// console.log(a === b);

// a = 20;
// console.log(a === b);

// var a  = [10]
// var b = a;
// console.log(a);
// console.log(b);
// console.log(a === b)

// a[0] = 20;
// console.log(a);
// console.log(b);
// console.log(a ===b);

// var x = {
//     a:{
//         b:2
//     }
// };

// var y = x;

// x =1 ;
// var z = y.a;
// console.log(y.a)
// y = 'something';
// z = null;
// console.log(z);

// function f() {
//     var x = {};
//     var y = {};
//     x.a = y;        // x references y
//     y.a = x;        // y references x

//     return 'azerty';
//   }

//   f();

// var a = new Array(1000000);
// console.log();

// Non primitive (object,array and function ) // mutable , speak pass by reference
// primitive datatypes (number, string, boolean, null, undefined) // non -mutable , pass by value

// var x = 10;
// var  y = x;
// console.log(x);
// console.log(y)
// console.log( x === y); // true
// console.log('-----------------------------');
// x = 20;
// console.log(x);
// console.log(y)
// console.log( x === y) // false

// var a  = [10];
// var b  = a;
// console.log(a);
// console.log(b);
// console.log(a===b); // true

// a[0] = 20;
// console.log(a);
// console.log(b);
// console.log(a===b); // true

// var arr = ["Hetal", true, "USA", new Date()];
// for (var i = 0; i < arr.length; i++) {
//   var item = arr[i];
//   console.log("Item--->", item);
// }

// // NOTE: Object does not have any length
// // for in loop
// var obj = {
//     name :'Hetal',
//     isStudent:true,
//     country:'USA',
//     DOB:new Date(),
//     address:{
//         street: 'Down town',
//         doorNo : 20,
//         state: 'virginia'
//     }
// };

// for(var key in obj){
//     var item = obj[key];
//    //  console.log(key ,'--->', item);
//    if(key === 'address'){
//        for(var prop in obj[key] ){
//            console.log(prop ,'--->',obj[key][prop])
//        }
//    }
// }

// // console.log(obj.length);
// // Loop control statements // break and continue 

// var arr = ["A", "B", "C", 1, 2, 3];

// for (var i = 3; i < arr.length; i++) {
//     if(typeof arr[i] == 'number'){
//         console.log(typeof arr[i], arr[i]);
//         continue;
//     }
// }


// function 
// var x = 10;
// var y = 20;
// console.log( x+y);

// function add(a, b) {
//   var sum = a + b;
//   console.log(sum);
//   function moreAdd(a, b) {
//     return a + b + 10;
//   }
//   return moreAdd;
// }

// var sum = add(2, 3);
// console.log(sum(10, 20));

// var add = function(a, b){
//     return a +b
// }
// var sum = add(2,3);
// console.log(sum);

// function setCookie(name, value){
//     document.cookie = name +'='+ value +'; Path=/;Expires=Thu, 04 Sep 2020 19:40:00 GMT;';
// }
// function deleteCookie(name) {
//     document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }

// setCookie('userInfo', 'asdqwe2312');
// // delete_cookie('userInfo');


// function strReturn(value){
//     return value + ' Welcome ';
// }



// var message  = strReturn('Hello ') + ' javascript training';
// console.log(message); 

// how to return an function from function 

// function add(a, b){
//     console.log(a+b);
//     return function(param){
//         console.log(param + ' Hello I have returned from main function');
//         return function(){
//             console.log('Hello........3rd level function')
//         }
//     }
// }

// add(2, 3)('Hello there')();


// how to pass function as argument to another function

// this concept used in functional programming in JS

// function add(a,b,fn){
//     var sum = a+b;
//     console.log('sum is', sum);
//     return fn;
// }

// add(2,3, function(){
//     console.log('invoked from main function')
// })();


// function add(a, b){
//     var sum;
//     return sum;
//     // 
//     sum = a+b;
// }

// var res = add(2,3);
// console.log('sum is ', res);


// function add(x,y){
//     if(x === undefined || x === null){
//         return;
//     }
//     return x+y;
// }

// console.log(add(null,'3'));

function bodyOnLoad(param){
    console.log('Hellooo' + param);
}

function onButtonClick(){
   // console.log('Login button is clicked');
}

function onMouseHoverOnBtn(){
    console.log('Hover event')
}

function onMouseOUtEvnt(){
    console.log('Mouse Out  event')
}

// function add() {
//     return [1 , 2];
// }
// var logoutBut = document.getElementsByTagName('button')[1];

// logoutBut.addEventListener('click', function(){
//         console.log('Event is attached from JS');
// });

// logoutBut.addEventListener('mouseover', function(){
//     console.log('Hover Event is attached from JS');
// });

// logoutBut.addEventListener('mouseout', function(){
//     console.log('Out Event is attached from JS');
// });

// var signInBtn = document.getElementsByClassName('signIn')[0];
// signInBtn.addEventListener('click', function(){
//     console.log('SIGN IN BUTTON IS CLICKED');
// });
// . ---> class 
// # --> id 

// var buttonClickFn = function(){
//     console.log('BUTTON IS CLICKED');
//     button.style.backgroundColor = 'red';
//     button.removeEventListener('click', buttonClickFn);
// } 


// var button = document.querySelector('#logOutBtn');
// button.addEventListener('click', buttonClickFn);


// DOM : document object model

// Event bubbling or Event Propagation or Event Delegation 

// const parentDiv = document.getElementsByClassName('parent')[0];
// parentDiv.addEventListener('click', function(){
//     console.log('parent div is clicked');
// })

// const childDiv1 = document.getElementsByClassName('child-1')[0];
// childDiv1.addEventListener('click', function(){
//     console.log('child 1 div is clicked');
// })


// const childDiv2 = document.getElementsByClassName('child-2')[0];
// childDiv2.addEventListener('click', function(event){
//     event.stopPropagation();
//     console.log('child 2 div is clicked');
// })

// cookies(HTML 4), sessionStorage and localStorage (HTML 5 API )

// function setCookie(name, value){
//     document.cookie = name +'='+ value +'; Path=/;Expires=Thu, 07 Sep 2020 19:40:00 GMT;';
// }
// function deleteCookie(name) {
//     document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }


// setCookie('userInfo','Password@213123');

// sessionStorage 

// function setSessionStorage(key, value){
//     sessionStorage.setItem(key,value);
// }

// function onClickSetSesssion(){
//     var key = 'userInfo';
//     var value = {
//         name:'Hetal',
//         address:'USA',
//         DOB: new Date()
//     }
//     setSessionStorage(key, JSON.stringify(value));
// }

// function deleteSession(key){
//     sessionStorage.removeItem(key);
// }

// function onClickSetLocalStorage(){
//     var key = 'userInfo';
//     var value = 'sadasd#jldjaldkjm23123k;l';
//     setLocalStoage(key, value);
// }

// function setLocalStoage(key, value){
//     localStorage.setItem(key, value)
// }

// function deleteLocalSt(key){
//     localStorage.removeItem(key);
// }

// function readMyInfo(){
//     const sessionInfo = sessionStorage.getItem('userInfo');
//     console.log('Session Info', JSON.parse(sessionInfo).name);

//     const localStorageINfo = localStorage.getItem('userInfo');
//     console.log('Local Info',localStorageINfo);
// }

// PAGE REDIRECTION 

// function redirectToPage(){
//     window.location.replace('http://127.0.0.1:5500/anotherpage.html');
// }

// function readURL(){
//     console.log(window.location.port);
//     // http://127.0.0.1:5500/sample.html
//     // protocol://hostname:port/
// }

// function refreshPage(){
//     window.location.replace(window.location.href);
// }

// setInterval(refreshPage, 3000); // 1000ms = 1sec 

// setInterval(funciton , delay)
// setTimeout(displayMessage, 5000);

// function displayMessage(){
//     console.log('FROM SET TIME OUT SOME MESSAGE');
// }

// function displayMessage1(){
//     console.log('FROM SET INTERNAL SOME MESSAGE');
// }

// setInterval(displayMessage1, 1000);

// Dialog boxes 
// 1. alert 
// 2. Confirmation 
// 3. Prompt 

// function openAlertBox(){
//     alert('Hello there , please provide some more information about you');
// }

// function openConfirmationBox(){
//     var _confirm = confirm('Are you sure , you want to submit this form ?'); // true or false 
//     if(_confirm){
//         console.log('yes user is confirmed');
//     }else{
//         console.log('yes user is not confirmed');
//     }

// }

// function openPromptBox(){
//     var _prompt = prompt('Please enter your password');
//     console.log('user entered value', _prompt);
// }


function printThis(){
    window.print();
}

// OBJECT 
// var rootObject = new Object();
var _rootObject = {
    firstName :'First Name',
    lastName:'Last Name',
    getFullName : function(){
        return this.firstName + ' ' + this.lastName
    }
}; // object literal 


// console.log(_rootObject.getFullName());

// var myFirstClass = function(){
//     // creating a way of private properties 
//     var privateProp = '1';
//     // this is the way we can create public property 
//     this.publicProp = 2;
// }

// var myObj = new myFirstClass();
// console.log(myObj.privateProp);

// // how to create a class in JS 
// var Car = function(){

//     var noOfEngines = 1;
//     var noOfCyliders = 4;
//     this.model = 'myModel';

//     var myPrivatePrp = function(){
//         console.log('Car Private method');
//     }

//     this.publicMethod = function(args){
//         return 'this is public method' + args;
//     }
// }
// // OOPS CONCEPT 
// // creating an instance of car class 
// var myCar = new Car();
// console.log('ACCESS PUBLIC PRP' , myCar.myPrivatePrp());

// type casting 

// var strVal = '20';
// console.log(strVal +20);
// var num = parseInt(strVal);
// console.log(num +20);


// var myNo = 20;
// console.log(myNo + 20);// addition 
// var str = myNo.toString();
// console.log(str + 20); // concat operator 

// var myStr = 'http://127.0.0.1:5500/sample.html';
// var splittedArr = myStr.split('//');
// console.log(splittedArr[0]);

// var myStr ='Welcome to JS training'; // JS array methods can be used on strings 
// Assignment 1 : what is the difference between button and input type button 
// Assignment 2 : Explore JAVASCRIPT array and strings methods 
// Assignment 3 : Create sample class called Home(and create your own private, publics properties and methods) and access public properties with class instance 
// var str1 = 'Hello ';
// var str2 = 'There';
// // var str = str1.concat(str2); // str1 + str2
// var str =  str1 + str2;
// console.log(str);

// var arr1 = [1,2,3]
// var arr2 = ['A','B','C'];
// // var arr = arr1.concat(arr2);
// var arr = arr1+arr2;
// console.log(arr);

// Assignment 4 : how to remove and add items to the array using splice method 
// Assignment 5:  how to remove duplicates from an array :
// givenArray  = [1,2,3,3,1,3,4,5]
// outputArray = [1,2,3,4,5]
// method name: removeDuplicates

// function removeDuplicates(arr){
//     // step 1 : check the length of an array , if length > 0
//     // step 2 : scan the array with for loop 
//     // step 3 : use your logic to remove duplicates 
//     // step 4 : return a duplicates free array 
// }

// var givenArray  = [1,2,3,3,1,3,4,5] // ['A','B','C','B','C'] ==> ['A','B','C']
// var outPutArr = removeDuplicates(givenArray);

// console.log(outPutArr) // [1,2,3,4,5]

// CONSTRUCTOR in JS: 
// PROTOTYPE : used to attach public/private properties to the existing class dynamically 

// var Person = function(firstName, lastName, hairColor, dob){
//     // public members (properties and methods)
    
//     // properties 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this.age = age;
//     this.hairColor = hairColor;
//     var _dob = dob;
//     console.log('INVOKED CONSTRUCTOR');


//     // methods are nothing but functions 
//     this.getAge = function() {
//         const year = new Date().getFullYear();
//         const age = year - dob; // 2020 -1990 : 30
//         return age;
//     }

//     // private member (properties and methods)
//     var personalInfo = 'asd123123';
// }

// // instantiating of class or creating object of the class 
// const student = new Person('Hetal','Patel', 'black', 1990);
// // console.log(student.firstName);

// console.log(student.firstName + ' is ' + student.getAge() +' years  old');

// // added getFullName method dynamically using prototype 
// Person.prototype.getFullName = function(){
//     console.log('THIS--->', this);
//     return this.firstName +' ' + this.lastName;
// }

// // dynamically added properties to the class using prototype 
// Person.prototype.address = 'USA';

// console.log('GLOBAL THIS SCOPE--->', this);
// console.log('FUll NAME is', student.getFullName());
// console.log('Address is ', student.address);


// // Assignment 6: How to add dynamic private properties and methods to class using prototype ?

// console.log('PAssword is ', student.personalInfo); // 

// // How to create HTML Elements dynamically and how attach events to them 

// var tempArr = [1,2,3,4];
// // you can your methods to any data type using prototype 

// // console.log(tempArr.funnyMethod());


// Array.prototype.funnyMethod = function(arr){
//     return this[0];
// }

// console.log(tempArr.funnyMethod()); // 1


// var alphabets = ['A','B','C']
// console.log(alphabets.funnyMethod()); // A


// x = 3.142;
// sad = 123;
// obj = {

// };
// asd = [
//     {
//     }
// ]
// console.log(x);

// samplefunction();

// function samplefunction(){
//     console.log('just console');
// }

// we can create any HTML elements through JAVASCRIPT;

// const _body = document.getElementsByTagName('body')[0]; // viewChild 
// const parentDiv = document.createElement('div');
// parentDiv.setAttribute('id', 'parentDiv');
// parentDiv.setAttribute('style', 'width: 100px; height: 100px;background-color:red;');
// _body.appendChild(parentDiv);

// const sampleBtn = document.createElement('button');
// sampleBtn.innerText = 'CLICK ME'; // inter polatin 
// sampleBtn.addEventListener('click', function(){
//     alert('USER IS CLICKED')
// });
// parentDiv.appendChild(sampleBtn);

// assignment : 1. create an parent div element through JS
                // 2. style using JS
                // 3. Create another child div and append to parent div
                // 4. Create input type button , label is LOGIN 
                // 5. attach an click event 
                // 6. Post clicking, change the lable to LOGOUT 

// constructing HTML TABLE section in JS with JSON data 
// const userList = [
//     {
//         firstName:'Hetal',
//         lastName :'Patel',
//         emailId:'hetail@gmail.com',
//         age:32
//     },
//     {
//         firstName:'Vittal',
//         lastName :'Kamkar',
//         emailId:'vittal@gmail.com',
//         age:32
//     },
//     {
//         firstName:'Elon',
//         lastName :'Nask',
//         emailId:'elon@gmail.com',
//         age:40
//     },
//     {
//         firstName:'Elon',
//         lastName :'Nask',
//         emailId:'elon@gmail.com',
//         age:40
//     },
//     {
//         firstName:'Elon',
//         lastName :'Nask',
//         emailId:'elon@gmail.com',
//         age:40
//     },
//     {
//         firstName:'Elon',
//         lastName :'Nask',
//         emailId:'elon@gmail.com',
//         age:40
//     },
//     {
//         firstName:'Elon',
//         lastName :'Nask',
//         emailId:'elon@gmail.com',
//         age:40
//     }
// ];



// const employees = [
//     {
//         employeeId : 123,
//         empName :'Hetal',
//         employeeStatus :'Active',
//         role:'Full Time'
//     },
//     {
//         employeeId : 345,
//         empName :'Vittal',
//         employeeStatus :'Active',
//         role:'Full Time'
//     },
//     {
//         employeeId : 234,
//         empName :'Elon',
//         employeeStatus :'In-Active',
//         role:'Contract'
//     },
//     {
//         employeeId : 456,
//         empName :'Jeff',
//         employeeStatus :'Active',
//         role:'Full Time'
//     }
// ];


// synchronous

// console.log('step 1');
// function add(a, b){
//     const sum = a+b;
//     console.log('SUM-->', sum);
// }
// // function invoke 
// add(2,3);

// console.log('step 3');



// console.log('1');
// const btn = document.getElementById('tempBtn');
// var buttonClickHandler = function(){
//     console.log('2 CLICKED');
// };
// btn.addEventListener('click', buttonClickHandler);
// console.log('3');

// console.log('1')
// var cb = function(){
//     console.log('2')
// }
// setTimeout(cb, 0);
// console.log('3')


// how to call REST API in JS // GET, POST, PUT,DELETE 

// XMLHTTPRequest 


// the topic IIFE (Immediate Invoked Function Expression)


// function someFnName(){
//     console.log('I am invoked ');
// }
// someFnName();


// IIFE
// vittal();

// var Car = function(){
//     this.wheels = 4;
// }

// var newCar = new Car();
// console.log(newCar.wheels);

// promise 
// function callCb(cb){
//     setTimeout(cb, 1000);
// }


// callCb(function(){
//     console.log('CB 1');
//     setTimeout(() => {
//         setTimeout(() => {
//             setTimeout(() => {
//                 setTimeout(() => {
//                     setTimeout(() => {
//                         setTimeout(() => {
//                             console.log('from 2nd cb');
//                     }, 2000);
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
//     }, 2000);
// });



// let promise = new Promise(function(resolve, reject){
//     let a = 1+2;
//     if(a === 4){
//         resolve('SUCCESS')
//     }else{
//         reject('ERROR');
//     }
// });



// promise.then(function(message){
//     console.log('Promise retuned messsage', message);
// }).catch(function(error){
//     console.log('Promise retuned error', error);
// });


// const promise1 = new Promise(function(res, rej){
//         setTimeout(function(){
//             res('promise 1 is resolved');
//         }, 1000)
// })

// const promise2 = new Promise(function(res, rej){
//     setTimeout(function(){
//         res('promise 2 is resolved');
//     }, 1000)
// })


// const promise3 = new Promise(function(res, rej){
//     setTimeout(function(){
//         res('promise 1 is resolved');
//     }, 1000)
// })

// Promise.all([promise1, promise2, promise3]).then(function(messages){
//     console.log('Resolving all promises', messages)
// })



// https://reqres.in/api/users?page=2

// console.time('LOG');
// function getEmployeeList(url, type, callback){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.responseType = type;
//     xhr.onload = function(){
//         callback(xhr.response);
//     }
//     xhr.send();
// }


// function displayUserList(response){  
//     const parsedData = JSON.parse(response);
//     generateTable(parsedData.data);
// }


// getEmployeeList(userListAPI,'text/json', displayUserList)


// var getBackEndData  = function(url, type){
//     return new Promise(function(resolve, reject){
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.responseType = type;
//         // on backend service success 
//         xhr.onload = function(){
//             // callback(xhr.response);
//             resolve(JSON.parse(xhr.response));
//         }

//         // on backend service error 
//         xhr.onerror = function(error){
//             reject(error);
//         }
//         xhr.send();
//     })
// }


// getBackEndData(userListAPI, 'text/json')
// .then(function(response){
//     console.log('PROMISE RESPONSE', response)
//     generateTable(response.data);
// })
// .catch(function(error){
//     console.log('PROMISE ERROR', error)
// });

// ES6 
// const userListAPI = 'https://reqres.in/api/users?page=2';

// fetch(userListAPI)
// .then(function(response){
//    const responsePromise = response.json();
//    responsePromise.then(function(data){
//      const userListData = data.data;
//      generateTable(userListData);
//    })
//    .catch(function(error){
//     console.log('Promise data-->', error);
//    })
// })
// .catch(function(error){
//     console.log('Error', error);
// })
// function generateTable(arr){
//     if(arr.length === 0){
//         return;
//     }
//     const tableHolder = document.getElementById('table-Holder');
//     const colNames = ['ID','First Name', 'Last Name' ,'Email', 'Picture'];
//     const table = document.createElement('table');
//     const thead = document.createElement('thead');
//     const tbody = document.createElement('tbody');
//     table.appendChild(tbody);

//     // generate columns 
//     for(var i = 0; i<colNames.length;i++){
//         const colName = colNames[i];
//         const th = document.createElement('th');
//         th.innerText = colName;
//         thead.appendChild(th);
//         table.appendChild(thead);
//     }

//     // generate rows 
//     for(var i=0;i<arr.length;i++){
//         const tr = document.createElement('tr');
//         tbody.appendChild(tr);
//         const eachUser = arr[i];

//         for(var key in eachUser){
          
//             // detect image URL 
//             if(key === 'avatar'){
//                 const img = document.createElement('img');
//                 img.src  = eachUser[key];
//                 tr.appendChild(img);
//             }else {
//                 const td = document.createElement('td');
//                 td.innerText = eachUser[key];
//                 tr.appendChild(td);
//             }
            
//         }
//     }
//     tableHolder.appendChild(table);
// }


// how to inject HTML string from javascript 

//  function btnClickEvent(){
//     console.log('BUTON IS CLICKED');
// }
// function createButton(buttonName){
//     // ES 5
//     // return '<button id="btnId" onclick="btnClickEvent()">' + buttonName+'</button>' 
//     //           + '<button id="btnId" onclick="btnClickEvent()">' + buttonName+'</button>';

//     return `
//         <div>
//             <button onclick='btnClickEvent()'>${buttonName}</button>
//             <button onclick='btnClickEvent()'>${buttonName}</button>
//             <button onclick='btnClickEvent()'>${buttonName}</button>
//             <hr>
//             <hr>
//             <hr>
//             <div>
//                 <button onclick="openAlertBox()">OPEN ALERT</button>
//                 <button onclick="openConfirmationBox()">OPEN Confirmation</button>
//                 <button onclick="openPromptBox()">OPEN Prompt</button>
//             </div>
//         </div>
//     `;
// }


// const parentDiv = document.getElementById('butttonCntr');
// const buttonStr = createButton('LOGIN');
// parentDiv.innerHTML = buttonStr;

// shallow and deep copy in javascript  : non primitive (array and object)

// const originalEmployee = {
//     name:'Hetal',
//     age:32,
// };

// // shallow copy
// // const duplicateEmployee = originalEmployee;
// // duplicateEmployee.name = 'Vittal';
// // console.log(originalEmployee);

// // deep copy 
// // const duplicateEmployee = {
// //     name : originalEmployee.name,
// //     age: originalEmployee.age
// // };
// // console.log(duplicateEmployee);
// // duplicateEmployee.name = 'Vittal';
// // console.log(duplicateEmployee);
// // // console.log(originalEmployee);


// // 2nd way of deep copy 
// const duplicateEmployee = JSON.parse(JSON.stringify(originalEmployee));
// duplicateEmployee.name = 'Vittal';
// console.log(originalEmployee);


// const arr =  'VITTAL';

// function reverseArray(arr){
//     console.log(arr);
// }

// reverseArray(arr);

// console.log('ORINGANL ARR -->', arr);

// bind call and apply : to change the reference of this object 

// console.log(this);

// const employee = {
//     firstName : 'Hetal',
//     lastName :'Patel',
//     getFullName: function(){
//         return this.firstName +' '+ this.lastName;
//     }
// }


// var _getFullName = function(param){
//     console.log('this ref', this);
//     console.log(this.getFullName() + param);
// }

// // bind method will return an function ()
// // _getFullName.bind(employee)();
// // call method will not return and function but accept parameters 
// // _getFullName.call(employee, ' residing at USA');
// _getFullName.apply(employee , ['1']);


// console.log('$VITTAL', $Vittal);

// ES5, ES6, ES7
// async and await (ES6)

// function getSomeData(params){
//     return new Promise(function(resolve, reject){
//         if(params === 'hetal'){
//             resolve('I have been resolved from promise')
//         }else{
//             reject('');
//         }
//     })
// }

// function doOtherFunctionality(promiseResp){
//     return new Promise(function(resolve, reject){
//         if(promiseResp !== ''){
//             resolve('I am resolved with param' , promiseResp)
//         }else{
//             reject('2nd promise could not resolved');
//         }
//     })
// }

// ES6 
// getSomeData('hetal')
// .then(function(response){
//     console.log('Promise Resp', response);
//     doOtherFunctionality(response)
//     .then(function(promise2nd){
//         console.log('Promise Resp', promise2nd);
//     }).catch(function(err){

//     })
// }).catch(function(error){
//     console.log('Promise Error', error);
// });

// use async and await to resolve a promises 


// ES7 or ES8 
// async function resolveMyPromise(){
//     try{
//         //-- resolve promise 1
//         const promiseResp = await getSomeData('headastal');
//         console.log('####', promiseResp);
//         //-- resolve promise 2
//         const anotherPromise = await doOtherFunctionality(promiseResp);
//         console.log('Promise is resolved ---> ', anotherPromise);
//     }catch(error){
//         console.log('ERROR-->', error)
//     }
// }
// resolveMyPromise();

// arrow function 

// getSomeData('hetal').then(funciton)
// arrowed function in ES6


// function someFunctionName(){
//       console.log(addES6(2,3));
// }

// // function add(a,b ){
// //     return a+b;
// // }


// var addES6 = (a,b ) => a+b;

// // arrow function 
// // var someFunctionName = () =>{
// //     console.log('CLICKED');
// // }




// function getSomeData(params){
//     return new Promise(function(resolve, reject){
//         if(params === 'hetal'){
//             resolve('I have been resolved from promise')
//         }else{
//             reject('');
//         }
//     })
// }




// var getSomeDataES6 = (params)=>{
//     return new Promise((resolve , reject)=>{
//         if(params === 'hetal'){
//             resolve('I have been resolved from promise')
//         }else{
//             reject('');
//         }
//     })
// }


// getSomeDataES6('hetal').then( resp =>{
//     console.log('ES6 promise response', resp);
// }).catch( err=>{
//     console.log('ES6 promise error', error);
// })


// spread operator ...

// let employee = {
//     firstName :'Hetal',
//     lastName :'Patel',
//     age:30
// }

// // Es5 
// var newEmployeEs5 = {
//     firstName : employee.firstName,
//     lastName : employee.lastName,
//     age : employee.age
// }

// console.log('ES5 op', newEmployeEs5)
// // ES6
// let newEmployeEs6 = {
//     ...employee
// }

// console.log('ES56 op', newEmployeEs6)

// var arr1 = ['1','2','3']
// var arr2 = ['A','B','C'];

// var newEs5Arr = arr1.concat(arr2);
// console.log('Es5',newEs5Arr);
// // Es6
// let newEs6Arr = ['new element',...arr1,...arr2, 'lastElement'];
// console.log('Es6',newEs6Arr);

// CLOSURE 
// function outside(){
//     // outer function properties methods 
//     let text = 'Welcome to JS training';
    
//     // inner function 
//     return function inside(){
//         console.log(text);
//     }
// }

// const realOutSide = outside();
// realOutSide();



/* eslint-disable */
// index.js
// var moment = require('moment');
import moment from 'moment';
import $ from 'jquery';

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

var name = "Jake", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

const dogs = ['scruffy', 'max', 'ranger'];

for (const dName of dogs) {
  console.log(dName);
}
console.log(dogs.length);
console.log(dogs.map(name => name.toUpperCase()).join(''));


// OBJECTS - old syntax
//
const person = new Object();
person.first = 'Jake';
person.address = new Object();
person.address.street = '123 Sesame St';
person.address.city = 'Ypsilanti';
console.log(person);
console.log(person.first);
console.log(person.address.street);
// using computer member access or computer property value syntax
// the computer prop value syntax is usefule
// if you want to dynamically create or assign
// variable names, for instance
const dynFirstname = 'first';
console.log('dynamic var names...');
console.log(person[dynFirstname]);

console.log('computer property value syntax');
console.log(person["address"]["street"]);


// OBJECT LITERAL SYNTAX
const vato = {
  firstName: 'Jake',
  lastName: 'Salazar'
};

function hola(nombre) {
  console.log(nombre.firstName);
}

// here we pass in the Object vato
hola(vato);
// we pass in an Object Literal on the fly
hola({
  firstName: 'Jacobo',
  lastName: 'Jimenez'
});



// Differences between Javascript Objects and JSON Data format
// Javascript has a built in JSON object with methods
// STRINGIFY: for turning Object Literals in valid JSON data format
// PARSE: for turning data into object format for access with dot notation or iteration
const objLiteral = {
  prop1: 'yes',
  prop2: 'no'
};

const jsonString = '{"prop3": "sorta", "prop4": "kinda"}';

// JSON property names must be double qouted
console.log(JSON.stringify(objLiteral));

const jsonVals = JSON.parse(jsonString);
console.log(jsonVals);
console.log(jsonVals.prop3);

const jsKeys = Object.keys(jsonVals);
console.log(jsKeys);
jsKeys.forEach(key => console.log(key));



// FUNCTIONS ARE OBJECTS!!!

function orale() {
  console.log('orale ese...');
}
// now we can add a property to our function
orale.pues = 'no mames guey!';
console.log(orale.pues);
console.log(orale());

orale.guey = function() {
  console.log('por? por pendejo..');
};

orale.guey();


// this is a function statement
// this is simply a statement
// just like an IF statement
// because it does not evaluate to a value
// during the creation phase of the
// Execution Context that is being produced
// by the Javascript Engine
function pizza(name) {
  console.log(`i am ${name} pizza.`);
}
pizza('pepparoni');

// this is a function expression
// produces a value because of = operator
const pizzaExp = function() {
  console.log('i am a pizza expression');
}
pizzaExp();


// passing functions around
function logMe(name) {
  // we execute this function by
  // passing a reference
  name();
}
// pass a function to the logMe() function
logMe(function() {
  console.log('i am a function passed to a function');
});




// 'this'
// UNDERSTANDING AND WITH "THIS"

function cd() {
  console.log(this);
  // this.myVariable = 'hello';
}

// cd();
// console.log(this);
// this is attached to the Global Object
// so "this" is also Global
// meaning if you attach a variable to it
// you can access it without dot notation
// console.log(myVariable);


const d = {
  name: 'd object',
  log: function() {
    // this is to make up for a bug
    // where the value of 'this' is lost once
    // we create another execution context
    // when we declare the muteAgain function expression
    // so we must teleport 'this'
    let self = this;
    // notice reference to 'this' and = operator instead of : colon
    self.name = 'we just mutated a prop within our d object';
    console.log(self);

    const muteAgain = function(newVal) {
      self.name = newVal;
    };
    muteAgain('we have mutated AGAIN!');
    console.log(self);

  }
};

d.log();




// ARRAYS


// It can hold, in the same Array:
// a number
// a boolean
// an object
// a function
// a string

const crazyArray = [
  1,
  true,
  {
    name: 'Jacobo',
    age: 44
  },
  function yo(name='Vicente') {
    // name = name || 'Vicente';
    const greeting = 'Hello';
    console.log(`hello ${name}`);
  },
  'i am crazy'
];
console.log(crazyArray);

// lets call the yo function
// call the array using parethesis without a parameter
crazyArray[3]();
// call the array using another array value
crazyArray[3](crazyArray[2].name);



// PARAMETERS IS SAME AS 'ARGUMENTS'
// 'arguments' is a reserved keyword in Javascript
// it is Array-like, but not an array

function taco(filling, tortilla, salsa) {
  salsa = salsa || 'verde';

  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[2]);
}
taco();
taco('beef', 'maize', 'ranchera');
taco('chicken', 'harina', 'red');


// Function overloading
// or calling one function that calls another
// and the first one called passes additional arguments

function sayWhatUp(first, last, language) {
  language = language || 'es';

  if (language === 'es') {
    console.log(`Hola ${first} ${last}`);
  }
  if (language === 'en') {
    console.log(`Hi ${first} ${last}`);
  }

}

function sayWhatUpSpanish(first, last) {
  const defaultFirst = 'Jake';
  const defaultLast = 'Salazar'
  sayWhatUp(defaultFirst, defaultLast, 'es');
}

sayWhatUpSpanish();


// IIFE
// Immediately Invoked Function Expressions
// removes code from Global Execution Context

// it does not have to be called to be invoked
// just like function statement, which must be called
// when a browser loads, the IIFE is run immediately
(function() {
  console.log('i am an IIFE...');
}());

// this is also an IIFE
const cosa = function(thing) {
  console.log('this ' + thing);
}('is cool...');

function mira(nombre) {
  console.log(`what's up ${nombre}`);
}('Carlos')



// CLOSURES in Javascript
// Closure keeps scope intact
// Closure provides access to future references
// to variables whose execution context has
// been popped off the execution stack
// The anon function returned still
// has access to the Scope Chain and
// its Outer Environment (outer variables, etc)
// which includes memory spaced allocated
// for the 'man' variable
// this is similar to pattern called
// Function Factory: a function that returns
// a function with access to previous
// variables in memory (closure) of their execution context
function gender(man) {
  return function (woman) {
    console.log(`${man} ${woman}`);
  };
}
// this is one way to call a function
// that returns a function
gender('Jake')('Ana');

// or you can set it to a variable
const human1 = gender('Adam');
human1('Eve');



// build a function that
// generates 3 functions in a loop
// the functions should be stored in an Array
// the function should return the array
// invoke the builder function by assignment
// to a variable, then use that variable
// to call each function that was created

function buildFunctions() {
  const arrOfFunctions = [];

  // switching between VAR and LET
  // provides different values
  for (var i = 0; i < 3; i++) {
    arrOfFunctions.push(function() {
        console.log(i);
      });
  }

  return arrOfFunctions;
}

const genFuncs = buildFunctions();
// the builder function returns an array
// so we can access each one
// and invoke the functions that were generated
genFuncs[0]();
genFuncs[1]();
genFuncs[2]();



// CALLBACK FUNCTIONS
// A callback function is a
// function you give to another function
// to be run when the receiving function is done
function howAreYou(callback) {
  console.log('How are you callback?');
  callback();
}

function imGreat() {
  console.log('I am GREAT, thanks');
}

howAreYou(function() {
  console.log('I am fine, thanks.');
});

// passing object by-reference
howAreYou(imGreat);



// CALL  APPLY  BIND
//

const burger = {
  name: 'texas burger',
  size: 'large',
  cost: 5,
  getBurgerInfo: function() {
    const burgerInfo = `This is a ${this.size} ${this.name}.`;
    return burgerInfo;
  }
};

console.log(burger.getBurgerInfo());

const sayBurger = function(val1, val2) {
  console.log(`Say it: ${this.getBurgerInfo()}`);
  console.log(`Arguments: ${val1} and ${val2} costs: $${this.cost}.`);
  console.log('----------------------');
};


// allows us to call a method in another Object
// by binding 'this' context to the function call
const bindBurger = sayBurger.bind(burger);
bindBurger();
bindBurger('jalapeno', 'mustard');

// call accepts a string of arguments
sayBurger.call(burger, 'pickles', 'bacon');
// apply accepts an array of arguments
sayBurger.apply(burger, ['onions', 'tomato']);


// example of borrowing methods or borrowing functions
const michiganBurger = {
  name: 'michigan burger',
  size: 'medium',
  cost: 2
};

console.log(burger.getBurgerInfo.apply(michiganBurger));


// CURRYING FUNCTIONS
// Creating a copy of a function but
// with some preset parameters; useful
// for mathematical situations
// bind does not call or envoke a function,
// it simply makes a copy and SETS PERMANENT
// paramenters in memory when the Bind copy is made

function multiply(a, b) {
  return a * b;
}

// here we set a permanent parameter
// think of this as a way to initialize
// or preload the multiply() function with
// the first parameter, the number 2
const multiplyByFour = multiply.bind(this, 2);

// now we can pass in the second parameter
console.log(multiplyByFour(5));


// FUNCTIONAL PROGRAMMING
// Take advantage of Javascript first-class functions

function mapForEach(arr, fn) {
  const arrNums3 = [];

  for (let i = 0; i < arr.length; i++) {
    arrNums3.push(fn(arr[i]));
  }

  return arrNums3;
}

const arrNums1 = [1, 2, 3];

const arrNums2 = mapForEach(arrNums1, function(item) {
 return item * 2;
});
console.log(arrNums2);

// this function arragement is the
// same as the one below it
const arrNums2a = mapForEach(arrNums1, function(limiter, item) {
  return item > limiter;

}.bind(this, 1));
console.log(arrNums2a);


// same function arrangement as above
// but with callback function separated out
const defaultLimiter = function(limiter, item) {
  return item > limiter;
};

const arrNums2b = mapForEach(arrNums1, defaultLimiter.bind(this, 1));
console.log(arrNums2b);

// of course, we can also accomplish this with a map()
// map() returns the value CREATED by the testing function
const arrNums1Twice = arrNums1.map(index => index > 1);
console.log(arrNums1Twice);

// filter() simply returns the value if it passes the testing function
const arrNums1Filter = arrNums1.filter(index => index > 1);
console.log(arrNums1Filter);




// PROTOTYPES
// EVERYTHING CAN HAVE A PROTOTYPE

// the Prototype for each kind of
// Object below has access to Methods
// specific to its type
// function has bind, call, apply etc
// array has push, sort, reduce, filter, map etc

const a = {};
const b = function() {};
const c = [];




const robot1 = {
  name: 'Juan',
  type: 'sentient'
};

// because references to Properties and Methods
// scale up the Prototype chain, you can be
// specific about what your reference should target
// in this case, we are check if the parent Object
// itself has the properties we are looping thru
for (let prop in robot1) {
  if (robot1.hasOwnProperty(prop)) {
    console.log(`${prop}: ${robot1[prop]}`);
  }
}






// CREATING OBJECTS IN JAVASCRIPT
// this syntax allows you to create
// an object using a function and
// using the 'new' operator keyword
// this is know as a Function Constructor
// you can 'construct' an object by using a function
// the "new" keyword set the 'this' value to the
// new empty object you have just created

// as an unwritten best practice we start
// our Constructors with a capical letter
// to distinguish them from regular functions

function Tortas(type) {
  console.log(this);
  this.shell = 'bread';
  this.size = 'large';
  this.type = type || 'chicken';
  console.log('this function has been invoked');
}

const beefTorta = new Tortas('beef');
console.log('what kind of torta?');
console.log(beefTorta);
console.log(beefTorta.size);


// Function Constructors & the PROTOTYPE
//

// add a Method
Tortas.prototype.addCheese = function() {
  console.log('adding cheese...');
};

beefTorta.addCheese();

// ES6 syntax with Arrow Functions

Tortas.prototype.addSalsa = () => {
  return `adding salsa`;
};
console.log(beefTorta.addSalsa());



// ANOTHER WAY TO CREATE AN OBJECT
// ANOTHER WAY TO CREATE AN OBJECT
// ANOTHER WAY TO CREATE AN OBJECT

// we are creating an Object here
// that will act as a Function Constructor
// when used in conjunction with Object.create()
// it will serve as the Prototype for all
// Objects it is used to create
const cerveza = {
  name: 'Default',
  size: '12 ounces',
  greet: function() {
    return `Hi, my name is ${this.name}`;
  }
};


cerveza.burp = function() {
  return `i ${this.name} have burpppeeedddd..`;
}

// now create a new Object using Object.create()
const dosxx = Object.create(cerveza);
console.log(dosxx);
console.log(dosxx.greet());
dosxx.name = 'Dos XX';
console.log(dosxx.greet());

dosxx.drink = function() {
  return 'i have taken a drink...';
}

console.log(dosxx.drink());
console.log(dosxx.burp());












// CREATING A MINI FRAMEWORK
//


(function(global, $) {

  const Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  const supportedLangs = ['en', 'es'];

  const greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  const formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  const logMessages = {
    en: 'Logged in..',
    es: 'inicio sesion'
  };

  Greetr.prototype = {
    fullName: function() {
      return `${this.firstname} ${this.lastname}`;
    },
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "invalid language";
      }
    },
    greeting: function() {
      return `${greetings[this.language]} ${this.firstname}!`;
    },
    formalGreeting: function() {
      return `${formalGreetings[this.language]} ${this.fullName()}!`;
    },
    greet: function(formal) {
      let msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }
      if (console){
        console.log(msg);
      }
      // 'this' refers to calling object at execution time
      // returning 'THIS' will make this method Chainable
      return this;
    },
    log: function() {
      if (console) {
        console.log(`${logMessages[this.language]} : ${this.fullName()}`);
      }
      return this;
    },
    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw "jQuery is not loaded...";
      }
      if (!selector) {
        throw "missing jQuery selector...";
      }
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      // use jQuery
      $(selector).html(msg);

      return this;

    }


  }; // ENDS: Greetr.prototype = {



  Greetr.init = function(firstname, lastname, language) {
    let self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
    // hava constructor check if language passed in is supported
    self.validate();
  };

  Greetr.init.prototype = Greetr.prototype;

  // so now we must expose our Greetr object
  // to the Global Object
  // and we want to be able to reference it as
  // Greetr and G$ so we must set two variables
  // on the Global Object
  global.Greetr = global.G$ = Greetr;

}(window, $));



const g = G$('Jake', 'Salazar');
g.greet().setLang('es').greet(true).log();

$('#login').click(function() {
  var loginGrtr = G$('Juan', 'Valdez');
  $('#loginDiv').hide();
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});





//        DOM
//        DOM
//        DOM
//        DOCUMENT OBJECT MODEL
//        DOM
//        MANIPULATING ELEMENTS


// OLDER METHODS OF SELECTING DOM ELEMENTS
//
// document.getElementById('elementid');
    // selects an single specific element with a given id attribute value
    // RETURNS: an element object, or null if no match was found
    //          which then allows you to manipulate the
    //          properties and values of that element Object

// document.getElementByClassName();

    // RETURNS:

// document.getElementsByTagName('p');
    // select all <p> elements in the DOM
    // RETURNS: an array containing all the elements on the page of a given type

// document.getElementsByName();
    // buggy:
    // RETURNS: a NodeList Collection of elements
    // elements is a live NodeList Collection, meaning
    // it automatically updates as new elements with the
    // same name are added to/removed from the document.
    // 'name' is the value of the name Attribute of the element(s).
    // as in name="firstName"


// the MODERN recommended approach to selecting elements
// in the DOM is to use:
//
// you can select elements using CSS selectors.
//
// document.querySelector('a');
    // will match the first <a> element that appears in the document.
    // RETURNS:

// document.querySelectorAll('a');
    // will match every element in the document that matches the selector,
    // and stores references to them in an array-like object called a NodeList.
    // RETURNS:


// WORKING WITH CLASS NAMES
// WORKING WITH CLASS NAMES
// WORKING WITH CLASS NAMES

// will return a STRING of class names
// (readonly) you cant change them like get/set
// document.querySelector(".my-classs").className;

// will return an array of class names
// (readonly) you cant change them like get/set
// document.querySelector(".my-classs").classList;

// will give you the first class name in the array
// document.querySelector(".my-classs").classList[1];

// classList has Methods you can use
// add(), remove(), item(index), toggle(), contains(string), replace(oldClass, newClass)
// document.querySelector(".my-classs").classList.add('new-class');


const navClasses = document.querySelectorAll('.nav')[0].classList;
console.log(navClasses.add('baller'));
console.log('contains baller: ' + navClasses.contains('baller'));

console.log(navClasses);



// WORKING WITH ATTRIBUTES
// WORKING WITH ATTRIBUTES
// WORKING WITH ATTRIBUTES

// const myEl = document.querySelector('.cta a');
// el.attributes;
// el.hasAttribute();
// el.getAttribute();
// el.setAttribute();
// el.removeAttribute();


// change all links so they open in a new tab
// check if they have a target attribute
// if not, set it to "_blank"

const allPageLinks = document.querySelectorAll('a');
console.log(allPageLinks);
console.log(allPageLinks.length);

for (let i = 0; i < allPageLinks.length; i++) {
  if (allPageLinks[i].hasAttribute('target')) {
    console.log(allPageLinks[i].getAttribute('target'));
  }
}




// ELEMENT CREATION METHODS
//

// first create the element in memory
// document.createElement();
// create the text node in memory
// then add the text node to the element
// document.createTextNode();
// finally append it to the DOM
// el.appendChild();

const gContainer = document.querySelector('.grant-container');
console.log(gContainer);
// const gParas = gContainer.querySelector('p');
const gPText = gContainer.querySelector('p').lastChild.textContent;
console.log(gPText);

const smEl = document.createElement('small');
const smText = document.createTextNode(gPText);
// const smText = 'i am new text';
// add text to newly created element
smEl.appendChild(smText);
console.log(smEl);
// now append it to our parent element
gContainer.appendChild(smEl);




// WORKING WITH STYLES
// WORKING WITH STYLES
// WORKING WITH STYLES

// to get inline css styling for an element
// this is the style="" attribute, not style applied from stylesheet)
const linkSty = document.querySelector('.nav-item a').style;
console.log(linkSty);

// change link color to green
linkSty.color = 'yellow';
// for css properties with hyphens, Javascript turns into camelCase
linkSty.backgroundColor = 'red';
// to change multiple properties at once use cssText
linkSty.cssText = 'height: 2em; padding:24px; margin-right:3em; background-color: red; color: yellow;';


// or you can also use setAttribute
const linkSty1 = document.querySelectorAll('.nav-item a')[1];
linkSty1.setAttribute('style', 'padding:16px; background-color:pink; color: purple;');





// EVENTS
// EVENTS
// EVENTS
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/API/Event

// there are:
// BROWSER LEVEL EVENTS
//  load, error, online/offline, window resize, scroll
// DOM LEVEL EVENTS
//  click, focus, blur, reset/submit, mouse events,

function showMenu(e) {
  e.preventDefault();
  dMenu.classList.toggle('hide');
}

const dMenuLink = document.querySelector('.dropdown-toggle');
const dMenu = document.querySelector('.audience-nav-dropdown');

console.log(dMenu);
// add hide class onload
dMenu.classList.add('hide');

dMenuLink.addEventListener('click', showMenu, false);


dMenuLink.addEventListener('click', function() {
  console.log('i have been clicked ' + Math.random());
}, false);










// LAB time
// create a typing test timer



const typeTest = {
  testArea: document.querySelector('#test-area'),
  originText: document.querySelector('#origin-text p').innerHTML,
  resetButton: document.querySelector('#reset'),
  theTimer: document.querySelector('.timer'),
  timer: [0,0,0,0],
  interval: null,
  timerRunning: false,
  leadingZero: function (time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
  },
  runTimer: function () {
    let currentTime = this.leadingZero(this.timer[0]) + ":" + this.leadingZero(this.timer[1]) + ":" + this.leadingZero(this.timer[2]);
    this.theTimer.innerHTML = currentTime;
    this.timer[3]++;

    this.timer[0] = Math.floor((this.timer[3]/100)/60);
    this.timer[1] = Math.floor((this.timer[3]/100) - (this.timer[0] * 60));
    this.timer[2] = Math.floor(this.timer[3] - (this.timer[1] * 100) - (this.timer[0] * 6000));
  },
  spellCheck: function () {
    let textEntered = this.testArea.value;
    let originTextMatch = this.originText.substring(0,textEntered.length);

    if (textEntered == this.originText) {
        clearInterval(this.interval);
        this.testArea.style.borderColor = '#0cda52';
        console.log('color 429890');
    }
    else {
        if (textEntered == originTextMatch) {
            this.testArea.style.borderColor = '#65CCf3';
            console.log('color 65CCf3');
        }
        else {
            this.testArea.style.borderColor = '#f34567';
            console.log('color E95D0F');
        }
    }
  },
  start: function () {
    let textEnterdLength = this.testArea.value.length;

    if (textEnterdLength === 0 && !this.timerRunning) {
        this.timerRunning = true;
        this.interval = setInterval(function() {
          this.runTimer();
        }.bind(this), 10);
    }
  },
  reset: function () {
    clearInterval(this.interval);
    this.interval = null;
    this.timer = [0,0,0,0];
    this.timerRunning = false;
    this.testArea.value = '';
    this.theTimer.innerHTML = '00:00:00';
    this.testArea.style.borderColor = 'grey';
  },
  init: function () {
    this.testArea.addEventListener('keypress', this.start.bind(this), false);
    this.testArea.addEventListener('keyup', this.spellCheck.bind(this), false);
    this.resetButton.addEventListener('click', this.reset.bind(this), false);
  }

};

// to initiate and access this object you can either
// run the init() method
// or
// use regular dot notation for the object
// MOST IMPORTANT - dont forget to bind(scope) on the methods and setInterval

// OPTION 1
// typeTest.init();

// OPTINO 2
typeTest.testArea.addEventListener('keypress', typeTest.start.bind(typeTest), false);
typeTest.testArea.addEventListener('keyup', typeTest.spellCheck.bind(typeTest), false);
typeTest.resetButton.addEventListener('click', typeTest.reset.bind(typeTest), false);


const myVariable = document.querySelectorAll('p');
console.log(myVariable);
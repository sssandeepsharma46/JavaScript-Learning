//alert("script is loaded");
//Object in Javascript can be created in 2 way
//a. Using Object Literal. b. Using Object constructor
//1. Lets create object by Object literal
let person = {
    firstName: 'sandeep',
    lastName: 'sharma',
    age: 29,
    Address: {
        addressLine1: 'Banjara Layout',
        addressLine2: 'Hormavu',
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India'
    },
    profession: 'Software Developer',
    getFullName: function() { return this.firstName + ' ' + this.lastName; }
}
console.log('FullName:' + person.getFullName());
console.log('Age:' + person.age);
console.log('Address:' + person.Address.city + ', ' + person.Address.country);

//2. Lets create object by Object constructor
function Person(firstname, lastname, city, country) {
    this.firsName = firstname;
    this.lastName = lastname;
    this.getFullName = function() { return this.firsName + ' ' + this.lastName; }
    this.Address = new Address(city, country);

}

function Address(city, country) {
    this.city = city;
    this.country = country;
    this.getCompleteAddress = function() { return this.city + ', ' + this.country; }
}
let person1 = new Person('Raju', 'Raj', 'Mumbai', 'India');
let person2 = new Person('Prabhat', 'Singh', 'Patna', 'India');
console.log(person1.getFullName());
console.log(person1.Address.getCompleteAddress());
console.log(person2.getFullName());
console.log(person2.Address.getCompleteAddress());

//3. Lets create object by Object.create method.
let coder = {
    isStuding: 'not',
    introduceMe: function() {
        console.log(`My Name is ${this.name} and I ${this.isStuding} studying.`);
        //console.log(`My name is ${this.name}. Am I  
        // studying ? : $ { this.isStudying }.
        //`)
    }
}
let me = Object.create(coder);
me.name = "Sandeep";
me.introduceMe();

//Encapsulation in Javascript
class Vehicle {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    addAddress(engine) {
        this.engine = engine;
    }
    getDetails() {
        console.log(`Vehicle name:${this.name}, Model: ${this.model} and Engine details:${this.engine}`);
    }
}
let HeroHonda = new Vehicle('HeroHonda', 2020);
HeroHonda.getDetails();
HeroHonda.addAddress('V2 255 CC');
HeroHonda.getDetails();

//Promise example
let newsAPIURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=be167aaa10c64796a6a36823468d2f67';

//let promise = fetch(newsAPIURL);
//fetch(newsAPIURL).then(gotData).catch(gotError);

// fetch(newsAPIURL).then((response) => response.json())
//     .then(data => data.articles.forEach(articles => console.log(articles.description)))
//     .catch((error) => console.log(error));


//promise.then(gotData);
//promise.catch(gotError);

function gotData(data) { console.log(data); }

function gotError(err) { console.log(err); }

//Creating own promises
function divide(a, b) {
    return new Promise(function(resolve, reject) {
        if (b === 0) {
            reject('Can not divide by zero.');
            return;
        }
        resolve(a / b);
    });
}
divide(10, 2).then((result) => { console.log(result); /*return result;*/ })
    .then((result) => { if (result === 5) { console.log("Bingo, you got reslut 5") } })
    .catch((error) => console.log(new Error(error)));
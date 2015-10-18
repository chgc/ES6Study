/*
* String templates
*/

// old
function sayHello(name, surname){
    console.log('hello there ' + name + ' ' + surname + ', the time is now ' + new Date());
}

sayHello('kevin','Yang');

// new way 
function sayHello_new(name, surname){
    console.log(`hello there ${name} ${surname}, 
    the time is now ${new Date()}`);
}

sayHello_new('kevin', 'Yang');

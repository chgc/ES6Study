/*
* Let scope
*/

// old
// var 
//     name = 'Fido',
//     breed = 'schnauzer',
//     owners = ['Hendrik', 'Alice']
// ;
// 
// console.log(name + '(' + breed + '):');
// 
// for(var i = 0; i < owners.length; i++){
//     var name = owners[i];
// 
//     console.log('Owner ' + name);
// }
// 
// console.log(name);
//output
// Fido(schnauzer):
// Owner Hendrik
// Owner Alice
// Alice (被改變掉了)



// new way 
let fname = 'Fido',
    breed = 'schnauzer',
    owners = ['Hendrik', 'Alice']
;

console.log(`${fname} (${breed}):`);

for(let i = 0; i < owners.length; i++){
    let fname = owners[i];
    console.log(`Owner ${fname}`);
}


console.log(fname);
// output:
// Fido (schnauzer):
// Owner Hendrik
// Owner Alice
// Fido

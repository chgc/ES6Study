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
var fname = 'Fido', breed = 'schnauzer', owners = ['Hendrik', 'Alice'];
console.log(fname + " (" + breed + "):");
for (var i = 0; i < owners.length; i++) {
    var fname_1 = owners[i];
    console.log("Owner " + fname_1);
}
console.log(fname);
// output:
// Fido (schnauzer):
// Owner Hendrik
// Owner Alice
// Fido

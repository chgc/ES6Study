/*
* Arrow scope
*/

// Old
function old_sayHello(){
    var _this = this;

    _this.name = 'hendrik';

    setTimeout(function(){
        console.log('hello ' + _this.name + ' (old)');
    }, 1500);
}

old_sayHello();

// New
// ES6可以用`來包文字, 在字串中可以用${變數} 來表示
function new_sayHello(){
    this.name = 'hendrik';

    setTimeout(()=>{
        console.log(`hello ${this.name} (new)`);
    }, 1500);
}

new_sayHello();

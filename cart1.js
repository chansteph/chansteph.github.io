console.log ('Shopping Cart');

var cart = ['apple' , 'orange' , true, 10, ['fish' , 'chicken']];

console.log('cart: ', cart);
console.log(cart[0])
console.log(cart[1])
console.log(cart[2])
console.log(cart[3])
console.log(cart[4][1])

var apple = cart[0];
var elem = cart[4];

console.log('from elem = ', elem[1]);

console.log('array size: ', cart.length);
console.log('array size of cart[4]: ', cart[4].length)



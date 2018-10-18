var base = parseInt(prompt('Add an item'))

var fruits = [];
var item = "";
while (item != "done") {
    item = prompt('Add an item')
    if ((item != null) && (item !="")) {
    fruits.push(item);
    }
}
fruits.pop();
console.log('fruits:' , fruits);

//var fruits = [];
// var item = "";
//while (item != "done") {
   // item = prompt('Add an item')
   // if ((item != null) && (item !="")) {
    //fruits.push(item);    
console.log('fruits: ', fruits);
// console.log('array size: ', fruits.length);
console.log('The contents of your cart are: ', fruits);


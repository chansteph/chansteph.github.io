var mkBottle = function() {
    var imgElem = document.createElement('img');
    imgElem.src = 'images/beer.png';
    return (imgElem);
}

var mkBottles = function(num) {
    //create the div
    var divElem = document.createElement('div');
    while (num > 0) {
        num -= 1;
        var beerImg = mkBottle();
        divElem.appendChild(beerImg);
    }
    return (divElem);
}

var mkTitle = function(text) {
    // <h1></h1>
    var h1Elem = document.createElement('h1');
    // <h1>text</h1>
    h1Elem.textContent = text;
    return (h1Elem);
}

//create a button
var button = document.querySelector('#anotherLine');
var counter = 0;
var updateBottle = function(Bottles) {   
    var img = document.querySelector('#beer')
    img.src = `images/beer.png`;
}
    button.addEventListener(
        'click', 
        function() {
            console.log('>>> clicked:',beer);
            document.body.appendChild(mkBottles(beer));
            beer -= 1;
    }
);
//Create an <img>
var bodyElem = document.querySelector('body');

//var title = mkTitle('99 Bottles of Beer')
//document.body.appendChild(title);

/*
var beer = 99;
while (beer >= 1) {
    var bottles = mkBottles(beer);
    document.body.appendChild(bottles);
    beer -= 1;
}
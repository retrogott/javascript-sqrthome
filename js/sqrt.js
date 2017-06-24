var a = Number(prompt('Enter "a" (must be not a zero)'));
var b = Number(prompt('Enter "b"'));
var c = Number(prompt('Enter "c"'));

if (a == 0) {
    a = 1;
}

document.write('a = ' + a + '<br>');
document.write('b = ' + b + '<br>');
document.write('c = ' + c + '<br>' + '<br>');

function discriminant () {
     var d = b * b - 4 * a * c;
     return d;
}

document.write('Discriminant: (' + b + '*' + b + '-4*' + a + '*' + c + ')' + ' = ' + discriminant() + '<br>' + '<br>');

if (discriminant() < 0) {
    document.write('Equaction has no sulution');
} else if (discriminant() == 0) {
    var s = -b / (2 * a);
    document.write('One solution: ' + s);
} else{
    var sqrt = Math.sqrt(discriminant());
    var x1 = (-b + sqrt) / (2 * a);
    var x2 = (-b - sqrt) / (2 * a);
    document.write('We have got two solutions: ' + x1 + ', ' + x2);
}
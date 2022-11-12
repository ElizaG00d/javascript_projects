document.write(typeof "Letters");

document.write(typeof 17);

function nan() {
    document.getElementById("Test").innerHTML = 0/0;
} //result should be nan//

function check() {
    document.getElementById("nan-test").innerHTML = isNaN('A string');
}

document.write(1.8E308);
document.write(-1.8e308);
//display infinity and -infinity//

document.write(20 > 10);
//operator boolean, tru/false//

console.log(4*5);
//perform math in console//

console.log(40<60);
//display false w boolean in console//

console.log(20==20);
//double equal//

Y = 35;
X = 35;
document.write(X === Y);
//=== compares both value and type//

M = "Chewsday";
N = 17;
document.write(M === N); //f w/ diff type/value//

B = "Fourty-Five";
C = 45;
document.write(B === C); //f w/ diff data-type, same value//

K = "Ya yeet";
L = "Ya-yeet";
document.write(K === L); //f w/ same data-type, diff value//

//logic operators//

document.write(6<9 && 8<9); //AND tru//
document.write(9<6 && 8>6); //AND false//

document.write(7>6 || 6>9); //OR tru//
document.write(7>6 || 6<10); //OR false//

function not() {
    document.getElementById("nope").innerHTML = !(60>90);
} //NOT false//

function not2() {
    document.getElementById("nope2").innerHTML = !(90>60);
} //NOT tru//



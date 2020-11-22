function calculate () {
    let a = Number(document.getElementById("number-a").value);
    let b = Number(document.getElementById("number-b").value);
    if (a == "" || b == "") {
        alert("You should put two numbers!")
    } else {
        add(a, b);
        sub1(a, b);
        sub2(a, b);
        multiply(a, b);
        div1(a, b);
        div2(a, b);
        square1(a, b);
        square2(a, b);
    }
}

function add (a, b) {
    let sum = a + b;
    document.getElementById("sum-result").value = sum.toFixed(2);
}

function sub1 (a, b) {
    let subOneResult = a - b;
    document.getElementById("sub1-result").value = subOneResult.toFixed(2);
}

function sub2 (a, b) {
    let subTwoResult = b - a;
    document.getElementById("sub2-result").value = subTwoResult.toFixed(2);
}

function multiply (a, b) {
    let multi = a * b;
    document.getElementById("multi-result").value = multi.toFixed(2);
}

function div1 (a, b) {
    let divOneResult = a / b;
    document.getElementById("div1-result").value = divOneResult.toFixed(2);
}

function div2 (a, b) {
    let divTwoResult = b / a;
    document.getElementById("div2-result").value = divTwoResult.toFixed(2);
}

function square1 (a, b) {
    let squareOneResult = a * a;
    document.getElementById("square-a-result").value = squareOneResult.toFixed(2);
}

function square2 (a, b) {
    let squareTwoResult = b * b;
    document.getElementById("square-b-result").value = squareTwoResult.toFixed(2);
}

document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("number-b").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calculate();
    }
});

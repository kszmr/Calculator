function calculate () {
    let a = Number(document.getElementById("number-a").value);
    let b = Number(document.getElementById("number-b").value);
    add(a, b);
    sub1(a, b);

}

function add (a, b) {
    let sum = a + b;
    document.getElementById("sum-result").value = sum;
}

function sub1 (a, b) {
    let sub1 = a - b;
    document.getElementById("sub1-result").value = sub1;
}

document.getElementById("calculate").addEventListener("click", calculate);
let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");
calculation = document.getElementById("calculation").innerHTML;

document.getElementById("buttonCountPlus").onclick = function () {
    let countPlus = count.innerHTML;
    if (+countPlus <= 3) {
        count.innerHTML++;
        let countPlus = count.innerHTML;
        calculate.innerHTML = calculations(countPlus);
    }
}

document.getElementById("buttonCountMinus").onclick = function () {
    let countMinus = count.innerHTML;
    if (+countMinus >= 2) {
        count.innerHTML--;
        let countMinus = count.innerHTML;
        calculate.innerHTML = calculations(countMinus);
    }
}

calculations = (count) => {
    return calculation + ` * ${count} = ` + (+count) * (+calculation);
}
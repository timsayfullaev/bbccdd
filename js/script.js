function increaseCounter(a, b) {
    let input = b.previousElementSibling;
    let value = parseInt(input.value, 10);
   
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCounter(a, b) {
    let input = b.nextElementSibling;
    let value = parseInt(input.value, 10);
   
    if (value > 0) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}
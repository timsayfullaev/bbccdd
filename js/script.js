// CURRENCY BEGIN
function currencyDropdown() {
    document.getElementById("currencyDropdown").classList.toggle("currency-content_active");
}
window.onclick = function (event) {
    if (!event.target.matches('.currency-button')) {
        let dropdowns = document.getElementsByClassName("currency-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('currency-content_active')) {
                openDropdown.classList.remove('currency-content_active');
            }
        }
    }
}
// CURRENCY END

// COUNTER BEGIN
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
// COUNTER END
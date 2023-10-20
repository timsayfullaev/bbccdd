// CURRENCY BEGIN
function currencyDropdown() {
    const currency = document.querySelector( '.currency');
    const currencyButton = document.querySelector('.currency-button');
    const currencyContent = document.querySelector('.currency-content');
    
    currencyButton.classList.toggle('currency-button_active');
    currencyContent.classList.toggle('currency-content_active');

    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(currency);

        if (!withinBoundaries) {
            currencyButton.classList.remove('currency-button_active');
            currencyContent.classList.remove('currency-content_active');
        }
    });
};
// CURRENCY END

// CATALOG BEGIN

// CATALOG END

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
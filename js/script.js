function currencyDropdown() {
    
    const currency = document.querySelector('.currency');
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

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

for (let i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener("mouseover", ( event ) => {
 
		let tabsChildren = event.target.parentElement.children;

        for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tab--active");
		}

        tabs[i].classList.add("tab--active");

        let tabContentChildren = event.target.parentElement.nextElementSibling.children;

        for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("content--active");
		}

        contents[i].classList.add("content--active");
	});
}

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
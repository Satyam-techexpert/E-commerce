let count = 0;
let total = 0;

let cartButton = document.getElementById("cart");
let cartBox = document.getElementById("cartBox");
let cartCount = document.getElementById("cartCount");
let cartItems = document.getElementById("cartItems");
let search = document.getElementById("search-btn");
let menuButton = document.getElementById("menu-icon");
let menuBox = document.getElementById("menu-Box");



if (window.innerWidth <= 768) {

    search.addEventListener('click', () => {
        const element = document.querySelector('#search-bar');
        if (element.style.display === "block") {
            element.style.display = "none";
        }
        else {
            element.style.display = 'block';
            element.style.width = '100px';
            element.placeholder = 'search';
            element.gap = '5px';
        }
    });
}




cartButton.onclick = function () {
    menuBox.classList.remove("show");
    cartBox.classList.toggle("show");
}

let buttons = document.querySelectorAll(".addToCart");

buttons.forEach(function (button) {

    button.onclick = function () {

        count++;
        cartCount.innerText = count;
        alert("Item Added to Bag");


        let product = button.parentElement.parentElement;

        let name = product.querySelector("p").innerText;
        let price = product.querySelector(".sale-price").innerText;
        total += parseFloat(price);




        cartItems.innerHTML += `
            <div class="cartItem">
                <span>${count}.${name}</span>
                <span>${price}</span>
            </div>
        `;

    }

});
menuButton.onclick = function () {

    cartBox.classList.remove("show");

    menuBox.classList.toggle("show");
}

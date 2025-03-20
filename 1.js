const cartItems = [];
const totalPriceElement = document.getElementById('total-price');
const cartItemsElement = document.getElementById('cart-items');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const pizzaElement = button.parentElement;
        const pizzaName = pizzaElement.getAttribute('data-name');
        const pizzaPrice = parseInt(pizzaElement.getAttribute('data-price'));

        cartItems.push({ name: pizzaName, price: pizzaPrice });
        updateCart();
    });
});

function updateCart() {
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} руб.`;
        cartItemsElement.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Итого: ${totalPrice} руб.`;
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Корзина пуста!');
    } else {
        alert('Заказ оформлен! Спасибо за покупку!');
        cartItems.length = 0; 
        updateCart();
    }
});
const pizzas = [
    { name: "Маргарита", price: 500 },
    { name: "Пепперони", price: 600 },
    { name: "Гавайская", price: 650 },
    { name: "Четыре сыра", price: 700 },
    { name: "Мясная", price: 750 },
    { name: "Вегетарианская", price: 600 },
    { name: "Сырная", price: 550 },
    { name: "Острая", price: 650 },
    { name: "Капричоза", price: 700 },
    { name: "Пицца с морепродуктами", price: 800 },
    { name: "Пицца с грибами", price: 600 },
    { name: "Пицца с беконом", price: 700 },
    { name: "Пицца с ананасами", price: 650 },
    { name: "Пицца с курицей", price: 700 },
    { name: "Пицца с шпинатом", price: 600 },
    { name: "Пицца с перцем", price: 650 },
    { name: "Пицца с оливками", price: 600 },
    { name: "Пицца с чесноком", price: 550 },
    { name: "Пицца с трюфелем", price: 900 },
    { name: "Пицца с лососем", price: 850 }
];

const pizzaContainer = document.getElementById('pizza-container');

pizzas.forEach(pizza => {
    const pizzaDiv = document.createElement('div');
    pizzaDiv.classList.add('pizza');
    pizzaDiv.setAttribute('data-name', pizza.name);
    pizzaDiv.setAttribute('data-price', pizza.price);

    pizzaDiv.innerHTML = `
        <h3>${pizza.name}</h3>
        <p>Томатный соус, моцарелла, ${pizza.name.toLowerCase()}</p>
        <p>Цена: ${pizza.price} руб.</p>
        <button class="add-to-cart">Добавить в корзину</button>
    `;

    pizzaContainer.appendChild(pizzaDiv);
});

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

    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} руб.`;
        
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.addEventListener('click', () => {
            cartItems.splice(index, 1); 
            updateCart(); 
        });

        li.appendChild(removeButton); 
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
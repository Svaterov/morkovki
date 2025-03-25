document.getElementById('confirm-drinks').addEventListener('click', function() {
   
    const drinks = document.querySelectorAll('input[name="drink"]:checked');
    

    const selectedDrinks = [];
    

    drinks.forEach((drink) => {
        selectedDrinks.push(drink.value);
    });
    

    if (selectedDrinks.length > 0) {
        console.log('Выбранные напитки:', selectedDrinks.join(', '));
    } else {
        console.log('Напитки не выбраны.');
    }
});
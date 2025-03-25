document.getElementById('confirm-address').addEventListener('click', function() {
    const addressInput = document.getElementById('address').value.trim();

    if (addressInput) {
        alert(`Вы подтвердили адрес: ${addressInput}`);

    } else {
        alert('Пожалуйста, введите адрес доставки.');
    }
});
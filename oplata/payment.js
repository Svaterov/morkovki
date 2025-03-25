document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('card-details');
    const confirmPaymentButton = document.getElementById('confirm-payment');
    const repeatConfirmationButton = document.getElementById('repeat-confirmation');

   
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.value === 'card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
        });
    });


    confirmPaymentButton.addEventListener('click', function() {
        const selectedPayment = document.querySelector('input[name="payment"]:checked');
        if (selectedPayment) {
            if (selectedPayment.value === 'card') {
                const cardNumber = document.getElementById('card-number').value;
                const cardExpiry = document.getElementById('card-expiry').value;
                const cardCVC = document.getElementById('card-cvc').value;

       
                if (cardNumber && cardExpiry && cardCVC) {
                    alert('Оплата подтверждена! Номер карты: ' + cardNumber);
                    repeatConfirmationButton.style.display = 'block';
                } else {
                    alert('Пожалуйста, заполните все поля данных карты.');
                }
            } else {
                alert('Оплата подтверждена! Способ оплаты: ' + selectedPayment.labels[0].innerText);
                repeatConfirmationButton.style.display = 'block';
            }
        } else {
            alert('Пожалуйста, выберите способ оплаты.');
        }
    });

    
    repeatConfirmationButton.addEventListener('click', function() {
        alert('Оплата повторно подтверждена!');
    });
});
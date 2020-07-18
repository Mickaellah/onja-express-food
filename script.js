console.log('good luck!');

// Grab all the element for the modal.
const orderList = document.querySelector('.order-list');
const order = document.querySelector('.order');
const detailsButton = document.querySelector('.details');
const deleteButton = document.querySelector('.served');
const addOrderButton = document.querySelector('.add-order');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');


// A function that is needed for adding the open class to the outer modal.
const openModal = (event) => {
    modalOuter.classList.add('open');
};

addOrderButton.addEventListener('click', openModal);


// A function that is needed for removing the open class to the outer modal.
const closingModal = () => {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (event) => {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        closingModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closingModal();
    }
});



// Grab those element that might be relateted to the form.
const form = document.querySelector('form');
const name = document.querySelector('#name');
const select = document.querySelector('select-form');
const amount = document.querySelector('[type="radio"]');
const quantity = document.querySelector('#quantity');
const submitButton = document.querySelector('.submitOrder');

// To add the new order.
const newOrderList = (event) => {
    event.preventDefault();
    const newOrder = `
    <div class="order-list">
        <div class="order">
            <span class="title">${name.value}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    </div>
    `;

    orderList.insertAdjacentHTML('beforeend', newOrder);

    modalOuter.classList.remove('open');

    form.reset();
};

// Add an event listener to the submit button for it to submit the completed form.
submitButton.addEventListener('click', newOrderList);


// Added an event listener to the detail buton to show the order information.
const orderInfo = (event) => {
    event.preventDefault();
    const myHTML = `
    <div class="order-list">
    <div class="order">
        <span>${name.value}</span>
        <p>Order:</p>
        <span>${quantity.value} ${amount.value} ${select.value}</span>
    </div>
</div>
    `;
    orderList.insertAdjacentHTML('beforeend', myHTML);
    modalOuter.classList.add('open');
}

detailsButton.addEventListener('click', orderInfo);

// // To delete the order.
const deleteList = (event) => {
    if (event.target.classList.contains('served')) {
        const deleteBtn = event.target;
        deleteBtn.closest('.order-list').remove();
    }
};

deleteButton.addEventListener('click', deleteList);








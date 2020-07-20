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
    modalInner.innerHTML = `
    <form>
        <p>Your name :</p>
        <input
            class="input-form"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
            required
        />
        <p>Please select your dish :</p>
        <select name="dish" class="select-form" required>
            <option value="romazava">Romazava</option>
            <option value="koba">Koba</option>
            <option value="ravitoto">Ravitoto</option>
            <option value="mokary">Mokary</option>
            <option value="achard">Achard</option>
            <option value="masikita">Masikita</option>
            <option value="sambos">Sambos</option>
            <option value="mofo-baolina">Mofo baolina</option>
            <option value="ranonapango">Ranonapango</option>
        </select>
        <p>Please select the size of your plate :</p>
        <input type="radio" id="small" name="size" value="small" required />
        <label for="small">Small</label><br />
        <input type="radio" id="medium" name="size" value="medium" />
        <label for="medium">Medium</label><br />
        <input type="radio" id="large" name="size" value="large" />
        <label for="large">Large</label><br />
        <p>How many pieces do you want to order?</p>
        <input
            class="input-form"
            type="number"
            id="quantity"
            name="amount"
            placeholder="Enter a number here"
            required
        />
        <button class="submitOrder" type="submit">Add this order</button>
    </form>
    `;
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


// Added an event listener to the window for the form's submit button.
window.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.matches('form')) {
        const form = event.target;
        const name = form.name.value;
        const dish = form.dish.value;
        const size = form.size.value;
        const amount = form.amount.value;

        const newOrder = `
        <div class="order-list">
            <div class="order">
                <span class="title">${name}</span>
                <button class="details">Details</button>
                <button class="served">Delete order</button>
            </div>
        </div>
        `;

        orderList.insertAdjacentHTML("beforeend", newOrder);
        modalOuter.classList.remove('open');
        form.reset();
    }
});


// Added an event listener to the detail buton to show the order information.
detailsButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.matches('.details')) {
        const form = event.target;
        const name = form.name.value;
        const dish = form.dish.value;
        const size = form.size.value;
        const amount = form.amount.value;

        const myHTML = `
        <div class="order-list">
            <div class="order">
                <span>${name}</span>
                <p>Order:</p>
                <span>${size} ${amount} ${dish}</span>
            </div>
        </div>
        `;

        orderList.insertAdjacentHTML('beforeend', myHTML);
        modalOuter.classList.add('open');
        console.log(myHTML);
    }
});

// A function for deleting the order.
const deleteList = (event) => {
    if (event.target.classList.contains('served')) {
        const deleteBtn = event.target;
        deleteBtn.closest('.order-list').remove();
    }
};

// An event listener for the delete button.
deleteButton.addEventListener('click', deleteList);

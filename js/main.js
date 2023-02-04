const cart = document.querySelector('#cart');
const items = Array.from(cart.querySelectorAll('.cart-item'));
const totalPrice = cart.querySelector('#total-price');

// Listen for increase/decrease button clicks
items.forEach(function(item,index) {
  const decreaseButton = item.querySelector('.decrease-button');
  const increaseButton = item.querySelector('.increase-button');
  const deleteButton = item.querySelector('.delete-button');
  const likeButton = item.querySelector('.like-button');
  const itemPrice = item.querySelector('.item-price');
  const itemQuantity = item.querySelector('.item-quantity');

  decreaseButton.addEventListener('click', () => {
    let quantity = parseInt(itemQuantity.value);
    if (quantity > 0) {
      quantity--;
      itemQuantity.value = quantity;
      updateTotalPrice();
    }
  });

  increaseButton.addEventListener('click', () => {
    let quantity = parseInt(itemQuantity.value);
    quantity++;
    itemQuantity.value = quantity;
    updateTotalPrice();
    });
    
    deleteButton.addEventListener('click', () => {
    item.remove();
    items.filter(i => i != item);
    updateTotalPrice();
    });
    
    likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
    });
    });
    
    function updateTotalPrice() {
    let total = 0;
    for (let item of items) {
    const itemPrice = parseInt(item.querySelector('.item-price').textContent.substring(1));
    const itemQuantity = parseInt(item.querySelector('.item-quantity').value);
    total += itemPrice * itemQuantity;
    }
    totalPrice.textContent = total;
    }

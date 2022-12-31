console.log('hello');
const increaseBtn = document.querySelectorAll('.increase');
const decreaseBtn = document.querySelectorAll('.decrease');
const deleteBtn = document.querySelectorAll('.delete');

if (
  document
    .querySelector('.cart-container')
    .children[0].classList.contains('cart-card') === false
) {
  document.querySelector(
    '.cart-container'
  ).innerHTML = `<div class="empty-cart-container">
  <h5 class="dish-title">Cart Is Empty</h5>
  <a href="./TodaysMenuPage.html" class="empty">Add Items</a>
  </div>`;
}

const updateCartTotal = () => {
  let total = 0;
  if (document.getElementsByClassName('cart-container')[0].childNodes) {
    var cartItemContainer =
      document.getElementsByClassName('cart-container')[0];
    console.log(cartItemContainer);
    var cartRows = document.querySelectorAll('.cart-card');
    console.log(cartRows);
    cartRows.forEach((row) => {
      var priceTag = row.querySelector('.price');
      var quantityTag = row.querySelector('.cart-value');
      total =
        total +
        parseFloat(priceTag.innerText) * parseFloat(quantityTag.innerText);
    });
  }
  document.querySelector('.total-amount').innerHTML = total;
  console.log(total);
};
window.addEventListener('DOMContentLoaded', updateCartTotal);

increaseBtn.forEach((incBtn) => {
  incBtn.addEventListener('click', (e) => {
    let ele = e.target.parentElement.children[1];
    let currentInput = e.target.parentElement.children[2];
    let value = Number(ele.textContent);
    if (value >= 1) {
      ele.textContent = value += 1;
      currentInput.value = ele.textContent;
      console.log('this si input', currentInput.value);
      updateCartTotal();
    } else {
      return;
    }
  });
});

decreaseBtn.forEach((decBtn) => {
  decBtn.addEventListener('click', (e) => {
    let ele = e.target.parentElement.children[1];
    let currentInput = e.target.parentElement.children[2];
    let value = Number(ele.textContent);
    if (value >= 2) {
      ele.textContent = value -= 1;
      currentInput.value = ele.textContent;
      console.log('this si input', currentInput.value);
      updateCartTotal();
    } else {
      return;
    }
  });
});

deleteBtn.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.remove();
    updateCartTotal();
  });
});

console.log('hello');
const increaseBtn = document.querySelectorAll('.increase');
const decreaseBtn = document.querySelectorAll('.decrease');
const deleteBtn = document.querySelectorAll('.delete');

increaseBtn.forEach((incBtn) => {
  incBtn.addEventListener('click', (e) => {
    let ele = e.target.parentElement.children[1];
    let value = Number(ele.textContent);
    if (value >= 1) {
      ele.textContent = value += 1;
      updateTotal();
    } else {
      return;
    }
  });
});

decreaseBtn.forEach((decBtn) => {
  decBtn.addEventListener('click', (e) => {
    let ele = e.target.parentElement.children[1];
    let value = Number(ele.textContent);
    if (value >= 2) {
      ele.textContent = value -= 1;
      updateTotal();
    } else {
      return;
    }
  });
});

const updateCartTotal = () => {
  var cartItemContainer = document.getElementsByClassName('cart-container')[0];
  console.log(cartItemContainer);
  var cartRows;
};
updateCartTotal();

deleteBtn.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.remove();
  });
});

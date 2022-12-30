console.log('hello');
const increaseBtn = document.querySelectorAll('.increase');
const decreaseBtn = document.querySelectorAll('.decrease');
const deleteBtn = document.querySelectorAll('.delete');
console.log(increaseBtn);

const updateTotal = () => {
  const allNodes = document.querySelectorAll('.cart-card');
  console.log(allNodes);
};
increaseBtn.forEach((incBtn) => {
  incBtn.addEventListener('click', (e) => {
    let ele = e.target.parentElement.children[1];
    let value = Number(ele.textContent);
    if (value >= 1) {
      ele.textContent = value += 1;
    } else {
      return;
    }
    // console.log(value);
    // if (Number(ele.value) >= 1) {

    // } else {
    //   return;
    // }
  });
});

updateTotal();

decreaseBtn.forEach((decBtn) => {
  decBtn.addEventListener('click', (e) => {
    let ele = e.target.parentElement.children[1];
    let value = Number(ele.textContent);
    if (value >= 2) {
      ele.textContent = value -= 1;
    } else {
      return;
    }
    // console.log(value);
    // if (Number(ele.value) >= 1) {

    // } else {
    //   return;
    // }
  });
});

deleteBtn.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    // let parent = e.target.parentElement;
    // let grandParent = parent.parentElement;
    // console.log(grandParent);
    e.currentTarget.parentElement.remove();

    // updateCards();
    // updateTotal();
  });
});

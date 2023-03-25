const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  itemEl.classList.add('item');
  console.log(itemEl);
  return itemEl;
})

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...listEl);
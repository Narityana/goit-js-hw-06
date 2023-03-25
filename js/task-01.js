const listEl = document.querySelector('#categories');
const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
    const titleEl = item.querySelector('h2').textContent;
    const elementsEl = item.querySelectorAll('li').length;
    console.log(`Category: ${titleEl}\nElements: ${elementsEl}`)});

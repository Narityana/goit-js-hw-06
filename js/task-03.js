const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  
];

//перший варіант - через функцію
// const makeImageItem = image => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.style.listStyle = 'none';

//   const imageEl = document.createElement('img');
//   imageEl.classList.add('picture');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.height = 250;

//   itemEl.appendChild(imageEl);
//   return itemEl;
// };

// const imageList = images.map(makeImageItem);

// const galleryEl = document.querySelector('.gallery');
// galleryEl.style.display = 'flex';
// galleryEl.style.gridColumnGap = "50px"

// galleryEl.append(...imageList);
// console.log(galleryEl);



// другий варіант - основний

const galleryEl = document.querySelector('.gallery');
galleryEl.style.display = 'flex';
galleryEl.style.gridColumnGap = "50px"
galleryEl.style.listStyle = "none";

const galleryItems = images
  .map((image) => `<li class = item><img class = picture, height = 250, src='${image.url}' alt='${image.alt}'></li>`)
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryItems);


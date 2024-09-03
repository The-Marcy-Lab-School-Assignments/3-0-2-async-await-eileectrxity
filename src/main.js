import {
  fetchHandler
} from './from-scratch.js';

const appDiv = document.querySelector('#app');

const renderFetch = async (el, fetchFunc) => {
  const [data, err] = await fetchFunc;
  if (err) console.error(`Error fetching data: ${err.message}`);

  const img = document.createElement('img');
  img.src = data.message;
  el.appendChild(img);
}

const main = () => {
  renderFetch(appDiv, fetchHandler('https://dog.ceo/api/breeds/image/random'));
};

main();
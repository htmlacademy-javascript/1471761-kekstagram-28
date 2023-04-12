import renderThumbnails from './thumbnail.js';
import { debounce } from './util.js';
import { DELAY } from './constants.js';

const PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');

let currentFilter = Filter.DEFAULT;

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getFilteredPictures = (pictures) => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return pictures.slice().sort(sortRandomly).slice(0, PICTURES_COUNT);
    case Filter.DISCUSSED:
      return pictures.slice().sort(sortByComments);
    default:
      return pictures;
  }
};

const initFilters = (pictures) => {
  filterElement.classList.remove('img-filters--inactive');

  filterElement.addEventListener('click', debounce((evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const changeFilterButton = evt.target;

    if (changeFilterButton.id === currentFilter) {
      return;
    }

    filterElement
      .querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');

    changeFilterButton.classList.add('img-filters__button--active');

    currentFilter = changeFilterButton.id;

    renderThumbnails(getFilteredPictures(pictures));
  }), DELAY);
  renderThumbnails(pictures);
};

export default initFilters;

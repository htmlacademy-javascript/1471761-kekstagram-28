const PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');

let currentFilter = Filter.DEFAULT;
let pictures = [];

filterElement.classList.remove('img-filters--inactive');

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getFilteredPictures = () => {

  switch (currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandomly).slice(0, PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return [...pictures];
  }
};

const onFilterClick = (callback) => {
  filterElement.addEventListener('click', (evt) => {
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

    callback(getFilteredPictures());
  });
};

const init = (loadedPictures, callback) => {
  //filterElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  onFilterClick(callback);
};

export { init, getFilteredPictures };

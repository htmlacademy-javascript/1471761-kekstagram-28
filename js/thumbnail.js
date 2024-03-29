import showBigPicture from './big-pictures.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = (picture) => {
  const { description, url, likes, comments } = picture;
  const thumbnail = template.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  thumbnail.addEventListener('click', () => showBigPicture(picture));

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  container.querySelectorAll('.picture').forEach((item) => item.remove());

  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export default renderThumbnails;

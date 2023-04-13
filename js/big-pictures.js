import { COMMENTS_PER_PORTION } from './constants.js';
import { isEscPress } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.comments-count');
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.social__comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const template = document.querySelector('#current-comment').content.querySelector('.social__comment');

let commentShown = 0;
let basicComments = null;

const onDocumentKeydown = (evt) => isEscPress(evt, hideBigPicture);

const onCancelClick = () => {
  hideBigPicture();
};

const createComment = (comment) => {
  const { avatar, name, message } = comment;
  const commentElement = template.cloneNode(true);

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  const currentComments = basicComments.slice(commentShown, commentShown + COMMENTS_PER_PORTION);

  currentComments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.append(fragment);

  socialCommentsCount.childNodes[0].nodeValue = `${commentList.children.length} из `;

  if (commentList.children.length === basicComments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const clearComments = () => {
  commentList.innerHTML = '';
  commentShown = 0;
  basicComments = null;
};

const onCommentsLoaderClick = () => {
  commentShown += COMMENTS_PER_PORTION;
  renderComments();
};

function hideBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  cancelButton.removeEventListener('click', onCancelClick);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
}

const showBigPicture = ({ url, likes, description, comments }) => {
  clearComments();

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

  commentsCount.textContent = comments.length;

  basicComments = comments;

  renderComments();

  commentsCount.textContent = comments.length;

  document.addEventListener('keydown', onDocumentKeydown);
  cancelButton.addEventListener('click', onCancelClick);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

export default showBigPicture;

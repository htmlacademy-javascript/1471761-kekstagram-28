import COMMENTS_PER_PORTION from './constants.js';

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
let totalComments = commentsCount;
//let currentSocialCount = 0;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};

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

/*const loadSocialCount = () => {

  currentSocialCount = COMMENTS_PER_PORTION;

  if (currentSocialCount <= commentShown) {
    currentSocialCount = commentShown;
  } else {
    currentSocialCount += COMMENTS_PER_PORTION;

  }

  if (currentSocialCount >= commentShown) {
    currentSocialCount = commentShown - currentSocialCount;
  }

  if (currentSocialCount = commentShown) {
    commentsLoader.classList.add('hidden');
  }

}; */


const renderComments = () => {
  const fragment = document.createDocumentFragment();

  const currentComments = basicComments.slice(commentShown, commentShown + COMMENTS_PER_PORTION);

  currentComments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.append(fragment);
};

const clearComments = () => {
  commentList.innerHTML = '';
  commentShown = 0;
  basicComments = null;
};


const onCommentsLoaderClick = () => {
  commentShown += COMMENTS_PER_PORTION;
  //loadSocialCount();
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
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

  basicComments = comments;

  renderComments();

  //socialCommentsCount.innerHTML = `${loadSocialCount()} + 'из'`;

  commentsCount.innerHTML = `${basicComments.length}`;
  totalComments = basicComments.length;
  document.addEventListener('keydown', onDocumentKeydown);
  cancelButton.addEventListener('click', onCancelClick);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

export default showBigPicture;

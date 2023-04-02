const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.social__comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const template = document.querySelector('#current-comment').content.querySelector('.social__comment');

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

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.append(fragment);
};

const clearComments = () => {
  commentList.innerHTML = '';
};

function hideBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  cancelButton.removeEventListener('click', onCancelClick);
}

const showBigPicture = ({ url, likes, description, comments }) => {
  clearComments();
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

  renderComments(comments);

  document.addEventListener('keydown', onDocumentKeydown);
  cancelButton.addEventListener('click', onCancelClick);
};

cancelButton.addEventListener('click', onCancelClick);

export default showBigPicture;

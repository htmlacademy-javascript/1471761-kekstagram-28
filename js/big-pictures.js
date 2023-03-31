

const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-count');
const body = document.querySelector('body');
//const commentCount = document.querySelector('.social__comment-count');
const cancelButton = document.querySelector('.big-picture__cancel');

let commentsShown = 0;
let comments = [];

const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35">'
  comment.classList.add('.social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('').textContent = name;
  comment.querySelector('').textContent = message;
}

const renderComments = (comments) => {
  commentList.innerHTML = '';

  if (commentsShown >= comments.length) {
    commentsShown = comments.length
  }
  commentsLoader.classList.remove('hidden');

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });
  commentList.append(fragment);

  commentList.innerHTML = '';
  commentList.append(fragment);
  comentCount.innerHTML = `${commentsShown}`;

  const hideBigPicture = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  function onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideBigPicture();
    }
  }

  const onCancelClick = () => {
    hideBigPicture();
  };

  const renderPictureDetails = ({ url, likes, description }) => {
    bigPicture.querySelector('.big-picture__img img').src = url;
    bigPicture.querySelector('.big-picture__img img').alt = description;
    bigPicture.querySelector('.likes-count').textContent = likes;
    bigPicture.querySelector('.social__caption').textContent = description;
  };

  const showBigPicture = (data) => {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    commentsLoader.classList.add('hidden');
    commentsCount.classList.add('hidden');
    document.addEventListener('keydown', onDocumentKeydown);

    renderPictureDetails(data);
    renderComments(data.comments);
  };

  cancelButton.addEventListener('click', onCancelClick);

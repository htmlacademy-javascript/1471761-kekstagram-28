const bigPicture = document.querySelector('.big-picture');
//commentList = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.social__comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const template = document.querySelector('#current-comment').content.querySelector('.social__comment');


//let commentsShown = 0;
const comments = [];

//const createComment = ({ avatar, name, message }) => {
//  const comment = document.createElement('li');
// comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35">'
// comment.classList.add('.social__comment');

//comment.querySelector('.social__picture').src = avatar;
//comment.querySelector('').textContent = name;
//comment.querySelector('').textContent = message;
//};

/*const renderComments = (comments) => {
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
*/


function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelClick = () => {
  hideBigPicture();
};

const renderPictureDetails = ({ url, likes, description, comments }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

  const createComment = () => {
    comments.forEach((comment) => {
      const { avatar, name, message } = comment;
      const commentElement = template.cloneNode(true);

      commentElement.querySelector('.social__picture').src = avatar;
      commentElement.querySelector('.social__picture').alt = name;
      commentElement.querySelector('social__text').textContent = message;

      return commentElement;
    });
  };

  const renderComments = (comments) => {
    const fragment = document.createDocumentFragment();
    comments.forEach((comment) => {
      const commentElement = createComment(comment);
      fragment.append(commentElement);
    });

    //container.append(fragment);
  };
};

function hideBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  cancelButton.removeEventListener('click', onCancelClick);
}

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
  cancelButton.addEventListener('click', onCancelClick);

  renderPictureDetails(data);
  renderComments(comments);
};

cancelButton.addEventListener('click', onCancelClick);

export { showBigPicture };

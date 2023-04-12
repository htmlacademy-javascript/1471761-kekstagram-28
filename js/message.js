const successTemplate = document.querySelector('#success').content.querySelector('.success');

const onSuccessCloseButtonClick = () => {
  hideSuccessMessage();
};

const onSuccessDocumentClick = (evt) => {
  evt.preventDefault();

  if (!evt.target.closest('.success__inner')) {
    hideSuccessMessage();
  }
};

const onSuccessDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideSuccessMessage();
  }
};

const showSuccessMessage = () => {
  const succesMessage = successTemplate.cloneNode(true);

  succesMessage.querySelector('.success__button').addEventListener('click', onSuccessCloseButtonClick);
  document.addEventListener('click', onSuccessDocumentClick);
  document.addEventListener('keydown', onSuccessDocumentKeydown);

  document.body.append(succesMessage);
};


function hideSuccessMessage() {
  document.removeEventListener('click', onSuccessDocumentClick);
  document.removeEventListener('keydown', onSuccessDocumentKeydown);

  document.body.querySelector('.success').remove();
}

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onErrorCloseButtonClick = () => {
  hideErrorMessage();
};

const onErrorDocumentClick = (evt) => {
  evt.preventDefault();

  if (!evt.target.closest('.error__inner')) {
    hideErrorMessage();
  }
};

const onErrorDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideErrorMessage();
  }
};

const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);

  errorMessage.querySelector('.error__button').addEventListener('click', onErrorCloseButtonClick);
  document.addEventListener('click', onErrorDocumentClick);
  document.addEventListener('keydown', onErrorDocumentKeydown);

  document.body.append(errorMessage);
};

function hideErrorMessage() {
  document.removeEventListener('click', onErrorDocumentClick);
  document.removeEventListener('keydown', onErrorDocumentKeydown);

  document.body.querySelector('.error').remove();
}

export { showSuccessMessage, showErrorMessage };

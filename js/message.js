const successTemplate = document.querySelector('#success').content.querySelector('.success');

const onSuccessCloseButtonClick = () => {
  hideSuccessMessage();
};

const onDocumentClick = (evt) => {
  evt.preventDefault();

  if (!evt.target.closest('.success__inner')) {
    hideSuccessMessage();
  }

  if (!evt.target.closest('.error__inner')) {
    hideErrorMessage();
  }
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideSuccessMessage();
  }

  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideErrorMessage();
  }
};

const showSuccessMessage = () => {
  const succesMessage = successTemplate.cloneNode(true);

  succesMessage.querySelector('.success__button').addEventListener('click', onSuccessCloseButtonClick);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);

  document.body.append(succesMessage);
};


function hideSuccessMessage() {
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);

  document.body.querySelector('.success').remove();
}

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onErrorCloseButtonClick = () => {
  hideErrorMessage();
};

/*const onDocumentClick = (evt) => {
  evt.preventDefault();

  if (!evt.target.closest('.error__inner')) {
    hideErrorMessage();
  }
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideErrorMessage();
  }
};  */

const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);

  errorMessage.querySelector('.error__button').addEventListener('click', onErrorCloseButtonClick);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);

  document.body.append(errorMessage);
};


function hideErrorMessage() {
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);

  document.body.querySelector('.error').remove();
}

export { showSuccessMessage, showErrorMessage };

import { MAX_HASHTAG_NUMBER, VALID_SIMBOLS, TAG_ERROR_TEXT } from './constants.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__eror',
});

const isValidTag = (tag) => VALID_SIMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_NUMBER;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
};

const onCancelButtonClick = () => {
  closeModal();
};

const onFileImputChange = () => {
  openModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

function openModal() {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
  form.addEventListener('submit', onFormSubmit);
}

function closeModal() {
  form.reset();
  pristine.reset();
  fileField.value = '';

  overlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  cancelButton.removeEventListener('click', onCancelButtonClick);
  form.removeEventListener('submit', onFormSubmit);
}

const activateUploader = () => {
  fileField.addEventListener('change', onFileImputChange);
};

export default activateUploader;

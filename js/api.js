import showAlert from './alert.js';
import { unblockSubmitButton, closeModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import initFilters from './filter.js';

const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const load = (route, errorText, onSucces, onError, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      onSucces(data);
      unblockSubmitButton();
      closeModal();
    })
    .catch(() => {
      onError(errorText);
      unblockSubmitButton();
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA, initFilters, showAlert);
const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, showSuccessMessage, showErrorMessage, Method.POST, body);

const filterElement = document.querySelector('.img-filters__title');
filterElement.classList.remove('hiden');

export { getData, sendData };


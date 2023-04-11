const buttonSuccessMessage = document.querySelector('.success__button');
//const errorMessage = document.querySelector('.error__button');

const template = document.querySelector('.success').content.querySelector('.success');
const container = document.querySelector('.success');

const createSuccessMesage = (message) => {
  const { succesText, succesButtonText } = message;
  const succesMessage = template.cloneNode(true);

  succesMessage.querySelector('.succes__title').textContent = succesText;
  succesMessage.querySelector('.success__button').textContent = succesButtonText;

  succesMessage.addEventListener('onsubmit', () => sendData());

  return successMessage;
};

const showSuccessMessage = (message) => {
  const fragment = document.createDocumentFragment();
  messages.forEach((message) => {
    const succesMessage = createSuccessMesage(message);
    fragment.append(succesMessage);
  });

  container.append(fragment);
};


const hideSuccessMessage = () => {
  buttonSuccessMessage.classList.add('hidden');
};


/*function(e){
  e.closest = e.closest || function(css){
    var node = this;
    while (node) {
       if (node.matches(css)) return node;
       else node = node.parentElement;
    }
    return null;
  }
 })(Element.prototype);  */

 const template = document.querySelector('.error').content.querySelector('.error');
 const container = document.querySelector('.error');

 const createErrorMesage = (message) => {
   const { errorText, errorButtonText } = message;
   const errorMessage = template.cloneNode(true);

   errorMessage.querySelector('.error__title').textContent = succesText;
   errorMessage.querySelector('.error__button').textContent = succesButtonText;

   errorMessage.addEventListener('onsubmit', () => sendData());

   return errorMessage;
 };

 const showErrorMessage = (message) => {
   const fragment = document.createDocumentFragment();
   messages.forEach((message) => {
     const errorMessage = createErrorMesage(message);
     fragment.append(errorMessage);
   });

   container.append(fragment);
 };


export { showSuccessMessage, showErrorMessage };

/*
Сообщение должно исчезать после нажатия на кнопку .success__button,
по нажатию на клавишу Esc
и по клику на произвольную область экрана за пределами блока с сообщением.

3.5. Если при отправке данных произошла ошибка запроса,
 нужно показать соответствующее сообщение.
 Разметку сообщения, которая находится в блоке #error внутри шаблона template,
  нужно разместить перед закрывающим тегом </body>.
   Сообщение должно исчезать после нажатия на кнопку .error__button,
   по нажатию на клавишу Esc
   и по клику на произвольную область экрана за пределами блока с сообщением.
   В таком случае вся введённая пользователем информация сохраняется,
   чтобы у него была возможность отправить форму повторно. */

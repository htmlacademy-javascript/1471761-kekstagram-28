import { getData } from './api.js';
import { activateUploader } from './form.js';
//import { init, getFilteredPictures } from './filter.js';

getData();
activateUploader();


/*function debounce (callback, timeoutDelay = 500) {

  let timeoutId;

  return (...rest) => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

  };
}
*/

import getPhoto from './data.js';
import { getData, sendData } from './api.js';
import { activateUploader, closeModal, setOnFormSubmit } from './form.js';
import renderThumbnails from './thumbnail.js';
import showAlert from './alert.js';
//import { showSuccessMessage, showErrorMesssage } from './message.js';

renderThumbnails(getPhoto());
activateUploader();

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeModal();
    showSuccessMessage();
  } catch {
    showErrorMesssage();
  }
});

try {
  const data = await getData();
  renderThumbnails(data);
} catch (err) {
  showAlert(err.message);
}

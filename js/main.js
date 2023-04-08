import getPhoto from './data.js';
import activateUploader from './form.js';
import renderThumbnails from './thumbnail.js';

renderThumbnails(getPhoto());
activateUploader();

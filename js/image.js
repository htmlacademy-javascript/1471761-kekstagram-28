import { FILE_TYPES } from './constants.js';

const fileChooser = document.querySelector('.img-upload input[type=file]');
const preview = document.querySelector('.img-upload__preview img');

const activateImagePreview = () => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

export default activateImagePreview;


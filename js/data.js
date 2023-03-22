import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENT_COUNT = 15;
const MIN_MESSAGE = 1;
const MAX_MESSAGE = 2;

const names = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const commentLines = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const descriptions = [
  'Передо мной интересная фотография.',
  'Давайте рассмотрим изображение внимательнее.',
  'Мне нравится эта фотография, потому что она точно передаёт настроение.',
  'Cчитаю, что снимок получился удачным и атмосферным.',
  'Мне понравилась эта фотография, потому что она чётко передаёт чувства и эмоции присутствующих.',
  'И вот наступил долгожданный день.',
  'Попробую изложить свою точку зрения.',
  'Такова моя позиция.'
];

const createMessage = () =>
  Array.from({ length: getRandomInteger(MIN_MESSAGE, MAX_MESSAGE) }, () =>
    getRandomArrayElement(commentLines)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpeg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
  comments: Array.from({ length: getRandomInteger(0, COMMENT_COUNT) },
    createComment
  ),
}
);

const getPhoto = () =>
  Array.from({ length: PHOTO_COUNT }, (_, photoIndex) =>
    createPhoto(photoIndex + 1)
  );

export { getPhoto };


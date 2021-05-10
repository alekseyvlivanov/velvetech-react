import { nanoid } from 'nanoid';

export const getNextId = () => nanoid();

export const DEFAULT_VALUES = {
  id: null,
  text: '',
  size: 24,
  minSize: 8,
  maxSize: 64,
  color: '#000000',
  bgColor: '#ffffff',
};

export const DUMMY_DATA = [
  {
    id: getNextId(),
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, doloremque. Soluta laudantium, hic distinctio sit, iusto rem dolores delectus dignissimos minima quaerat, nam ut sapiente corrupti quos modi animi. Assumenda.',
    size: 24,
    color: '#ff0000',
    bgColor: '#000000',
  },
  {
    id: getNextId(),
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci ratione quam inventore reiciendis necessitatibus numquam? Consequatur nulla ipsa commodi.',
    size: 24,
    color: '#0000ff',
    bgColor: '#ffff00',
  },
];

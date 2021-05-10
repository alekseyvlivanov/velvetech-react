import { createContext } from 'react';
import { Notyf } from 'notyf';

export default createContext(
  new Notyf({
    dismissible: true,
    duration: 1500,
    position: {
      x: 'center',
      y: 'top',
    },
    types: [
      {
        type: 'error',
        duration: 3000,
      },
    ],
  }),
);

import { nanoid } from 'nanoid';

import BlockSection from './components/BlockSection';
import ControlForm from './components/ControlForm';

const DUMMY_DATA = [
  {
    id: nanoid(),
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, doloremque. Soluta laudantium, hic distinctio sit, iusto rem dolores delectus dignissimos minima quaerat, nam ut sapiente corrupti quos modi animi. Assumenda.',
    size: 24,
    color: 'red',
    bgColor: 'black',
  },
  {
    id: nanoid(),
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maiores?',
    size: 32,
    color: 'green',
    bgColor: 'white',
  },
  {
    id: nanoid(),
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci ratione quam inventore reiciendis necessitatibus numquam? Consequatur nulla ipsa commodi.',
    size: 24,
    color: 'blue',
    bgColor: 'orange',
  },
];

const DEFAULT_VALUES = {
  id: null,
  text: '',
  size: 24,
  minSize: 8,
  maxSize: 64,
  color: '#000000',
  bgColor: '#ffffff',
};

function App() {
  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="card card-body my-5">
          <h1 className="card-title mb-4 text-center">Velvetech React</h1>
          <div className="row">
            <div className="col-4">
              <ControlForm values={DEFAULT_VALUES} />
            </div>
            <div className="col-8">
              <BlockSection blocks={DUMMY_DATA} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

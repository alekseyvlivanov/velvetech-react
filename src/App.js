import { useContext, useState } from 'react';

import 'notyf/notyf.min.css';
import NotyfContext from './NotyfContext';

import { getNextId, DUMMY_DATA, DEFAULT_VALUES } from './utils';
import BlockSection from './components/BlockSection';
import ControlForm from './components/ControlForm';

function App() {
  const notyf = useContext(NotyfContext);

  const [params, setParams] = useState(DEFAULT_VALUES);
  const [blocks, setBlocks] = useState(DUMMY_DATA);

  const addBlock = () => {
    if (params.text.trim() === '') {
      notyf.error('Enter something for text');
    } else {
      setBlocks([{ ...params, id: getNextId() }, ...blocks]);
      notyf.success('Block added');
    }
  };

  const deleteBlock = (id) => {
    setBlocks(blocks.filter((block) => block.id !== id));
    if (params.id === id) {
      setParams({ ...params, id: null });
    }
    notyf.success('Block deleted');
  };

  const setActiveBlock = (block) => {
    setParams(block);
  };

  const updateActiveBlock = (updatedBlock) => {
    if (params.id !== null) {
      setBlocks(
        blocks.map((block) =>
          block.id !== updatedBlock.id ? block : updatedBlock,
        ),
      );
    }
  };

  const changeText = (text) => {
    if (text.trim() === '') {
      notyf.error('Enter something for text');
    } else {
      setParams({ ...params, text });
      updateActiveBlock({ ...params, text });
    }
  };

  const changeSize = (size) => {
    setParams({ ...params, size });
    updateActiveBlock({ ...params, size });
  };

  const changeColor = (color) => {
    setParams({ ...params, color });
    updateActiveBlock({ ...params, color });
  };

  const changeBgColor = (bgColor) => {
    setParams({ ...params, bgColor });
    updateActiveBlock({ ...params, bgColor });
  };

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="card card-body my-5">
          <h1 className="card-title mb-4 text-center">Velvetech React</h1>
          <div className="row">
            <div className="col-4">
              <ControlForm
                params={params}
                handlers={{
                  addBlock,
                  changeText,
                  changeSize,
                  changeColor,
                  changeBgColor,
                }}
              />
            </div>
            <div className="col-8">
              <BlockSection
                blocks={blocks}
                activeId={params.id}
                handlers={{
                  deleteBlock,
                  setActiveBlock,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

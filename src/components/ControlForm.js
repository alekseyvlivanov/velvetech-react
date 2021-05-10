import ColorPicker from './ColorPicker';
import InputRange from './InputRange';
import TextBox from './TextBox';

function ControlForm({ params, handlers }) {
  const { text, size, color, bgColor } = params;
  const {
    addBlock,
    changeText,
    changeSize,
    changeColor,
    changeBgColor,
  } = handlers;

  return (
    <form className="d-flex flex-column sticky-top">
      <button
        type="button"
        className="btn btn-primary btn-sm my-3"
        onClick={addBlock}
      >
        Add block
      </button>
      <TextBox label="Text" text={text} changeText={changeText} />
      <InputRange
        label="Size"
        value={size}
        min={8}
        max={64}
        changeSize={changeSize}
      />
      <ColorPicker label="Color" color={color} changeColor={changeColor} />
      <ColorPicker
        label="Background"
        color={bgColor}
        changeColor={changeBgColor}
      />
    </form>
  );
}

export default ControlForm;

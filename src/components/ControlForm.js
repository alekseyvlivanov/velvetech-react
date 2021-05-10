import ColorPicker from './ColorPicker';
import InputRange from './InputRange';
import TextBox from './TextBox';

function ControlForm({ values }) {
  const { text, size, color, bgColor } = values;

  return (
    <form className="d-flex flex-column sticky-top">
      <button type="button" className="btn btn-primary btn-sm my-3">
        Add block
      </button>
      <TextBox label="Text" text={text} />
      <InputRange label="Size" value={size} min={8} max={64} />
      <ColorPicker label="Color" color={color} />
      <ColorPicker label="Background" color={bgColor} />
    </form>
  );
}

export default ControlForm;

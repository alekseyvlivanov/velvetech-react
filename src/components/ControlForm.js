function ControlForm({ values }) {
  const { text, size, color, bgColor } = values;

  return (
    <form className="d-flex flex-column">
      <button type="button" className="btn btn-primary btn-sm my-3">
        Add block
      </button>
      <div className="mb-3">
        <label className="form-label" htmlFor="controlText">
          Text
        </label>
        <textarea
          className="form-control"
          id="controlText"
          value={text}
          rows="5"
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="controlSize">
          Size: {size}
        </label>
        <input
          type="range"
          className="form-range"
          id="controlSize"
          value={size}
          min="8"
          max="64"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="controlColor">
          Text color
        </label>
        <input
          type="color"
          className="form-control"
          id="controlColor"
          value={color}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="controlBgColor">
          Background color
        </label>
        <input
          type="color"
          className="form-control"
          id="controlBgColor"
          value={bgColor}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </form>
  );
}

export default ControlForm;

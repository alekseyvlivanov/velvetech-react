function ColorPicker({ label, color, changeColor }) {
  const changeColorHandler = (e) => {
    changeColor(e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label d-block">
        {label}
        <input
          type="color"
          className="form-control"
          value={color}
          style={{ cursor: 'pointer' }}
          onChange={changeColorHandler}
        />
      </label>
    </div>
  );
}

export default ColorPicker;

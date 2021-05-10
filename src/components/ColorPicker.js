function ColorPicker({ label, color }) {
  return (
    <div className="mb-3">
      <label className="form-label d-block">
        {label}
        <input
          type="color"
          className="form-control"
          value={color}
          style={{ cursor: 'pointer' }}
        />
      </label>
    </div>
  );
}

export default ColorPicker;

function InputRange({ label, value, min, max }) {
  return (
    <div className="mb-3">
      <label className="form-label d-block">
        {label}: {value}
        <input
          type="range"
          className="form-range"
          value={value}
          min={min}
          max={max}
        />
      </label>
    </div>
  );
}

export default InputRange;

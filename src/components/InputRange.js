function InputRange({ label, value, min, max, changeSize }) {
  const changeSizeHandler = (e) => {
    changeSize(parseInt(e.target.value, 10));
  };

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
          onChange={changeSizeHandler}
        />
      </label>
    </div>
  );
}

export default InputRange;

function TextBox({ label, text, changeText }) {
  const changeTextHandler = (e) => {
    changeText(e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label d-block">
        {label}
        <textarea
          className="form-control"
          value={text}
          rows="5"
          onChange={changeTextHandler}
        />
      </label>
    </div>
  );
}

export default TextBox;

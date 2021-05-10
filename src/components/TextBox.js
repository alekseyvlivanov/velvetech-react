function TextBox({ label, text }) {
  return (
    <div className="mb-3">
      <label className="form-label d-block">
        {label}
        <textarea className="form-control" value={text} rows="5" />
      </label>
    </div>
  );
}

export default TextBox;

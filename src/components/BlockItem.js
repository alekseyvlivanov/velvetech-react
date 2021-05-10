function BlockItem({ block }) {
  const { text, size, color, bgColor } = block;

  return (
    <div className="card card-body">
      <button type="button" className="btn btn-danger btn-sm mb-2">
        Delete block
      </button>
      <blockquote
        className="blockquote"
        style={{
          fontSize: size,
          color,
          backgroundColor: bgColor,
          cursor: 'pointer',
        }}
      >
        {text}
      </blockquote>
    </div>
  );
}

export default BlockItem;

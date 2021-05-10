function BlockItem({ block, deleteBlock, setActiveBlock }) {
  const { id, text, size, color, bgColor } = block;

  const deleteBlockHandler = () => {
    deleteBlock(id);
  };

  const setActiveBlockHandler = () => {
    setActiveBlock(block);
  };

  return (
    <div className="card card-body">
      <button
        type="button"
        className="btn btn-danger btn-sm mb-2"
        onClick={deleteBlockHandler}
      >
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
        onClick={setActiveBlockHandler}
      >
        {text}
      </blockquote>
    </div>
  );
}

export default BlockItem;

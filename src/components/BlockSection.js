import BlockItem from './BlockItem';

function BlockSection({ blocks, activeId, handlers }) {
  const { deleteBlock, setActiveBlock } = handlers;

  return (
    <section className="d-flex flex-column gap-3">
      {blocks.map((block) => (
        <BlockItem
          key={block.id}
          block={block}
          active={block.id === activeId}
          deleteBlock={deleteBlock}
          setActiveBlock={setActiveBlock}
        />
      ))}
    </section>
  );
}

export default BlockSection;

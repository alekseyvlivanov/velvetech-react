import BlockItem from './BlockItem';

function BlockSection({ blocks }) {
  return (
    <section className="d-flex flex-column gap-3">
      {blocks.map((block) => (
        <BlockItem key={block.id} block={block} />
      ))}
    </section>
  );
}

export default BlockSection;

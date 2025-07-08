import { visit } from 'unist-util-visit';

export function remarkExtractToc(tocArray) {
  return () => (tree) => {

    visit(tree, 'heading', (node) => {
      const depth = node.depth;
      if (depth === 2 || depth === 3) {
        const textNode = node.children.find((n) => n.type === 'text');
        if (textNode) {
          const text = textNode.value;
          const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
          tocArray.push({ text, id, level: depth });
        }
      }
    });
  };
}

import { visit } from 'unist-util-visit';

export default function remarkImages() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      node.data = {
        hName: "figure",
        hProperties: {
          className: "flex flex-col items-center my-4",
        },
        hChildren: [
          {
            type: "element",
            tagName: "img",
            properties: {
              src: node.url,
              alt: node.alt || "",
              className: "w-full mx-auto max-w-2xl h-auto rounded shadow-md",
            },
          },
          node.title
            ? {
                type: "element",
                tagName: "figcaption",
                children: [{ type: "text", value: node.title }],
                properties: {
                  className: "text-sm text-gray-500 mt-2",
                },
              }
            : null,
        ].filter(Boolean),
      };
    });
  };
}

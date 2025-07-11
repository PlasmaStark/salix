export default function remarkCallouts() {
  return (tree) => {
    const children = tree.children;
    let i = 0;

    while (i < children.length) {
      const node = children[i];
      if (node.type === 'paragraph' && node.children?.[0]?.type === 'text') {
        const text = node.children[0].value;
        const match = text.match(/^!!!(\w+)\s*(.*)/);
        if (match) {
          const [_, type, title] = match;
          console.log(_);
          const calloutContent = [];
          let j = i + 1;
          // Raccogli i paragrafi fino a riga di chiusura '!!!'
          while (
            j < children.length &&
            !(
              children[j].type === 'paragraph' &&
              children[j].children?.[0]?.type === 'text' &&
              children[j].children[0].value.trim() === '!!!'
            )
          ) {
            calloutContent.push(children[j]);
            j++;
          }

          if (j === children.length) {
            // Non ho trovato la chiusura '!!!', quindi non trasformo
            i++;
            continue;
          }

          // Rimuovo i nodi originali (dal nodo iniziale al nodo di chiusura)
          children.splice(i, j - i + 1);

          // Creo il nodo callout
          children.splice(i, 0, {
            type: 'callout',
            data: {
              hName: 'div',
              hProperties: {
                className: `callout ${type}`,
              },
              hChildren: [
                title && {
                  type: 'element',
                  tagName: 'p',
                  properties: {
                    className: 'callout-title',
                  },
                  children: [{ type: 'text', value: title }],
                },
                ...calloutContent,
              ].filter(Boolean),
            },
          });
          // Continua dalla posizione successiva
          continue;
        }
      }
      i++;
    }
  };
}

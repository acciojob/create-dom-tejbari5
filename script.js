function createDom(root) {
  if (typeof root === "string") {
    return document.createTextNode(root);
  }

  const node = document.createElement(root.type);

  if (root.attributes) {
    for (const [key, value] of Object.entries(root.attributes)) {
      node.setAttribute(key, value);
    }
  }

  if (root.children) {
    for (const child of root.children) {
      const childNode = createDom(child);
      node.appendChild(childNode);
    }
  }

  return node;
}

module.exports=createDom;
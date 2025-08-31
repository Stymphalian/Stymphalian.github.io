import { _ as __name, d as select } from './index-BmQWNP4t.js';

var getDiagramElement = /* @__PURE__ */ __name((id, securityLevel) => {
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? select(sandboxElement.nodes()[0].contentDocument.body) : select("body");
  const svg = root.select(`[id="${id}"]`);
  return svg;
}, "getDiagramElement");

export { getDiagramElement as g };
//# sourceMappingURL=chunk-WVR4S24B-C3KajuuD.js.map

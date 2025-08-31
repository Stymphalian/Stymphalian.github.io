import { _ as __name, l as log, H as selectSvgElement, e as configureSvgSize, I as package_default } from './index-BmQWNP4t.js';
import { p as parse } from './treemap-75Q7IDZK-CxDH1uGa.js';
import './vendor-BNIKZRna.js';
import './router-DEK2SYKc.js';
import './icons-C1NP5l6E.js';
import './markdown-GVWbr1Yw.js';
import './_baseUniq-DJoXcT3v.js';
import './_basePickBy-DuhB84AC.js';
import './clone-WzyrSu8y.js';

var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};

// src/diagrams/info/infoDb.ts
var DEFAULT_INFO_DB = {
  version: package_default.version + ("" )
};
var getVersion = /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};

// src/diagrams/info/infoRenderer.ts
var draw = /* @__PURE__ */ __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };

// src/diagrams/info/infoDiagram.ts
var diagram = {
  parser,
  db,
  renderer
};

export { diagram };
//# sourceMappingURL=infoDiagram-DDUCL6P7-CE-CIRj_.js.map

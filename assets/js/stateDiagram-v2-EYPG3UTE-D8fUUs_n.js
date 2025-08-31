import { s as styles_default, b as stateRenderer_v3_unified_default, a as stateDiagram_default, S as StateDB } from './chunk-LXBSTHXV-BVw3SVKx.js';
import { _ as __name } from './index-BmQWNP4t.js';
import './chunk-WVR4S24B-C3KajuuD.js';
import './chunk-NRVI72HA-D2fKlNDh.js';
import './vendor-BNIKZRna.js';
import './router-DEK2SYKc.js';
import './icons-C1NP5l6E.js';
import './markdown-GVWbr1Yw.js';

// src/diagrams/state/stateDiagram-v2.ts
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};

export { diagram };
//# sourceMappingURL=stateDiagram-v2-EYPG3UTE-D8fUUs_n.js.map

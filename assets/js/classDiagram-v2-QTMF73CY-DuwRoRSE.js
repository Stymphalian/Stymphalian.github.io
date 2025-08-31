import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from './chunk-JBRWN2VN-07GoR45p.js';
import { _ as __name } from './index-BmQWNP4t.js';
import './chunk-GLLZNHP4-Cic2nurH.js';
import './chunk-WVR4S24B-C3KajuuD.js';
import './chunk-NRVI72HA-D2fKlNDh.js';
import './vendor-BNIKZRna.js';
import './router-DEK2SYKc.js';
import './icons-C1NP5l6E.js';
import './markdown-GVWbr1Yw.js';

// src/diagrams/class/classDiagram-v2.ts
var diagram = {
  parser: classDiagram_default,
  get db() {
    return new ClassDB();
  },
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};

export { diagram };
//# sourceMappingURL=classDiagram-v2-QTMF73CY-DuwRoRSE.js.map

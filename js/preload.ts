
window.phet = window.phet || {};
window.phet.chipper = window.phet.chipper || {};
window.phet.chipper.packageObject =
  {
    "name": "scenery-lab-demo",
  };
window.phet.chipper.stringRepos = [
  {
    "repo": "joist",
    "requirejsNamespace": "JOIST"
  },
  {
    "repo": "scenery-phet",
    "requirejsNamespace": "SCENERY_PHET"
  },
  {
    "repo": "sun",
    "requirejsNamespace": "SUN"
  },
  {
    "repo": "tambo",
    "requirejsNamespace": "TAMBO"
  },
  {
    "repo": "vegas",
    "requirejsNamespace": "VEGAS"
  }
];
window.phet.chipper.strings = {
  en: {
    "a11y": {
      "numberSpinnerRoleDescription": {
        "value": "number spinner"
      },
      "close": {
        "value": "Close"
      },
      "closed": {
        "value": "Closed"
      },
      "titleClosePattern": {
        "value": "{{title}}, Close."
      }
    }
  }
};

import '../src/sherpa/lib/jquery-2.1.0.js';
import '../src/sherpa/lib/lodash-4.17.4.js';
import '../src/tandem/js/PhetioIDUtils.js';
import '../src/sherpa/lib/linebreak-1.1.0.js';
import '../src/sherpa/lib/flatqueue-1.2.1.js';
import '../src/sherpa/lib/paper-js-0.12.17.js';
import '../src/sherpa/lib/he-1.1.1.js';
import '../src/sherpa/lib/TextEncoderLite-3c9f6f0.js';
import '../src/sherpa/lib/base64-js-1.2.0.js';
import '../src/query-string-machine/js/QueryStringMachine.js';
import '../src/sherpa/lib/himalaya-1.1.0.js';
import '../src/assert/js/assert.js';

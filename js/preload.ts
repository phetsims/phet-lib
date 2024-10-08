import './minimal-preload';
import '../src/sherpa/lib/jquery-2.1.0.js';
import '../src/sherpa/lib/paper-js-0.12.17.js';
import '../src/query-string-machine/js/QueryStringMachine.js';
import '../src/sherpa/lib/himalaya-1.1.0.js';

self.phet.chipper.packageObject =
  {
    'name': 'scenery-lab-demo'
  };
self.phet.chipper.stringRepos = [
  {
    'repo': 'joist',
    'requirejsNamespace': 'JOIST'
  },
  {
    'repo': 'scenery-phet',
    'requirejsNamespace': 'SCENERY_PHET'
  },
  {
    'repo': 'sun',
    'requirejsNamespace': 'SUN'
  },
  {
    'repo': 'tambo',
    'requirejsNamespace': 'TAMBO'
  },
  {
    'repo': 'vegas',
    'requirejsNamespace': 'VEGAS'
  }
];
self.phet.chipper.strings = {
  en: {
    'a11y': {
      'numberSpinnerRoleDescription': {
        'value': 'number spinner'
      },
      'close': {
        'value': 'Close'
      },
      'closed': {
        'value': 'Closed'
      },
      'titleClosePattern': {
        'value': '{{title}}, Close.'
      }
    }
  }
};
self.phet.chipper.localeData = {
  'en': {
    'locale3': 'eng',
    'englishName': 'English',
    'localizedName': 'English',
    'direction': 'ltr'
  }
};


/**
 * @author          John Paschal
 * @createdDate:    18 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     Singleton module which maintains a global config manager 
 *                  for the application. This is called and executed in main.js
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeConfigManager = require('node-config-manager');

var _nodeConfigManager2 = _interopRequireDefault(_nodeConfigManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  configDir: './config',
  env: 'develop',
  camelCase: true
};

_nodeConfigManager2.default.init(options);
_nodeConfigManager2.default.addConfig('app');
_nodeConfigManager2.default.addConfig('logger');
_nodeConfigManager2.default.addConfig('db');

exports.default = _nodeConfigManager2.default;
//# sourceMappingURL=configManager.js.map

/**
 * @author          John Paschal
 * @createdDate:    17 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     logger.js file which exports a logger object
 *                  which takes care of information and error logs
 *                  using bunyan logger
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = undefined;

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

var _configManager = require('./configManager');

var _configManager2 = _interopRequireDefault(_configManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerCfg = _configManager2.default.method.Logger();
var log = exports.log = _bunyan2.default.createLogger({
  name: 'fr-sales_master_api',
  streams: loggerCfg.streams
});
//# sourceMappingURL=logger.js.map

/**
 * @author          John Paschal
 * @createdDate:    28 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     routes.js to specify the path of the master API.
 */
'use strict';
// import {log} from '../utils/logger';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _MasterFileController = require('./controllers/MasterFileController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();
var masterFileHandler = new _MasterFileController.MasterFileCtrl().MasterFileHandler;
var servicePath = '/sales/v1';

router.get(servicePath + '/getDataFromMaster', masterFileHandler);
//# sourceMappingURL=routes.js.map

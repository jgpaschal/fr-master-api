/**
 * @author          John Paschal
 * @createdDate:    16 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     Master File API controller class.
 * @function        MasterFileHandler: queries master file
 *									based on query parameters
 *                  
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MasterFileCtrl = undefined;

var _logger = require('../utils/logger');

var _errorHandler = require('../utils/errorHandler');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MasterFileCtrl = exports.MasterFileCtrl = function () {
	function MasterFileCtrl() {
		_classCallCheck(this, MasterFileCtrl);
	}

	_createClass(MasterFileCtrl, [{
		key: 'MasterFileHandler',
		value: function MasterFileHandler(req, res) {
			_logger.log.info('Master file ctrl handler initiated');

			req.models.masterFileTable.find(req.query, function (err, results) {
				if (err) {
					var errMsg = "Invalid Query Parameters";
					var errCode = 400;
					(0, _errorHandler.handleError)(err, req, res, errMsg, errCode);
				} else {
					_logger.log.info('Master file queried successfully');
					res.send(results);
				}
			});
		}
	}]);

	return MasterFileCtrl;
}();
//# sourceMappingURL=MasterFileController.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.handleError = handleError;

var _logger = require('./logger');

function handleError(err, req, res, errMsg, errCode) {
	var message = errMsg ? errMsg : 'Internal Server Error';
	var errorCode = errCode ? errCode : 500;
	_logger.log.error({
		message: message,
		stack: err.stack
	});

	res.json({
		error: {
			message: message,
			errorCode: errorCode
		}
	});
}
//# sourceMappingURL=errorHandler.js.map

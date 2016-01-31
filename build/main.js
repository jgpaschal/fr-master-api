/**
 * @author          John Paschal
 * @createdDate:    28 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     main.js file which creates a server 
 *                  and listens on the port specified
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _configManager = require("./lib/utils/configManager");

var _configManager2 = _interopRequireDefault(_configManager);

var _orm = require("orm");

var _orm2 = _interopRequireDefault(_orm);

var _logger = require("./lib/utils/logger");

var _routes = require("./lib/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appConfig = _configManager2.default.getConfig('app');
var dbConfig = _configManager2.default.getConfig('db');
var port = appConfig.port;
var host = appConfig.host;
var app = (0, _express2.default)();

app.use(_orm2.default.express('mysql://root:root@localhost/fr_sales', {
	define: function define(db, models, next) {
		db.load('lib/models/modelInitializer', function (err) {
			if (err) {
				_logger.log.error('Error loading models - in master API');
				_logger.log.error(err.stack);
				return;
			}
			models.masterFileTable = db.models.flush_sales_master_table;
		});
		next();
	}
}));

console.log('initiating routes for the app');
app.use(_routes.router);

app.listen(port, host, function () {
	console.log('master api server started');
});

exports.default = app;
//# sourceMappingURL=main.js.map

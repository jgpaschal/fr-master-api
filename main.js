/**
 * @author          John Paschal
 * @createdDate:    28 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     main.js file which creates a server 
 *                  and listens on the port specified
 */
'use strict';
import express from "express";
import configManager from "./lib/utils/configManager";
import orm from 'orm';
import {log} from './lib/utils/logger';
import {router} from './lib/routes';

const appConfig = configManager.getConfig('app');
const dbConfig = configManager.getConfig('db');
const port = appConfig.port;
const host = appConfig.host;
const app = express();

app.use(orm.express('mysql://root:root@localhost/fr_sales', {
	define: function(db, models, next) {
		db.load('lib/models/modelInitializer', (err)=>{
			if (err) {
				log.error('Error loading models - in master API');
				log.error(err.stack);
				return;
			}
			models.masterFileTable = db.models.flush_sales_master_table;
		})
		next();
	}
}));

console.log('initiating routes for the app');
app.use(router);

app.listen(port, host, ()=>{
	console.log('master api server started');
});

export default app;

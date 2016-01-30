/**
 * @author          John Paschal
 * @createdDate:    17 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     logger.js file which exports a logger object
 *                  which takes care of information and error logs
 *                  using bunyan logger
 */
'use strict';
import bunyan from 'bunyan';
import configManager from './configManager';

const loggerCfg = configManager.method.Logger();
export const log = bunyan.createLogger({
  name: 'fr-sales_master_api',
  streams: loggerCfg.streams
});

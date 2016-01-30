/**
 * @author          John Paschal
 * @createdDate:    18 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     Singleton module which maintains a global config manager 
 *                  for the application. This is called and executed in main.js
 */
'use strict';
import configManager from "node-config-manager";
const options = {
    configDir: './config',
    env: 'develop',
    camelCase: true
};

configManager.init(options);
configManager.addConfig('app');
configManager.addConfig('logger');
configManager.addConfig('db');

export default configManager;

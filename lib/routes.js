/**
 * @author          John Paschal
 * @createdDate:    28 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     routes.js to specify the path of the master API.
 */
 'use strict';
// import {log} from '../utils/logger';
import express from 'express';
import {MasterFileCtrl} from './controllers/MasterFileController';

export const router = express.Router();
const masterFileHandler = new MasterFileCtrl().MasterFileHandler;
const servicePath = '/sales/v1';


router.get(`${ servicePath }/getDataFromMaster`, masterFileHandler);

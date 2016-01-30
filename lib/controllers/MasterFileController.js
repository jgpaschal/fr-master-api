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
import {log} from '../utils/logger';
import {handleError} from '../utils/errorHandler';

export class MasterFileCtrl {
	MasterFileHandler(req, res) {
		log.info('Master file ctrl handler initiated');

		req.models.masterFileTable.find(req.query, (err, results)=>{
			if (err) {
				const errMsg = "Invalid Query Parameters";
				const errCode = 400;
				handleError(err, req, res, errMsg, errCode);
			} else {
				log.info('Master file queried successfully');
				res.send(results);
			}
		});
	}
}
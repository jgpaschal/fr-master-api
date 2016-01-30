'use strict';
import {log} from './logger';

export function handleError(err, req, res, errMsg, errCode) {
	const message = errMsg ? errMsg : 'Internal Server Error';
	const errorCode = errCode ? errCode : 500;
	log.error({
			message,
			stack: err.stack
		});
	
	res.json({
		error: { 
			message,
			errorCode
    }	
  });
}
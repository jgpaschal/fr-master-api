/**
 * @author          John Paschal
 * @createdDate:    26 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     This file is the singleton that loads all
 *                  of the ORM schema files. 
 *                  -flush_sales_master_table
 */
'use strict';
module.exports = function (db, cb) {
    db.load("./masterFileModel", function (err) {
        if (err) {
            return cb(err);
        }
				return cb();
    });
};

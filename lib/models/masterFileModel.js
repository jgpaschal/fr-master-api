/**
 * @author          John Paschal
 * @createdDate:    26 Jan 2016
 * @updatedDate:    28 Jan 2016
 * @description     This file contains the Schema for the rows
 *									in the flush_sales_master_table DB table.
 */
'use strict';
module.exports = function(db, cb) {
	db.define('flush_sales_master_table',
	{
		storeId: { type: 'text', key: true },			// StoreCode
		skuId: { type: 'text', key: true },			// SKULIST
		ItemLocalName: String,
		ItemCodeForDisplay: String,
		ItemType: String,
		ItemLevel: String,
		ColorCode: String,
		ColorName: String,
		SizeCode: String,
		SizeName: String,
		PatternLengthCode: String,
		Core: String,
		SeasonCode: String,
		DeptCode: String,
		GdeptCode: String,
		GdeptName: String,
		RegionCode: Number
});
	return cb();
};

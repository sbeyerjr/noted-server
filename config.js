'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://atestuser:music123@ds159273.mlab.com:59273/noted';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||  'mongodb://localhost/test-noted';
exports.PORT = process.env.PORT || 8080;
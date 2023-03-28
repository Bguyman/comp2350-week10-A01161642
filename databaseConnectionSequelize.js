const is_qoddi = process.env.IS_QODDI || false; 

const dbConfigQoddi = "mysql://freedb_2350m:jqj*76MpWCVPe55@ sql.freedb.tech:3306/ freedb_comp2350week2-a01161642"; 

const dbConfigLocal = "mysql://root:Password@localhost/lab_example";

if (is_qoddi) {
    var databaseConnectionString = dbConfigQoddi;
} else {
    var databaseConnectionString = dbConfigLocal; 
}

module.exports = databaseConnectionString; 
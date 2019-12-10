const monk=require('monk');

const connectionString='localhost/gulfcollege';

const db=monk(connectionString);

module.exports=db;
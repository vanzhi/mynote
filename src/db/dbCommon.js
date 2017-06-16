import configs from './dbConfigs.js'
import dbAbstract from './dbAbstract.js'
// 数据库业务操作

var dbCommon = dbCommon || {}
var dbs = {};

function getDB(dbname, success, error) {
    var db = dbs[dbname];
    if (!db) {
        db = new dbAbstract(dbname);
        dbs[dbname] = db;
    }
    return db;
}

export default getDB;
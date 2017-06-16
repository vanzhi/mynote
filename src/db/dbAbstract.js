import configs from './dbConfigs.js';

// 数据库基本操作，不可直接操作

if (!window.indexedDB) {
    throw Error('我只能告诉你，你的浏览器不支持indexedDB...')
}

var dbBases = {};

class dbAbstract {
    // 对数据库操作进行封装
    db = void 0;
    dbname = '';
    constructor(dbname) {
        if (!this.db) {
            this.dbname = dbname;
            this.initdb();
        }
    }
    initdb(success, error) {
        var _this = this;
        var dbname = this.dbname;
        var request = window.indexedDB.open(dbname);

        request.onsuccess = function(event) {
            var db = event.result.db;
            _this.db = db;
            if (success) success(event);
        }
        request.onerror = function(event) {
            throw Error('创建数据库失败...');
        }
        request.onupgradeneeded = function(event) {
            var dbConfig = configs[dbname];
            this.db = event.target.result;
            for (var i = 0; i < dbConfig._TABLES.length; i++) {
                var table = dbConfig._TABLES[i];
                var objectStore = db.createObjectStore(table._NAME, {keyPath: table._KEY._NAME});
                for (var k in table._COLUMNS) {
                    var colum = table._COLUMNS[k];
                    if (colum.index) objectStore.createIndex(k, colum.unique ? true : false);
                }
            }
        }
    }

    closedb() {
        this.db.close();
        dbBases[this.dbname] = void 0;
        this.db = void 0;
        delete dbBases[this.dbname];
    }
}

class dbTransaction {
    // 对事务管理进行封装
    db;
    tables;
    mode;
    constructor(dbname, tables, mode, success, error) {
        // 初始化数据库
        this.tables = tables;
        this.mode = mode;
        var _this = this;

        if (!dbBases[dbname]) {
            dbBases[dbname] = new dbAbstract(dbname, function(success) {
                var txname = _this.tables.toString();
                var tx = dbBases[dbname].txes[txname];
                if (!tx && tx.mode != mode) {
                    tx = setTransaction(_this.db, _this.tables, _this.mode);
                    dbBases[dbname].txes[txname] = tx;
                    _this.txname = txname;
                }
                if (success) {
                    
                }
            }, function(error) {
                
            });
        }
    }

    end() {
        // 仅结束当前事务
        dbBases[this.dbname].txes[txname] = void 0;
        delete dbBases[this.dbname].txes[txname];
    }

    close() {
        // 结束当前事务且关闭数据库
        this.end();
        dbBases[this.dbname].closedb();
    }
}

function setTransaction(db, tables, mode) {
    var tx = db.transaction(tables, mode);
    return tx;
}

function getTransaction(dbname, tables, mode, success, error) {
    var txBase;
    var dbBase = dbBases[dbname];
    if (dbBase) {
        txBase = dbBase.txBase[tables]
    } else {
        txBase = (new dbTransaction(dbname, tables, mode)).tx;
    }
    
}

export default {
    
}
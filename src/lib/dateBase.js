 
// 向前兼容浏览器
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

function createDateBase(dbName) {
    var request = window.indexedDB.open(dbName);
    request.onsuccess = function() {
        console.log('success');
    }
    request.onerror = function() {
        console.log('error');
    }
    request.onupgradeneeded = function() {
        console.log('upgradeneeded');
    }
}
function deleteDateBase(dbName) {
    var request = indexedDB.deleteDatabase(dbName);
    request.onsuccess = function() {
        console.log('success');
    }
    request.onerror = function() {
        console.log('error');
    }
}
function openDateBase(dbName) {
    var request = window.indexedDB.open(dbName);
    request.onsuccess = function() {
        console.log('success');
    }
    request.onerror = function() {
        console.log('error');
    }
}

var db = {

}

export default db;
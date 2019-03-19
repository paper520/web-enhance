// 获取兼容的数据库对象
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// 1.连接数据库（返回的是一个IDBOpenDBRequest对象）
var request = indexedDB.open('indexedDB_test', 1);

var database;

// 3.创建或打开数据库成功
request.onsuccess = function (e) { database = e.target.result; };

// 2.对象存储空间（类似表）定义
request.onupgradeneeded = function (e) {
  database = e.target.result;

  // 相当于创建了一个表，index作为主键
  database.createObjectStore("table1", { keyPath: "index" });

};

function doIndexedDB() {

  // 4.获取事务和对象存储空间，具体的操作由对象存储空间store提供
  var transaction = database.transaction(["table1"], 'readwrite');
  var store = transaction.objectStore("table1");

  // 5.操作表，以添加为例，别的类似
  store.add({ "index": "1", "name": "狗", "info": "狗是人类的好朋友" });
  store.add({ "index": "2", "name": "猫", "info": "猫是软体动物" });
}

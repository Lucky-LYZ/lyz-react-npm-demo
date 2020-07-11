const copyFile = require('./utils/copyFile');

// 先将src目录下的组件拷贝至lib目录下；
copyFile('./src', './lib');

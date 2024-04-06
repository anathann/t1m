// 导入uniqid模块
const uniqid = require('uniqid');

// 生成一个唯一ID
function generateUniqueId() {
    return uniqid();
}

module.exports = {
//    getCurrentFormattedDate,
    generateUniqueId
};

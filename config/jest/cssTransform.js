'use strict';

// module.exports = {
//   process() {
//     return 'module.exports = {};';
//   },
//   getCacheKey() {
//     // The output is always the same.
//     return 'cssTransform';
//   }
// };
// module.exports = {
//     process() {
//     return 'module.exports = {};';
//   },
// };

module.exports = {
  process() {
    // 返回一个包含 `code` 属性的对象
    return {
      code: 'module.exports = {};', // 返回一个空的模块
    };
  },
  getCacheKey() {
    // 返回一个固定的缓存键
    return 'cssTransform';
  },
};
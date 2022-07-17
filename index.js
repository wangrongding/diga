// 查找字符串中是否包含中文
function isChinese(str) {
  var reg = /[\u4E00-\u9FA5]/;
  return reg.test(str);
}

function isChineseChar(str) {
  return str.match(/[\u4e00-\u9fff]/g);
}

/* escape对字符串进行编码时，字符值大于255的以"%u****"格式存储，而字符值大于255的恰好是非英文字符 */
function isNonEnglishChar(str) {
  return escape(str).indexOf("%u") < 0;
  // return str.match(/[^\x00-\xff]/g);
}

function isNonEnglishChar(str) {
  return str.split("").some((item) => {
    return item.charCodeAt() > 255;
  });
}

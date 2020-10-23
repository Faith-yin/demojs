/*
 * @Date: 2020-10-12 13:50:17
 * @information: emoji表情校验
 */


/**
 * @author: ypf
 * @Date: 2020-10-22 18:17:39
 * @information: 判断文本中是否有emoji表情
 */
function checkEmojiCharacter(substring) {
  substring = String(substring)
  for (let i = 0; i < substring.length; i++) {
    let hs = substring.charCodeAt(i);
    if (0xd800 <= hs && hs <= 0xdbff) {
      if (substring.length > 1) {
        let ls = substring.charCodeAt(i + 1);
        let uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
        if (0x1d000 <= uc && uc <= 0x1f77f) {
          return true;
        }
      }
    } else if (substring.length > 1) {
      let ls = substring.charCodeAt(i + 1);
      if (ls == 0x20e3) {
        return true;
      }
    } else {
      if (0x2100 <= hs && hs <= 0x27ff) {
        return true;
      } else if (0x2B05 <= hs && hs <= 0x2b07) {
        return true;
      } else if (0x2934 <= hs && hs <= 0x2935) {
        return true;
      } else if (0x3297 <= hs && hs <= 0x3299) {
        return true;
      } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
        || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
        || hs == 0x2b50) {
        return true;
      }
    }
  }
}


/**
 * @author: ypf
 * @Date: 2020-10-22 18:17:51
 * @information: 过滤emoji表情
 */
function filterEmoji(val) {
  let ranges = [
    '\ud83c[\udf00-\udfff]',
    '\ud83d[\udc00-\ude4f]',
    '\ud83d[\ude80-\udeff]'
  ];
  let value = val.replace(new RegExp(ranges.join('|'), 'g'), '')
  return value
}





console.log(checkEmojiCharacter('qer😀😃234r'))

console.log(checkEmojiCharacter('qer😀😃234r🤗😶'))


console.log(filterEmoji('qer😀😃234r'))
console.log(filterEmoji('qer😀😃234r🤗😶'))
console.log(filterEmoji('123'))


/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.split(" ").map(i=>i.split("").reverse().join("")).join(" ")
};

s = "Let's take LeetCode contest"
console.log('reverseWords(s):', reverseWords(s))
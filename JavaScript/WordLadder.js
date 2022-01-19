// https://leetcode.com/problems/word-ladder/

import { Queue } from "@datastructures-js/queue";

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const dict = new Set(),
    visited = new Set();
  for (let word of wordList) dict.add(word);

  const q = new Queue();
  q.enqueue([beginWord, 1]);
  visited.add(beginWord);

  while (!q.isEmpty()) {
    const str = q.front()[0],
      steps = q.front()[1];
    q.dequeue();
    if (str === endWord) return steps;
    for (let i = 0; i < str.length; i++) {
      for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
        const next =
          str.substring(0, i) +
          String.fromCharCode(c) +
          str.substring(i + 1, str.length);
        if (dict.has(next) && !visited.has(next)) {
          q.enqueue([next, steps + 1]);
          visited.add(next);
        }
      }
    }
  }
  return 0;
};

(() => {
  const beginWord = "hit",
    endWord = "cog",
    wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  console.log(ladderLength(beginWord, endWord, wordList));
})();

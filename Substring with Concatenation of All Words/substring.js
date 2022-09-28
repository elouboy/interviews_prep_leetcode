/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function (s, words) {
    return [...s.matchAll(new RegExp(`(?=((${[...new Set(words)].join('|')}){${words.length}}))`, "g"))].map(match => match[1].match(new RegExp(`.{${words[0].length}}`, 'g')).sort().toString() === words.sort().toString() ? match.index : null).filter(c => Number.isInteger(c));
};
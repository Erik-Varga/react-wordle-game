import wordBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  let wordIndex;
  let wordCount;

  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      wordCount = wordArr.length;
      wordIndex = Math.floor(Math.random() * wordArr.length);
      todaysWord = wordArr[wordIndex];
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord, wordIndex, wordCount };
};

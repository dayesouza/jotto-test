export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const geussedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => geussedLetterSet.has(letter)).length;
}
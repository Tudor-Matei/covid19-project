export default function capitaliseFirstLetter(word: string): string {
  return word
    .split("")
    .reduce((result, letter, letterIndex) => result.concat(letterIndex === 0 ? letter.toUpperCase() : letter), "");
}

const upperCaseFirst = (word) => {
  if (!word) return word;

  return word.trim().charAt(0).toUpperCase() + word.toLowerCase().slice(1);
};

const upperCaseString = (str) => {
  if (!str) return str;
  const words = str.trim().split(" ");

  if (words.length === 1) {
    return upperCaseFirst(words[0]);
  }

  return words.map((w) => upperCaseFirst(w)).join(" ");
};

module.exports = { upperCaseString };

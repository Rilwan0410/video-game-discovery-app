function capitalize(str) {
  const firstLetter = str.slice(0, 1).toUpperCase();
  str = firstLetter + str.split("").splice(1).join("");
  return str;
}

function capitalizeEachWord(str) {
  let arr = [];
  let words = str.split(" ");
  words.forEach((word) => {
    arr.push(capitalize(word));
  });

  return arr.join(" ");
}


export {  capitalizeEachWord };

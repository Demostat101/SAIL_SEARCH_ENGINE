const key = "AIzaSyDe9DQOuJqmo2ogY3QCKoFGozV8HuUO2rw";
const ID = "f57abf813584a44d8";

export const fetchData = async (word = word, startIndex = startIndex) => {
  let url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${ID}&q=${word}&start=${startIndex}`;

  const data = await fetch(url);

  const result = await data.json();

  return result;
};

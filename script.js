// https://hp-api.onrender.com/api/characters/house/gryffindor

const form = document.querySelector("form");
const input = document.querySelector("input");
const charactersID = document.querySelector("#characters");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userHouse = input.value.toLowerCase();
  const fetchCharacters = await getHouseAPI(userHouse);
  for (character of fetchCharacters) {
    console.log(character);
    if (character.image) {
      const img = document.createElement("img");
      img.src = character.image;
      charactersID.append(img);
      input.value = "";
    }
  }
});

const getHouseAPI = async (house) => {
  try {
    const apifetch = await axios.get(
      `https://hp-api.onrender.com/api/characters/house/${house}`
    );
    return apifetch.data;
  } catch (error) {
    console.log(error);
  }
};

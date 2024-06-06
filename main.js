"use strict";

document.getElementById("fetch-btn").addEventListener("click", async (e) => {
  const swapiData = await getSwapiData();
  console.log(swapiData);
});

async function getSwapiData() {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  return data;
  //   for (let key in data) {
  //     console.log(key);
  //   }
};

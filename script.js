import { dataInfo } from "./data.js";

const content = document.querySelector(".content");

const data = JSON.parse(dataInfo);
console.log(data);

data.forEach(({ text, name, url }) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = url;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = name;


  const idPara = document.createElement("p");
  idPara.classList.add("card-content");
  idPara.textContent = text;

  cardBody.appendChild(title);
  cardBody.appendChild(idPara);

  div.appendChild(img);
  div.appendChild(cardBody);

  content.appendChild(div);
});
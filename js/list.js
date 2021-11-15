import { render } from "./utils.js";

const List = (data) => {
  const elements = data
    .map((item) => `<li>${item.title} - ${item.expires} - </li>
    <li><label><input 
      type="checkbox" ${item.completed ? "checked" : ""} id="${item.id}"
    /> ${item.title}</label></li>`)
    .join("");

  const container = document.querySelector("#container");
  render(
    container,
    `
    <p>Elenco to do</p>
    <ul>${elements}</ul>`
  );
};

export { List };
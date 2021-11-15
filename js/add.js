import { render, API } from "./utils.js";

const Add = () => {
  const container = document.querySelector("#container");

  render(
    container,
    `<div>
    <h3>Aggiungi un to do</h3>
    <form id="create">
      <div class="row">
        <label for="title">title:</label>
        <input type="text" id="title" name="title" />
      </div>
      <div class="row">
        <label for="expires">expires:</label>
        <input type="date" id="expires" name="expires" />
      </div>
      <div class="row">
        <label for="completed">completed</label>
        <input type="checkbox" id="completed" name="completed" />
      </div>
     
      <button>Salva </button>
    </form>
  </div>`
  );

  const form = document.querySelector("#create");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todo = {
      title: event.target.title.value,
      expires: event.target.expires.value,
      completed: event.target.completed.value
      
    };

    console.log(todo);

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  });
};

export { Add };
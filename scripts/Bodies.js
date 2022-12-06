import { getBodies, setBody } from "./database.js";

const bodies = getBodies();

export const Bodies = () => {
  return `
    <section class="body-option">
      <h2>Body</h2>
        ${bodies
          .map((body) => {
            // rather than modify the database, index the array above for the value
            return `<input type="radio" name="body" value="${body.id}" /> ${body.type}`;
          })
          .join("")}
    </section>`;
};

document.addEventListener("change", (event) => {
  if (event.target.name === "body") {
    setBody(parseInt(event.target.value));
  }
});

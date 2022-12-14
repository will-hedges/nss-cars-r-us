import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies();

export const Technologies = () => {
  return `<section class="choices__technologies options">
  <h2>Technologies</h2>
    <select id="tech">
      <option value="0">Select a technology package</option>
        ${technologies
          .map((tech) => {
            return `<option value="${tech.id}">${tech.name}</option>`;
          })
          .join("")}
    </select>
  </section>`;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "tech") {
    setTechnology(parseInt(event.target.value));
  }
});

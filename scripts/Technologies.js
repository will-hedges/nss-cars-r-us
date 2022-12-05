import { getTechnologies } from "./database.js";

const technologies = getTechnologies();

export const Technologies = () => {
  return `<h2>Technologies</h2>
    <select id="tech">
      <option value="0">Select a technology package</option>
        ${technologies
          .map((tech) => {
            return `<option value="${tech.id}">${tech.name}</option>`;
          })
          .join("")}
    </select>`;
};

document.addEventListener("change", (event) => {
  const dropdown = event.target;

  if (dropdown.id === "tech") {
    const techId = parseInt(event.target.value);
    // get the tech obj and access the name prop in one step!
    const techPackage = technologies.find((tech) => tech.id === techId).name;
    window.alert(`The customer chose the ${techPackage}`);
  }
});

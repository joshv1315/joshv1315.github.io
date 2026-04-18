interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "joshuavijayasegar.com",
    description: "This personal website — built from scratch with TypeScript, HTML, and CSS. No frameworks.",
    url: "https://www.joshuavijayasegar.com",
    tags: ["TypeScript", "HTML", "CSS"],
  },
];

function createProjectCard(project: Project): HTMLElement {
  const card = document.createElement("article");
  card.className = "project-card";

  const link = document.createElement("a");
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "project-link";

  const name = document.createElement("h3");
  name.className = "project-name";
  name.textContent = project.name;

  const desc = document.createElement("p");
  desc.className = "project-desc";
  desc.textContent = project.description;

  const tags = document.createElement("div");
  tags.className = "project-tags";
  project.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tags.appendChild(span);
  });

  link.appendChild(name);
  card.appendChild(link);
  card.appendChild(desc);
  card.appendChild(tags);

  return card;
}

function renderProjects(): void {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  if (projects.length === 0) {
    const empty = document.createElement("p");
    empty.className = "projects-empty";
    empty.textContent = "More projects coming soon.";
    container.appendChild(empty);
    return;
  }

  projects.forEach((project) => {
    container.appendChild(createProjectCard(project));
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);

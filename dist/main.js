const workProjects = [
  {
    name: "Amazon Dash Cart",
    description:
      "Engineered Amazon's Dash Cart at Whole Foods, a smart shopping cart that lets customers skip the checkout line by detecting items as they shop.",
    url: "https://www.grocerydive.com/news/amazon-updates-smart-carts-whole-foods-rollout/809058/",
    tags: ["Amazon", "Hardware", "Retail Tech"],
  },
];

const personalProjects = [
  {
    name: "joshuavijayasegar.com",
    description:
      "This personal website, built from scratch with TypeScript, HTML, and CSS. No frameworks.",
    url: "https://www.joshuavijayasegar.com",
    tags: ["TypeScript", "HTML", "CSS"],
  },
];

function createProjectCard(project) {
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

function renderGrid(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  projects.forEach((p) => container.appendChild(createProjectCard(p)));
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid(workProjects, "work-grid");
  renderGrid(personalProjects, "personal-grid");
});

document.addEventListener("DOMContentLoaded", () => {
  const tocMenu = document.getElementById("toc-menu");
  const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  var count = 0;

  headers.forEach(header => {
    // const headerText = header.textContent.trim();
    // if (headerText === "Contact me") return;
    count = count + 1; // Do not add the "Contact me" tag and Webpage title
    if (count < 3) { return; }
    const level = parseInt(header.tagName.charAt(1)) - 1;
    const id = header.textContent.replace(/\s+/g, "-").toLowerCase();
    header.id = id;

    const option = document.createElement("option");
    option.value = `#${id}`;
    option.textContent = `${" ".repeat(level * 2)}${header.textContent}`; // Indent sub-headers
    tocMenu.appendChild(option);
  });
});

function navigateToSection(event) {
  const selected = event.target.value;
  if (selected) {
    window.location.hash = selected;
  }
}

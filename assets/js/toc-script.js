document.addEventListener("DOMContentLoaded", () => {
    // Create a TOC container and add it to the right side of the webpage
    const tocContainer = document.createElement("div");
    tocContainer.style.position = "fixed";
    tocContainer.style.right = "20px";
    tocContainer.style.top = "100px";
    tocContainer.style.width = "200px";
    tocContainer.style.padding = "10px";
    tocContainer.style.backgroundColor = "#f9f9f9";
    tocContainer.style.border = "1px solid #ddd";
    tocContainer.style.fontSize = "14px";
    document.body.appendChild(tocContainer);

    const tocList = document.createElement("ul");
    tocList.style.listStyleType = "none";
    tocList.style.paddingLeft = "0";
    tocContainer.appendChild(tocList);

    // Function to create a TOC item
    const createTOCItem = (text, id, level) => {
        const listItem = document.createElement("li");
        listItem.style.marginLeft = `${level * 20}px`; // Indent sub-headers
        const link = document.createElement("a");
        link.textContent = text;
        link.href = `#${id}`;
        link.style.textDecoration = "none";
        link.style.color = "#333";
        listItem.appendChild(link);
        return listItem;
    };

    // Get headers and add to TOC
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headers.forEach(header => {
        const level = parseInt(header.tagName.charAt(1)) - 1; // Header level (h1=0, h2=1, etc.)
        const id = header.textContent.replace(/\s+/g, "-").toLowerCase(); // Generate id from header text
        header.id = id; // Assign id to header
        const tocItem = createTOCItem(header.textContent, id, level);
        tocList.appendChild(tocItem);
    });

    // Highlight TOC item on scroll
    document.addEventListener("scroll", () => {
        let currentHeader = null;
        headers.forEach(header => {
            const rect = header.getBoundingClientRect();
            if (rect.top <= 10 && rect.bottom >= 10) {
                currentHeader = header;
            }
        });

        if (currentHeader) {
            const currentId = currentHeader.id;
            tocList.querySelectorAll("a").forEach(link => {
                if (link.getAttribute("href").slice(1) === currentId) {
                    link.style.fontWeight = "bold";
                } else {
                    link.style.fontWeight = "normal";
                }
            });
        }
    });
});

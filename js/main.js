(() => {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".menu-toggle");
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  for (const link of document.querySelectorAll(".site-nav a")) {
    const target = link.getAttribute("href");
    if (target === currentFile || (currentFile === "" && target === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  }

  if (!nav || !toggle) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "打开导航菜单");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "打开导航菜单" : "关闭导航菜单");
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
})();

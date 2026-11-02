// Hamilton Marketing Services: mobile menu and sub-menus.
(() => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.getElementById("primary-nav");
  if (!menuBtn || !nav) return;
  const mobile = () => window.matchMedia("(max-width: 1080px)").matches;
  const setOpen = open => {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  menuBtn.addEventListener("click", () => setOpen(menuBtn.getAttribute("aria-expanded") !== "true"));
  // On phones the first tap on a menu with a sub-list opens the list; a second tap follows the link.
  nav.querySelectorAll(".has-sub > a").forEach(a => {
    a.addEventListener("click", e => {
      if (!mobile()) return;
      const li = a.parentElement;
      if (!li.classList.contains("open")) { e.preventDefault(); li.classList.add("open"); }
    });
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); menuBtn.focus(); }
  });
})();

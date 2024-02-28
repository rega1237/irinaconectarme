export const showSubmenus = () => {
  const parentMenu = document.getElementById("parent-menu");
  const showAllSubMenus = document.getElementById("show-all-submenu");

  parentMenu.addEventListener("click", () => {
    showAllSubMenus.classList.toggle("hidden");
  });
};

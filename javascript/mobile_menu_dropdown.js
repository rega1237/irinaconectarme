export const showSubmenus = () => {
  const parentMenu = document.getElementById("parent-menu");
  const showAllSubMenus = document.getElementById("show-all-submenu");
  const innerMenu = document.getElementById("inner-menu");

  parentMenu.addEventListener("click", () => {
    showAllSubMenus.classList.toggle("hidden");
  });

  showAllSubMenus.addEventListener("click", () => {
    innerMenu.classList.toggle("hidden");
  });
};

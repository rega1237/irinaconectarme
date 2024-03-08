import sendMailPeru from "./javascript/pre_register_peru";
import navBar from "./javascript/navbar";
import sendMailMiami from "./javascript/pre_register_miami";
import sendMailOnline from "./javascript/waitListOnline";
import sendMailHouston from "./javascript/subscriptionHouston";
import { showSubmenus } from "./javascript/mobile_menu_dropdown";

const currentUrl = window.location.href;

if (currentUrl === 'https://irinafaneite.com/') {
  navBar();
  showSubmenus();
}
else if (currentUrl.includes("peru")) {
  sendMailPeru();
  navBar();
  showSubmenus();
} else if (currentUrl.includes("miami")) {
  navBar();
  showSubmenus();
  sendMailMiami();
} else if (currentUrl.includes("list_online")) {
  navBar();
  showSubmenus();
  sendMailOnline();
} else if (currentUrl.includes("presencial")) {
  navBar();
  showSubmenus();
  sendMailHouston();
} else if (currentUrl.includes("conectarme")) {
  navBar();
  showSubmenus();
}

import sendMailPeru from "./javascript/pre_register_peru";
import navBar from "./javascript/navbar";
import sendMailMiami from "./javascript/pre_register_miami";
import sendMailOnline from "./javascript/waitListOnline";
import sendMailHouston from "./javascript/subscriptionHouston";
import {showSubmenus} from "./javascript/mobile_menu_dropdown";

const currentUrl = window.location.href;

navBar();
showSubmenus();

if(currentUrl.includes("peru")) {
  sendMailPeru();
} else if(currentUrl.includes("miami")) {
  sendMailMiami();
} else if(currentUrl.includes("list_online")) {
  sendMailOnline();
} else if(currentUrl.includes("presencial")) {
  sendMailHouston();
}
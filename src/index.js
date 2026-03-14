import "./styles.css";
import '@fontsource/roboto';
import '@fontsource/potta-one';
import makeHomePage from "./js/home.js";
import makeContactPage from "./js/contact.js";
import makeMenuPage from "./js/menu.js";
import { fixBorderIssue, initMenuListeners } from "./js/menu.js";

document.addEventListener('DOMContentLoaded', () => {
   makeHomePage();
   console.log(document.getElementById('content').innerHTML);
});

document.querySelector('.home-btn').addEventListener('click', () => {
   const content = document.getElementById('content');
   if (!content.classList.contains('home-page')) {
      content.innerHTML = '';
      makeHomePage();
   }
});

document.querySelector('.menu-btn').addEventListener('click', () => {
   const content = document.getElementById('content');
   if (!content.classList.contains('menu-page')) {
      content.innerHTML = '';
      makeMenuPage();
      fixBorderIssue();
      initMenuListeners();
   }
});

document.querySelector('.contact-btn').addEventListener('click', () => {
   const content = document.getElementById('content');
   if (!content.classList.contains('contact-page')) {
      content.innerHTML = '';
      makeContactPage();
   }
});

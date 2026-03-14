import "../styles/home.css";
export default function makeHomePage() {
   homePage.populateHomePage();
}

const homePage = {
   createElements(type, selector) {
      const element = document.createElement(type);
      if (selector.startsWith('#')) {
         element.id = selector.slice(1);
      } else {
         element.classList.add(selector);
      }
      return element;
   },

   populateHomePage() {
      const h1 = this.createElements('h1', '#home-page-header');
      h1.textContent = "Osteria Cenere";

      const heroSec = this.createElements('p', 'hero-sec');
      heroSec.innerHTML = "<i>Come hungry.Leave happy.</i>";

      const descSec = this.createElements('p', 'desc-sec');
      descSec.innerHTML = "<i>Osteria Cenere has been around long enough to know what matters — a table that feels like yours, food that actually tastes like something, and staff who mean it when they ask how your evening is going.</i>";

      const hoursSec = this.createElements('div', 'hours-sec');
      const hoursH3 = this.createElements('h3', '#hours-header');
      hoursH3.textContent = "Hours:"
      const hoursPara = this.createElements('p', '#hours-para');
      hoursPara.textContent = "Tuesday — Sunday 12:00 pm – 11:00 pm Closed Mondays";
      hoursSec.append(hoursH3, hoursPara);

      const locationSec = this.createElements('div', 'location-sec');
      const locationH3 = this.createElements('h3', '#location-header');
      locationH3.textContent = "Location:"
      const locationPara = this.createElements('p', '#location-para');
      locationPara.textContent = "23 Elm Street, Brooklyn, NY Two blocks from the Carroll Street station.";
      locationSec.append(locationH3, locationPara);

      const content = document.getElementById('content');
      content.className = 'home-page';
      content.append(h1, heroSec, descSec, hoursSec, locationSec);
   },
};

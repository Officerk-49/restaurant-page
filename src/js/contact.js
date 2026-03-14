import "../styles/contact.css";

export default function makeContactPage() {
   contactPage.populateContactPage();
}

const contactPage = {
   createElements(type, selector) {
      const element = document.createElement(type);
      if (selector.startsWith('#')) {
         element.id = selector.slice(1);
      } else {
         element.classList.add(selector);
      }
      return element;
   },

   populateContactPage() {

      const contactWrapper = this.createElements('section', '#contact-sec');

      const phoneAddress = this.createElements('address', 'phone-address');
      const phoneH3 = this.createElements('h3', '#phone-header');
      phoneH3.textContent = "Phone:";
      const phoneNum1 = this.createElements('a', 'phone-num-1');
      phoneNum1.href = "tel:+17184430921";
      phoneNum1.textContent = "(718) 443 0921";
      const phoneNum2 = this.createElements('a', 'phone-num-2');
      phoneNum2.href = "tel:+17184430921";
      phoneNum2.textContent = "(718) 557 3408";
      phoneAddress.append(phoneH3, phoneNum1, phoneNum2);

      const emailAddress = this.createElements('address', 'email-address');
      const emailH3 = this.createElements('h3', '#email-header');
      emailH3.textContent = "Email:";
      const emailLink = this.createElements('a', 'email-link');
      emailLink.href = "mailto:hello@osteriacenere.com";
      emailLink.textContent = "hello@osteriacenere.com";
      const emailDesc = this.createElements('div', '#email-desc');
      emailDesc.textContent = "We get back within 24 hours";
      emailAddress.append(emailH3, emailLink, emailDesc);

      const privateEventsSec = this.createElements('section', 'private-events-sec');
      const privateEventsH3 = this.createElements('h3', '#private-events-header');
      privateEventsH3.textContent = "Private Events:";
      const privateEventsList = this.createElements('ul', 'private-events-list');
      const privateEvents1 = this.createElements('li', '#private-events-1');
      privateEvents1.textContent = "We have a private room that seats up to 20";
      const privateEvents2 = this.createElements('li', '#private-events-2');
      privateEvents2.textContent = "Works well for birthdays, family gatherings, or work dinners";
      const privateEvents3 = this.createElements('li', '#private-events-3');
      privateEvents3.textContent = "Reach out by email and we'll work out the details together";
      privateEventsList.append(privateEvents1, privateEvents2, privateEvents3);
      privateEventsSec.append(privateEventsH3, privateEventsList);

      const locationAddress = this.createElements('address', 'location-address');
      const locationH3 = this.createElements('h3', '#location-header');
      locationH3.textContent = "Location:";
      const locationDesc = this.createElements('div', 'location-desc');
      locationDesc.textContent = "23 Elm Street, Brooklyn, NY Two blocks from the Carroll Street station";
      locationAddress.append(locationH3, locationDesc);

      const hoursSec = this.createElements('div', '#hours-sec');
      const hoursH3 = this.createElements('h3', '#contact-hours-header');
      hoursH3.textContent = "Hours:";
      const hoursDesc = this.createElements('div', '#hours-desc');
      hoursDesc.textContent = "Tuesday – Sunday 12:00 pm – 11:00 pm Closed Mondays";
      hoursSec.append(hoursH3, hoursDesc);

      contactWrapper.append(phoneAddress, emailAddress, privateEventsSec, locationAddress, hoursSec);

      const content = document.getElementById('content');
      content.className = 'contact-page';
      content.append(contactWrapper);
   },
};

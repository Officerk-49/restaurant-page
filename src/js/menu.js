import "../styles/menu.css";

export default function makeMenuPage() {
   menuPage.populateMenuPage();
}

const menuPage = {
   createElements(type, selector) {
      const element = document.createElement(type);
      if (selector.startsWith('#')) {
         element.id = selector.slice(1);
      } else {
         element.classList.add(selector);
      }
      return element;
   },

   populateMenuPage() {
      const menuGrid = this.createElements('section', '#menu-grid');

      const dish1 = this.createElements('div', 'dish');
      const dish1H3 = this.createElements('h3', '#spaghetti-header');
      dish1H3.textContent = "Spaghetti Bolonese";
      const dish1Desc = this.createElements('p', 'description');
      dish1Desc.textContent = "A slow-cooked beef and tomato sauce, finished with aged Parmigiano";
      const dish1Price = this.createElements('p', 'price');
      dish1Price.textContent = "$18";
      dish1.append(dish1H3, dish1Desc, dish1Price);

      const dish2 = this.createElements('div', 'dish');
      const dish2H3 = this.createElements('h3', '#pizza-header');
      dish2H3.textContent = "Margherita Pizza";
      const dish2Desc = this.createElements('p', 'description');
      dish2Desc.textContent = "Classic tomato base with fresh mozzarella and basil straight from the oven";
      const dish2Price = this.createElements('p', 'price');
      dish2Price.textContent = "$10";
      dish2.append(dish2H3, dish2Desc, dish2Price);

      const dish3 = this.createElements('div', 'dish');
      const dish3H3 = this.createElements('h3', '#salmon-header');
      dish3H3.textContent = "Grilled Salmon";
      const dish3Desc = this.createElements('p', 'description');
      dish3Desc.textContent = "Served over seasonal vegetables with a light lemon butter sauce";
      const dish3Price = this.createElements('p', 'price');
      dish3Price.textContent = "$20";
      dish3.append(dish3H3, dish3Desc, dish3Price);

      const dish4 = this.createElements('div', 'dish');
      const dish4H3 = this.createElements('h3', '#salad-header');
      dish4H3.textContent = "Caesar Salad";
      const dish4Desc = this.createElements('p', 'description');
      dish4Desc.textContent = "Crisp romaine, house-made croutons and our own Caesar dressing";
      const dish4Price = this.createElements('p', 'price');
      dish4Price.textContent = "$10";
      dish4.append(dish4H3, dish4Desc, dish4Price);
 
      const dish5 = this.createElements('div', 'dish');
      const dish5H3 = this.createElements('h3', '#steak-header');
      dish5H3.textContent = "Ribeye Steak";
      const dish5Desc = this.createElements('p', 'description');
      dish5Desc.textContent = "A generous cut, served with roasted potatoes and seasonal greens";
      const dish5Price = this.createElements('p', 'price');
      dish5Price.textContent = "$30";
      dish5.append(dish5H3, dish5Desc, dish5Price);
      
      const dish6 = this.createElements('div', 'dish');
      const dish6H3 = this.createElements('h3', '#risotto-header');
      dish6H3.textContent = "Mushroom Risotto";
      const dish6Desc = this.createElements('p', 'description');
      dish6Desc.textContent = "Slow-stirred and creamy, finished with a touch of truffle oil";
      const dish6Price = this.createElements('p', 'price');
      dish6Price.textContent = "$15";
      dish6.append(dish6H3, dish6Desc, dish6Price);
 
      const dish7 = this.createElements('div', 'dish');
      const dish7H3 = this.createElements('h3', '#tiramisu-header');
      dish7H3.textContent = "Tiramisu";
      const dish7Desc = this.createElements('p', 'description');
      dish7Desc.textContent = "Espresso-soaked layers of savoiardi and mascarpone, dusted with cocoa";
      const dish7Price = this.createElements('p', 'price');
      dish7Price.textContent = "$8";
      dish7.append(dish7H3, dish7Desc, dish7Price);
 
      const dish8 = this.createElements('div', 'dish');
      const dish8H3 = this.createElements('h3', '#cheesecake-header');
      dish8H3.textContent = "Cheesecake";
      const dish8Desc = this.createElements('p', 'description');
      dish8Desc.textContent = "Smooth vanilla cheedishake with a warm berry compote on the side";
      const dish8Price = this.createElements('p', 'price');
      dish8Price.textContent = "$8";
      dish8.append(dish8H3, dish8Desc, dish8Price);

      menuGrid.append(dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8);
      const content = document.getElementById('content');
      content.className = 'menu-page';
      content.append(menuGrid);
   },

};

export function fixBorderIssue() {
   const gridMenu = document.getElementById('menu-grid');
   if (!gridMenu) return;

   const columns = window.getComputedStyle(gridMenu).gridTemplateColumns.split(' ').length;
   const secondDish = gridMenu.querySelector('.dish:nth-child(2)');
   if (!secondDish) return;

   if (columns === 1) {
      secondDish.classList.add('border-top');
   } else {
      secondDish.classList.remove('border-top');
   }
}

function onResize() {
   fixBorderIssue();
}

export function initMenuListeners() {
   window.removeEventListener('resize', onResize);
   window.addEventListener('resize', onResize);
}


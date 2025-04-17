//
// Адаптивное меню
//

function updateNavbarLayout() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const moreItem = document.querySelector('.navbar__item_more');
  const moreDropdown = document.querySelector('.navbar__dropdown_more');
  const headerContainer = document.querySelector('.header__container');
  if (!moreDropdown || !headerContainer) return;

  // 1. Возвращаем все элементы из выпадающего меню обратно в navbar
  const itemsInDropdown = [...moreDropdown.children];
  itemsInDropdown.forEach(item => {
    if (item && item !== moreItem) {
      // Вставляем перед moreItem, если он существует в DOM
      if (moreItem && moreItem.parentNode === navbar) {
        navbar.insertBefore(item, moreItem);
      } else {
        navbar.appendChild(item);
      }
      item.style.display = '';
    }
  });

  // 2. Очищаем выпадающее меню
  moreDropdown.innerHTML = '';

  // 3. Гарантируем, что moreItem есть в DOM и он последний
  if (moreItem && moreItem.parentNode !== navbar) {
    navbar.appendChild(moreItem);
  } else if (moreItem && navbar.lastChild !== moreItem) {
    navbar.appendChild(moreItem);
  }

  // 4. Скрываем "More" (покажем позже если нужно)
  moreItem.hidden = true;

  // 5. Получаем все элементы navbar (исключая moreItem и его dropdown)
  const navbarItems = [...navbar.children].filter(el =>
    el &&
    !el.classList.contains('navbar__item_more') &&
    el !== moreDropdown
  );

  // 6. Проверяем переполнение
  let isOverflowing = headerContainer.scrollWidth > headerContainer.clientWidth;

  // 7. Перемещаем элементы в выпадающее меню при необходимости
  const minVisibleItems = 1;
  let movedItems = 0;

  while (isOverflowing && navbarItems.length > minVisibleItems) {
    const itemToMove = navbarItems.pop();
    if (!itemToMove || itemToMove === moreItem || itemToMove === moreDropdown) continue;

    moreDropdown.prepend(itemToMove);
    moreItem.hidden = false;
    movedItems++;

    // Обновляем проверку переполнения
    isOverflowing = headerContainer.scrollWidth > headerContainer.clientWidth;

    // Защита от бесконечного цикла
    if (movedItems > navbarItems.length + 10) break;
  }
}

window.addEventListener('resize', updateNavbarLayout);
document.addEventListener('DOMContentLoaded', updateNavbarLayout);
window.addEventListener('load', updateNavbarLayout);

//
// Burger menu
//

const body = document.querySelector('.body');
const burgerMenu = document.querySelector('.burger-menu');
const sidebar = document.querySelector('.sidebar');
const navbar = document.querySelector('.navbar');
const sidebarContent = document.querySelector('.sidebar__content');
const rightside = document.querySelector('.navbar-rightside');

burgerMenu.addEventListener('click', () => switchMenu());

function switchMenu() {
  burgerMenu.classList.toggle('burger-menu_opened');

  body.classList.toggle('body_locked');

  sidebar.classList.toggle('sidebar_opened');
  if (sidebar.classList.contains('sidebar_opened')) {
    sidebarContent.innerHTML = '';
    sidebarContent.append(rightside.cloneNode(true), navbar.cloneNode(true));
  }
}


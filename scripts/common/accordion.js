//
// Аккордеон
//

const headers = document.querySelectorAll('.accordion-item__header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const currentItem = header.parentElement;
    const allItems = document.querySelectorAll('.accordion-item');

    allItems.forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('active');
      }
    });

    currentItem.classList.toggle('active');
  });
});

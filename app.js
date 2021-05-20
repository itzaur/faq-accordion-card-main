const items = document.querySelectorAll('.text__item');
const box = document.querySelector('.img-box');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

items.forEach(item => {
  item.addEventListener('mouseover', function () {
    box.style.transform = `translate(-2rem, -0.8rem)`;
  });
  item.addEventListener('mouseout', function () {
    box.style.transform = `translate(0, 0)`;
  });
});

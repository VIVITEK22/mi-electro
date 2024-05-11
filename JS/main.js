const swiper = new Swiper('.reviews__body', {
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

for (let item of document.querySelectorAll(".btn--black")) {
  item.onclick = function() {
    for (let parents of document.querySelectorAll(".button-group")) {
      parents.classList.add("button-group--black");
    }
    document.querySelector(".info__image").setAttribute('src', "images/Байк-black.svg");
    document.querySelector(".footer__card-img").setAttribute('src', "images/Байк-balck2.svg");
    document.querySelector(".phone__img").setAttribute("src", "images/phone/phone-balck.svg");
    document.querySelector(".wrapper").classList.add('wrapper--white');
  }
}

for (let item of document.querySelectorAll(".btn--white")) {
  item.onclick = function() {
    for (let parents of document.querySelectorAll(".button-group")) {
      parents.classList.remove("button-group--black");
    }
    document.querySelector(".info__image").setAttribute('src', "images/Байк.svg");
    document.querySelector(".footer__card-img").setAttribute('src', "images/Байк2.svg");
    document.querySelector(".phone__img").setAttribute("src", "images/phone/phone.svg");
    document.querySelector(".wrapper").classList.remove('wrapper--white');
  }
}

document.querySelector('.data__item2').onclick = function(e) {
  let width = document.querySelector('.data__list > span').offsetWidth;
  console.log(width);
  document.querySelector('.data__item1 .data__item-span > span').style.transform = `translateX(calc(100% + ${width * 1}px))`;
  document.querySelector('.data__item--active').classList.remove('data__item--active');
  document.querySelector('.data__item2').classList.add('data__item--active');
}

document.querySelector('.data__item1').onclick = function(e) {
  document.querySelector('.data__item1 .data__item-span > span').style.transform = "translateX(0)";
  document.querySelector('.data__item--active').classList.remove('data__item--active');
  document.querySelector('.data__item1').classList.add('data__item--active');
}

document.querySelector('.data__item3').onclick = function(e) {
  let width = document.querySelector('.data__list > span').offsetWidth;
  document.querySelector('.data__item1 .data__item-span > span').style.transform = `translateX(calc(200% + ${width * 2}px))`;
  document.querySelector('.data__item--active').classList.remove('data__item--active');
  document.querySelector('.data__item3').classList.add('data__item--active');
}

document.querySelector('.safety__item1').onclick = function(e) {
  document.querySelector('.safety__item--active').classList.remove("safety__item--active");
  document.querySelector('.safety__span > span').style.transform = "translateX(0)";
  document.querySelector('.safety__item1').classList.add('safety__item--active');
}

document.querySelector('.safety__item2').onclick = function(e) {
  document.querySelector('.safety__item--active').classList.remove("safety__item--active");
  document.querySelector('.safety__span > span').style.transform = "translateX(calc(100% + 40px))";
  document.querySelector('.safety__item2').classList.add('safety__item--active');
}

document.querySelector('.safety__item3').onclick = function(e) {
  document.querySelector('.safety__item--active').classList.remove("safety__item--active");
  document.querySelector('.safety__span > span').style.transform = "translateX(calc(200% + 80px))";
  document.querySelector('.safety__item3').classList.add('safety__item--active');
}

document.querySelector('.safety__item4').onclick = function(e) {
  document.querySelector('.safety__item--active').classList.remove("safety__item--active");
  document.querySelector('.safety__span > span').style.transform = "translateX(calc(300% + 120px))";
  document.querySelector('.safety__item4').classList.add('safety__item--active');
}
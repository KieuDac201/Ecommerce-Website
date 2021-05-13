import { dataSortProducts, dataAllProducts } from "./data.js";

const btnSort = document.querySelectorAll("#sort-category .title__item");
const productsE = document.querySelector(".sort__products");
const allProductsE = document.querySelector(".allProducts");
const menuIcon = document.querySelector('.nav__icon-menu');
const navMenu = document.querySelector('.nav__menu');
const navItem = document.querySelectorAll('.nav__menu li');

const handleClickSort = (eClicked) => {
  btnSort.forEach((e) => {
    e.classList.remove("active");
  });
  eClicked.classList.add("active");
  const attrBtn = eClicked.getAttribute("data-sort");
  rederSortProduct(dataSortProducts[attrBtn]);
};

const rederSortProduct = (products) => {
  let html = "";
  products.forEach((product) => {
    html += `<div class="product">
                <div class="product__img"><img src="${product.img}" alt="" loading=lazy></div>
                <div class="product__title">${product.name}</div>
                <div class="product__icon">
                        <a href="#"><span class="top-left"></span> <span class="bottom-right"></span><i class="far fa-eye"></i></a>
                        <a href="#"><span class="top-left"></span> <span class="bottom-right"></span><i class="far fa-heart"></i></a>
                        <a href=""><span class="top-left"></span> <span class="bottom-right"></span><i class="fas fa-sync-alt"></i></a>
                </div>
                <div class="product__star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="product__price">${product.price}</div>
            </div>`;
  });

  productsE.innerHTML = html;
};

const rederAllProduct = (products) => {
  let html = "";
  products.forEach((product) => {
    html += `<div class="product">
                <div class="product__img"><img src="${product}" alt="" loading=lazy></div>
                <div class="product__title">Men Casual Shoe</div>
                <div class="product__icon">
                        <a href="#"><span class="top-left"></span> <span class="bottom-right"></span><i class="far fa-eye"></i></a>
                        <a href="#"><span class="top-left"></span> <span class="bottom-right"></span><i class="far fa-heart"></i></a>
                        <a href=""><span class="top-left"></span> <span class="bottom-right"></span><i class="fas fa-sync-alt"></i></a>
                </div>
                <div class="product__star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="product__price">$2000.99</div>
            </div>`;
  });
  allProductsE.innerHTML = html;
};

btnSort.forEach((e) => {
  e.addEventListener("click", () => handleClickSort(e));
});

menuIcon.addEventListener('click', () => {
  if(menuIcon.innerHTML == '<i class="fas fa-times"></i>'){
    menuIcon.innerHTML = '<i class="fas fa-bars"></i>'
    navMenu.classList.remove('active')
  }else{
    menuIcon.innerHTML = '<i class="fas fa-times"></i>'
    navMenu.classList.add('active')
  }
})
navItem.forEach(e => {
  e.addEventListener('click', () => {
    navMenu.classList.remove('active')
    menuIcon.innerHTML = '<i class="fas fa-bars"></i>'
  })
})

rederSortProduct(dataSortProducts.trending);
rederAllProduct(dataAllProducts)

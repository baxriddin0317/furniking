// dropdown function 
let elSpan = document.querySelector(".dropdownAll");

const clickSpan = () => {
    var elUl = document.querySelector(".content__list");
    var arr = elUl.className.split(" ");
    if(!arr.includes('active')){
        elUl.classList = 'content__list active';
    }else {
        elUl.classList = 'content__list';
    }
};

// ul ichiga malumotlarni rending qilish

var elTemplete = $_("#trending-card-templete").content;
var elUlCard = $_(".trending__list");
// elementlarni yasab olish

const creatElement = (obj) => {
    var elNewTemplete = elTemplete.cloneNode(true);

    $_(".trending__img", elNewTemplete).src = obj.imgUrl;
    $_(".cate", elNewTemplete).innerHTML = obj.categorie;
    $_(".trending__list-title", elNewTemplete).innerHTML = obj.title;
    $_(".trending__sum", elNewTemplete).textContent = obj.sum;
    $_(".trending__delsum", elNewTemplete).innerHTML = obj.delSum;

    return elNewTemplete;
}


const rednerCard = (array) => {
    elUlCard.innerHTML = "";

    var elUlFragment = document.createDocumentFragment();

    array.map((obj) => {
        elUlFragment.appendChild(creatElement(obj));
    });

    elUlCard.appendChild(elUlFragment);
}

rednerCard(cards);


// product ulga malumotlarni yozamiz
var elProductUl = document.querySelector(".products__list");
var elProductTemplete = $_("#products-card-templete").content;

//types



const creatProductElement = (obj) => {
    var elNewTemplete = elProductTemplete.cloneNode(true);

    $_(".products__img", elNewTemplete).src = obj.imgUrl;
    $_(".cate", elNewTemplete).innerHTML = obj.categorie;
    $_(".products__list-title", elNewTemplete).innerHTML = obj.title;
    $_(".products__sum", elNewTemplete).textContent = obj.sum;
    $_(".products__delsum", elNewTemplete).innerHTML = obj.delSum;

    return elNewTemplete;
}

const rednerProduct = (array) => {
    elProductUl.innerHTML = "";

    var elUlFragment = document.createDocumentFragment();

    array.map((obj) => {
        elUlFragment.appendChild(creatElement(obj));
    });

    elProductUl.appendChild(elUlFragment);
}

rednerProduct(products);

// menu 
var elAllMenu = document.querySelector(".js-all");
var elNewMenu = document.querySelector(".js-new");
var elBestMenu = document.querySelector(".js-best");
var elTodayMenu = document.querySelector(".js-today");
var newProducts = [];
elAllMenu.style.color = '#7AC751';

// all type uchun
elAllMenu.addEventListener("click", () => {
    rednerProduct(products);
    elPageSum.innerHTML = Math.ceil(products.length / 8);
    len = Math.ceil(products.length / 8) * 874;
    elAllMenu.style.color = '#7AC751';
    elNewMenu.style.color = '';
    elBestMenu.style.color = '';
    elTodayMenu.style.color = '';
});
//type new bolganlari
elNewMenu.addEventListener("click", () => {
    newProducts = products.filter((obj) => {
        if(obj.type == "new"){
            return obj;
        }
    });
    rednerProduct(newProducts);
    elPageSum.innerHTML = Math.ceil(newProducts.length / 8);
    len = Math.ceil(newProducts.length / 8) * 874;
    elAllMenu.style.color = '';
    elNewMenu.style.color = '#7AC751';
    elBestMenu.style.color = '';
    elTodayMenu.style.color = '';
});
// type best bolganlari
elBestMenu.addEventListener("click", () => {
    newProducts = products.filter((obj) => {
        if(obj.type == "best"){
            return obj;
        }
    });

    rednerProduct(newProducts);
    elPageSum.innerHTML = Math.ceil(newProducts.length / 8);
    len = Math.ceil(newProducts.length / 8) * 874;
    elAllMenu.style.color = '';
    elBestMenu.style.color = '#7AC751';
    elNewMenu.style.color = '';
    elTodayMenu.style.color = '';
});
// type today bolganlari
elTodayMenu.addEventListener("click", () => {
    newProducts = products.filter((obj) => {
        if(obj.type == "today"){
            return obj;
        }
    });

    rednerProduct(newProducts);
    elPageSum.innerHTML = Math.ceil(newProducts.length / 8);
    len = Math.ceil(newProducts.length / 8) * 874;
    elAllMenu.style.color = '';
    elTodayMenu.style.color = '#7AC751';
    elBestMenu.style.color = '';
    elNewMenu.style.color = '';
});


// next and prev btns
var elNextBtn = document.querySelector(".next-btn");
var elPrevBtn = document.querySelector(".prev-btn");
var offset = 0;
var len = Math.ceil(products.length / 8) * 874;
var elPageNum = document.querySelector(".page-num");
var elPageSum = document.querySelector(".page-sum");
var pageSum = 1;
elPageNum.innerHTML = pageSum;
elPageSum.innerHTML = Math.ceil(products.length / 8);

elNextBtn.addEventListener("click", () => {
    offset += 874;
    pageSum += 1;
    if(offset > len-874){
        offset = 0;
        pageSum = 1;
    }
    elProductUl.style.transform = `translateY(-${offset}px)`;
    elPageNum.innerHTML = pageSum;
});

elPrevBtn.addEventListener("click", () => {
    offset -= 874;
    pageSum -=1;
    if(offset < 0){
        offset = 0;
        pageSum = 1;
    }
    elProductUl.style.transform = `translateY(-${offset}px)`;
    elPageNum.innerHTML = pageSum;
});

// Modal oyna uchun js kodlari
// elementlarni target qilib olamiz
var modalBg = document.querySelector(".modal-bg");
var modalcontent = document.querySelector(".modal");
var modalBtn = document.querySelector(".btn-js");
var closeBtn = document.querySelector(".close-btn");

var addBtn = document.querySelector("#modal-btn");

addBtn.addEventListener("click", () => {
    modalBg.classList.add("modal-active");
});

closeBtn.addEventListener("click", () => {
    modalBg.classList.remove("modal-active");
});

window.addEventListener("click", (e) => {
    if(e.target == modalBg) {
      modalBg.classList.remove("modal-active");
    }
})

modalBtn.addEventListener("click", (event) => {
    event.preventDefault();

    modalBg.classList.remove("modal-active");
})
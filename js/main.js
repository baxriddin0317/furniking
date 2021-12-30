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
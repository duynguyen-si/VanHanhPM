/*Get-setting*/
var setting = document.getElementById('setting');
var cart = document.getElementById('cart-list');
var iconCart = document.getElementById('cart');
var iconSetting =  document.getElementById('icon-setting');
var iconMenu = document.getElementById('menu-icon');
var menu =  document.getElementById('menu-list');


/*Show setting*/
function showSetting() {
    document.onclick = function(e) {
        if(e.target.id !== 'setting' && e.target.id !== 'icon-setting'){
            setting.classList.remove('show');
        }
    }
    
    iconSetting.onclick = function() {
        setting.classList.toggle('show');
    }  
}
/*Show cart*/
function showCart(){  
    document.onclick = function(e) {
        if(e.target.id !== 'cart' && e.target.id !== 'cart-list'){
            cart.classList.remove('show-cart');
        }
    }
    
    iconCart.onclick = function() {
        cart.classList.toggle('show-cart');
    }
}

/*Show-menu*/
function showMenu(){  
    document.onclick = function(e) {
        if(e.target.id !== 'menu-icon' && e.target.id !== 'menu-list'){
            menu.classList.remove('show-menu');
        }
    }
    
    iconMenu.onclick = function() {
        menu.classList.toggle('show-menu');
    }
}


function countdown() {
    let now = new Date();
    let eventDate = new Date(2021, 12, 31);
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTime;
    
    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h<10) ? "0" + h: h; 
    m = (m<10) ? "0" + m: m; 
    s = (s<10) ? "0" + s: s; 

    document.getElementById("day").textContent = d;
    document.getElementById("day").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minute").textContent = m;
    document.getElementById("second").textContent = s;
    
}

setInterval(countdown,1000);

/*Product*/

var productBtnNext = document.getElementById('btn-next-product');
var productBtnPrev = document.getElementById('btn-prev-product');
var productList1 = document.getElementById("product-list-1");
var productList2 = document.getElementById("product-list-2");

productBtnNext.onclick = ()=> {
    productList1.style.display = 'none';
    productList2.style.display = 'flex';
    productBtnNext.classList.add('icon--active');
    productBtnPrev.classList.remove('icon--active');
}

productBtnPrev.onclick = ()=> {
    productList1.style.display = 'flex';
    productList2.style.display = 'none';
    productBtnNext.classList.remove('icon--active');
    productBtnPrev.classList.add('icon--active');
}
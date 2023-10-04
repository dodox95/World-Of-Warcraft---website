   // buttons logics



function redirectButtonsWhenClicked() {

    document.getElementById("yes").onclick = function () {
    location.href = "./htmls/main.html";
    };

    document.getElementById("no").onclick = function () {
        location.href = "https://www.google.com/";
    };

}


document.getElementById("button-82-pushable").onclick = function () {
    location.href = "https://us.shop.battle.net/en-us/product/diablo-iv";
};

document.getElementById("button-49").onclick = function () {
    location.href = "https://eu.shop.battle.net/en-us/product/diablo_ii_resurrected";
};
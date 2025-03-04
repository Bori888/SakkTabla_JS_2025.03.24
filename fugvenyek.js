export function sakkTablaKeszites() {
    const TAROLO_ELEM = document.querySelector(".tarolo");


    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                TAROLO_ELEM.innerHTML += "<div class='vilagosOldal'></div>";
            } else {
                TAROLO_ELEM.innerHTML += "<div class='sotetOldal'></div>";
            }
        }
    }
}

export function parasztMegjelenit() {
    const PARASZT = document.querySelectorAll(".tarolo > div"); 

    PARASZT.forEach(function (elem) {
        elem.addEventListener("click", function () {
            
            if (!elem.querySelector("img")) { 
                elem.innerHTML = `<img src="./parasztBabu.jpg" alt="paraszt" />`;
            }
        });
    });
}


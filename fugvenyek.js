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

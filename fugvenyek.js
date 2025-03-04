export function sakkTablaKeszites() {
    const TAROLO_ELEM = document.querySelector(".tarolo");
    for (let index = 0; index < 9; index++) {
        TAROLO_ELEM.innerHTML += "<div class ='vilagosOldal'></div>";
        
    }
    for (let j = 0; j < 9; j++) {
        TAROLO_ELEM.innerHTML += "<div class ='sotetOldal'></div>";
    }
    
    
}
export function sakkTablaKeszites() {
    const TAROLO_ELEM = document.querySelector(".tarolo");

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const mezo = document.createElement("div");
            mezo.className = (i + j) % 2 === 0 ? "vilagosOldal" : "sotetOldal";
            TAROLO_ELEM.appendChild(mezo);
        }
    }
}

export function parasztMegjelenit() {
    const mezok = document.querySelectorAll(".tarolo > div");

    mezok.forEach((mezo) => {
        mezo.addEventListener("click", () => {
            if (!mezo.querySelector("img")) {
                const img = document.createElement("img");

                if (mezo.classList.contains("sotetOldal")) {
                    img.src = "./feherBabu.jpg"; 
                    img.alt = "fehér paraszt";
                } else {
                    img.src = "./feketeBabu.jpg"; 
                    img.alt = "fekete paraszt";
                }

                img.style.width = "50%";
                img.style.height = "50%";
                mezo.appendChild(img);
            }
        });
    });
}


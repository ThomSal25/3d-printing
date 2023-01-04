const auswahl = document.querySelector("#auswahl");
const manga = document.querySelectorAll(".manga");

const galery = document.querySelectorAll(".galery2 section");

auswahl.addEventListener("change", hideShow);

function hideShow() {
    if (auswahl.value === "option_all") {
        for (i = 0; i < galery.length; i++) {
            galery[i].classList.remove("hide");
        }
     }
    select("option_manga", "manga");
    select("option_dragonball", "dragonball");
    select("option_one_piece", "one_piece")
    select("option_dc", "dc")
    select("option_harry_potter", "harry_potter")
    select("option_stones", "stones")
}

function select(option, className) {
  if (auswahl.value === option) {
    for (i = 0; i < galery.length; i++) {
      hide(className);
    }
  }
}

function hide(name) {
  galery[i].classList.remove("hide");
  if (!galery[i].classList.contains(name)) {
    galery[i].classList.add("hide");
    console.log(galery[i]);
  }
}

const auswahl = document.querySelector("#auswahl");
const manga = document.querySelectorAll(".manga");

const galery = document.querySelectorAll(".galery2 section");

auswahl.addEventListener("change", hideShow);

function hideShow() {
  if (auswahl.value === "option_manga") {
    for (i = 0; i < galery.length; i++) {
      if (galery[i].classList.contains("manga")) {
        galery[i].classList.add("hide");
        console.log(galery[i]);
      }
    }
  }
}

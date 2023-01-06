const auswahl = document.querySelector("#auswahl");
const galery = document.querySelectorAll(".galery3 section");
const root = document.querySelector(":root");
const duration1 = document.querySelector(".duration");

auswahl.addEventListener("change", hideShow);

function hideShow() {
  if (auswahl.value === "option_all") {
    for (i = 0; i < galery.length; i++) {
      galery[i].classList.remove("hide");
    }
  }
  select("option_manga", "manga", "9s");
  select("option_dragonball", "dragonball");
  select("option_one_piece", "one_piece");
  select("option_dc", "dc");
  select("option_harry_potter", "harry_potter");
  select("option_stones", "stones");
}

function select(option, className, duration, time) {
  if (auswahl.value === option) {
    for (i = 0; i < galery.length; i++) {
        hide(className);
        setAnimationDuration(className)
    }
    root.style.setProperty("--time", time);
    root.style.setProperty("--duration", duration);
  }
}

function hide(name) {
  galery[i].classList.remove("hide");
  if (!galery[i].classList.contains(name)) {
    galery[i].classList.add("hide");
  }
}

function setAnimationDuration(name) {
    galery[i].classList.remove("duration");
    if (galery[i].classList.contains(name)) {
        galery[i].classList.add("duration"); 
    }
}
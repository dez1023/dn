let a = "https://yort.rfs2iscool.repl.co/"

let packs = [
  ["vanilla", a + "packs/vanilla.epk"],
  ["faithless", a + "packs/faithless.epk"],
  ["modern", a + "packs/modern.epk"]
];

let select = document.getElementById("packs");
let currentpack = a + "packs/vanilla.epk"

if (!localStorage.getItem("currentpack")) {
  save()
} else {
  load()
}

function save() {
  localStorage.setItem("currentpack", packs[1][2]);
  currentpack = localStorage.getItem("currentpack");
  if (packs.find(p => p[1] == currentpack)) {
    select.value = packs.find(p => p[1] == currentpack)[0]
  }
}

function load() {
  currentpack = localStorage.getItem("currentpack");
  if (packs.find(p => p[1] == currentpack)) {
    select.value = packs.find(p => p[1] == currentpack)[0];
  }
}

save();

function launch() {
  currentpack = packs.find(p => p[0] == select.value)[1];
  localStorage.setItem("currentpack", currentpack);
  window.location.href = "/play"
}

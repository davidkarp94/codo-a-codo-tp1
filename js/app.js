const br = document.querySelectorAll('.salto');
var x = window.matchMedia("(min-width: 1024px)");

function agregarSalto(x) {
    if (x.matches) {
        for (i=0; i<br.length; i++) {
            br[i].innerHTML = "<br>";
        }
    }
    else {
        for (i=0; i<br.length; i++) {
            br[i].innerHTML = "";
        }
    }
}

agregarSalto(x);
x.addListener(agregarSalto);
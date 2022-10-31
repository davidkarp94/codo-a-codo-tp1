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

// Tickets

const estudiante = document.querySelector('.estudiante');
const trainee = document.querySelector('.trainee');
const junior = document.querySelector('.junior');

const cantidad = document.getElementById('cantidad');
var categoria = document.getElementById('categoria');

const borrar = document.getElementById('borrar');
const resumen = document.getElementById('resumen');
const mostrarPago = document.getElementById('a-pagar');

estudiante.addEventListener('click', function() {
    categoria.value = 'estudiante';
});

trainee.addEventListener('click', function() {
    categoria.value = 'trainee';
});

junior.addEventListener('click', function() {
    categoria.value = 'junior';
});

resumen.addEventListener('click', function(e) {
    e.preventDefault();
    let cuenta;
    if (categoria.value == 'estudiante') {
        cuenta = 200 * 0.2 * cantidad.value;
        mostrarPago.innerHTML = `$${cuenta}`;
    } else if (categoria.value == 'trainee') {
        cuenta = 200 * 0.5 * cantidad.value;
        mostrarPago.innerHTML = `$${cuenta}`;
    } else if (categoria.value == 'junior') {
        cuenta = 200 * 0.85 * cantidad.value;
        mostrarPago.innerHTML = `$${cuenta}`;
    }
})

borrar.addEventListener('click', function(e) {
    e.preventDefault();
    mostrarPago.innerHTML = '';
})
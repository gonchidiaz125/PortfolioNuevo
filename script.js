let menuVisible = false;
// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("backendnet");
        habilidades[1].classList.add("sqlserver");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("htmlcss");
        habilidades[5].classList.add("git");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("Proactividad");
        habilidades[9].classList.add("dedicacion");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
};

// Inicializar EmailJS con tu clave pública
(function() {
    emailjs.init("RUH-LAsnp6bVGLAbU"); // Reemplaza "RUH-LAsnp6bVGLAbU" con tu clave pública de EmailJS
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Estos datos deben coincidir con los campos de tu formulario
    const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Enviar el correo con EmailJS
    emailjs.send("service_0sg401v", "template_7gw8yhd", formData)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Mensaje enviado correctamente!");
            limpiarCampos();
        }, function(error) {
            console.log("FAILED...", error);
            alert("Error al enviar el mensaje, por favor intenta de nuevo. Deben estar todos los campos completos.");
        });
});

function limpiarCampos() {
    document.getElementById("contactForm").reset();
}

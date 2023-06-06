//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links  a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
  //en modo responsive
  var x = document.getElementById("nav");
  x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("js").classList.add("barra-progreso2");
    document.getElementById("bd").classList.add("barra-progreso3");
    document.getElementById("ps").classList.add("barra-progreso4");
  }
}

// CONSUMIR JSON

// const servicioDivs = document.querySelectorAll(".servicio");

// fetch("/archivos/habilidades.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//       const servicio = data[i];
//       const servicioHTML = `
//         <span class="icono"><i class="fa-solid fa-${servicio.icono}"></i></span>
//         <h4>${servicio.titulo}</h4>
//         <hr>
//         <ul class="servicios-tag">
//           ${servicio.tipos
//             .split(" ")
//             .map((tag) => `<li>${tag}</li>`)
//             .join("")}
//         </ul>
//         <p>${servicio.descripcion}</p>
//       `;
//       if (servicioDivs[i]) {
//         servicioDivs[i].innerHTML = servicioHTML;
//       } else {
//         const newDiv = document.createElement("div");
//         newDiv.classList.add("servicio");
//         newDiv.innerHTML = servicioHTML;
//         document.body.appendChild(newDiv);
//       }
//     }
//   });

// ENVIAR GMAIl
const btn = document.getElementById("button-send");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_pbabkso";
  const templateID = "template_pnu2dje";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      // Mostrar mensaje de confirmación al usuario
      const mensajeConfirmacion = document.getElementById("msg");
      document.getElementById("msg").className += " succesfull";
      mensajeConfirmacion.textContent = "Tu mensaje ha sido enviado con éxito.";
      form.appendChild(mensajeConfirmacion);
    },
    (err) => {
      btn.value = "Send Email";
      // Mostrar mensaje de error al usuario
      const mensajeError = document.getElementById("msg");
      document.getElementById("msg").className += " dangerous";
      mensajeError.textContent ="Se produjo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
      form.appendChild(mensajeError);
      console.log(err);
    }
  );
});


//DARKMODE

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        //alert("D")
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        //alert("L")
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}



// IR INICIO
document.querySelector('.go-top-contenido').addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

window.onscroll = function(){
  console.log(document.documentElement.scrollTop )
  if (document.documentElement.scrollTop > 1000) {
    document.querySelector('.go-top-contenido').classList.add('show')
  }else{
    document.querySelector('.go-top-contenido').classList.remove('show')
  }
}
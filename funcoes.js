document.getElementById("aceitar").addEventListener("click", () => {
  document.querySelector(".banner-de-aceitar-ou-rejeitar-cookies").style.display = "none"
})

document.getElementById("rejeitar").addEventListener("click", () => {
  document.querySelector(".banner-de-aceitar-ou-rejeitar-cookies").style.display = "none"
})


/* BLOCO DE FUNÇÕES PARA EXIBIÇÃO DA DESCRIÇÃO DOS SERVIÇOS */
function primeiroServico() {
    let primeiroServico = document.getElementsByClassName("bloco-descricao-do-servico");
    primeiroServico[0].classList.toggle("bloco-do-servico")

    primeiroServico[1].classList.remove("bloco-do-servico")
    primeiroServico[2].classList.remove("bloco-do-servico")
    primeiroServico[3].classList.remove("bloco-do-servico")
    primeiroServico[4].classList.remove("bloco-do-servico")
}

function segundoServico() {
    let segundoServico = document.getElementsByClassName("bloco-descricao-do-servico");
    segundoServico[1].classList.toggle("bloco-do-servico")
  
    segundoServico[0].classList.remove("bloco-do-servico")
    segundoServico[2].classList.remove("bloco-do-servico")
    segundoServico[3].classList.remove("bloco-do-servico")
    segundoServico[4].classList.remove("bloco-do-servico")
}

function terceiroServico() {
    let terceiroServico = document.getElementsByClassName("bloco-descricao-do-servico");
    terceiroServico[2].classList.toggle("bloco-do-servico")
  
    terceiroServico[0].classList.remove("bloco-do-servico")
    terceiroServico[1].classList.remove("bloco-do-servico")
    terceiroServico[3].classList.remove("bloco-do-servico")
    terceiroServico[4].classList.remove("bloco-do-servico")
}

function quartoServico() {
    let quartoServico = document.getElementsByClassName("bloco-descricao-do-servico");
    quartoServico[3].classList.toggle("bloco-do-servico")
  
    quartoServico[0].classList.remove("bloco-do-servico")
    quartoServico[1].classList.remove("bloco-do-servico")
    quartoServico[2].classList.remove("bloco-do-servico")
    quartoServico[4].classList.remove("bloco-do-servico")
}

function quintoServico() {
    let quintoServico = document.getElementsByClassName("bloco-descricao-do-servico");
    quintoServico[4].classList.toggle("bloco-do-servico")

    quintoServico[0].classList.remove("bloco-do-servico")
    quintoServico[1].classList.remove("bloco-do-servico")
    quintoServico[2].classList.remove("bloco-do-servico")
    quintoServico[3].classList.remove("bloco-do-servico")
}


/* BLOCO DE FUNÇÕES PARA TROCA DE IMAGENS DO LADO ESQUERDO */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/* BLOCO DE FUNÇÕES PARA TROCA DE IMAGENS DO LADO DIREITO */

let slideIndexTwo = 1;
showSlidesTwo(slideIndexTwo);

function plusSlidesTwo(n) {
  showSlidesTwo(slideIndexTwo += n);
}

function currentSlideTwo(n) {
  showSlidesTwo(slideIndexTwo = n);
}

function showSlidesTwo(n) {
  let i;
  let slides = document.getElementsByClassName("secondMySlides");
  let dots = document.getElementsByClassName("dotTwo");
  if (n > slides.length) {slideIndexTwo = 1}    
  if (n < 1) {slideIndexTwo = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexTwo-1].style.display = "block";  
  dots[slideIndexTwo-1].className += " active";
}


function subirPraCima(x, y) {
  window.scrollBy(x, y)
}


function mostrar_banner_cookie() {
  let mostrarBannerCookie = document.getElementsByClassName("banner-politica-de-cookies");
  mostrarBannerCookie[0].classList.replace("banner-politica-de-cookies", "abertura-banner-politica-de-cookies");
}

function remover_banner_cookie() {
  let remover = document.getElementsByClassName("abertura-banner-politica-de-cookies");
  remover[0].classList.replace("abertura-banner-politica-de-cookies", "banner-politica-de-cookies");
}


document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
      remover_banner_cookie()
    }
})















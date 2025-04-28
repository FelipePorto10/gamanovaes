
const imagemBotao = document.getElementById("imagem-botao");

imagemBotao.addEventListener("click", function() {
    window.location.href = "index.html";
});

function MostrarContatos() {
    alert("Contatos:\nEmail: email@example.com\nTelefone: 71999549299");
}

function MudarDeCor() {
  document.body.classList.toggle("MudarDeCor")
}



    const formulario = document.getElementById("meuCadastro");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        console.log("Nome do cliente:", nome);
        alert("Olá, " + nome + "!");
    });

    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('hidden');
      }

   

    const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
    

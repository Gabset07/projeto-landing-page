const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconderImagens() {
  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });
}
function mostrarImagens() {
  imagensPainel[imagemAtual].classList.add("mostrar");
}

setaAvancar.addEventListener("click", () => {
  const totalDeImagens = imagensPainel.lenght - 1;
  if (imagemAtual === totalDeImagens) {
    return;
  }

  imagemAtual++;

  esconderImagens();

  mostrarImagens();
});

setaVoltar.addEventListener("click", () => {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;
  esconderImagens();

  mostrarImagens();
});

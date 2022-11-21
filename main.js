const backdrop = document.querySelector(".backdrop");
const sorteo = document.querySelector(".sorteo");
const buttonClose = document.querySelector(".cerrar");

const closeSorteo = () => {
  backdrop.style.display = "none";
  sorteo.style.display = "none";
  // setTimeout(function() {
  //   backdrop.classList.remove("effect");
  // }, 10);
}


backdrop.addEventListener("click", closeSorteo)

buttonClose.addEventListener("click", closeSorteo)



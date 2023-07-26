function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  //Pegar a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/loboperfilofclight.png")
  } else {
    img.setAttribute("src", "./assets/loboperfilofc.png")
  }

  //Pegar a TAG <img>, substituir a img com a condição (Se tiver light mode, adicionar a imagem light. Se tiver sem light mode, manter a imagem normal.)
}

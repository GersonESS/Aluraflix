function adicionarFilme()
{
    console.log("Clicou")
}/*
  var campoFilme=document.querySelector('#filme')
  var filmeFavorito=campoFilme.value
  document.write("<img src=" + filmeFavorito + ">")
  if (filmeFavorito.endsWith('.jpg'))
  {
   listarFilmesNaTela(filmeFavorito) 
   }else
    {
    alert("Imagem Invalida")
  }
 campoFilme.value=""
}
function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
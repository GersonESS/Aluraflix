function adicionarFilme()
{
    console.log("Clicou")

    console.log("funcionou javascritp");
    var campoFilme=document.querySelector('#filme')
    var filmeFavorito=campoFilme.value
    console.log(filmeFavorito)
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
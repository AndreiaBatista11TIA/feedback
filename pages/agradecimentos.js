function pegarNota() {
    let nota = localStorage.getItem("nota")

    let paragrafoNota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`

    console.log(nota)
}

pegarNota()
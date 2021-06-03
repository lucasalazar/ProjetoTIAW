function lePesquisa() {
    let strComentario = localStorage.getItem("Pesquisas");
    let objComentario = {};

    if (strComentario) {
        objComentario = JSON.parse(strComentario);
    } else {
        objComentario = {
        sites: [{ site: ""}]
        };
    }

    return objComentario;
}

function salvaPesquisa(comentario) {
    localStorage.setItem("Pesquisas", JSON.stringify(comentario));
}

function incluirPesquisa() {
    //Ler Pesquisa do localStorage
    let objComentario = lePesquisa();

    //Incluir uma nova pesquisa
    let strComentario = document.getElementById("inputLink1").value;
    if (strComentario !== "") {
        let novoComentario = { site: strComentario };
        objComentario.sites.push(novoComentario);

      //Salvar a pesquisa no localStorage novamente
        salvaPesquisa(objComentario);

      //Atualiza os dados da tela
        imprimePesquisa();
        document.getElementById("inputLink1").value = "";
    }
}

function imprimePesquisa() {
    let tela = document.getElementById("tela");
    let strHtml = "";
    let objComentario = lePesquisa();

    for (i = 0; i < objComentario.sites.length; i++) {
        strHtml =
        strHtml +
        `<li><a href="./encontrada.html?link=${objComentario.sites[i].site}" class="dropdown-item">${objComentario.sites[i].site}</a></li>`;
    }

    tela.innerHTML = strHtml;
}

  //Configura botão Enviar
    document.getElementById("enviar").addEventListener("click", incluirPesquisa);



onload = () => {
    //Atualiza os dados da tela
    imprimePesquisa();
};
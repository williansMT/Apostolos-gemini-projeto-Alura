function pesquisar() {
    // 1. Seleciona a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // 2. Obtém o termo de pesquisa digitado pelo usuário e converte para minúsculas para facilitar a comparação.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); 
    // caso clique no bortao sem pesquisar com a string vazia
    if (campoPesquisa == "") {
        section.innerHTML = "<p class='sem-resultados'>Nenhum resultado encontrado.</p>"
        return
    }
    if (campoPesquisa == " ") {
        section.innerHTML = "<p class='sem-resultados'>Nenhum resultado encontrado.</p>"
        return
    }
    // 3. Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let nome = "";
    
    // 4. Itera sobre cada elemento (dado) do array 'dados', que representa um apóstolo.
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        nome = dado.nome.toLowerCase()
        // 5. Verifica se o nome do apóstolo contém o termo de pesquisa (ignorando maiúsculas e minúsculas).
        if (nome.toLowerCase().includes(campoPesquisa)) {
            // 6. Se o nome corresponder, constrói um bloco de HTML para exibir as informações do apóstolo.
            //    A sintaxe `${variável}` permite inserir o valor de uma variável diretamente no texto.
            resultados += `
                <div class="item-resultado">
        <h2> ${dado.nome ?? "Não informado"}</h2>
        <p>
        Período: ${dado.periodo ?? "Não informado"}<br>
        Local de nascimento: ${dado.localNascimento ?? "Não informado"}<br>
        Local de martírio: ${dado.localMartirio ?? "Não informado"}<br>
        Martírio: ${dado.martirio ?? "Não informado"}<br>
        Perseguidor: ${dado.perseguidor ?? "Não informado"}<br>
        Outras informações: ${dado.outrasInformacoes ?? "Não informado"}
        </p>
        <a href="${dado.link ?? "Link não disponível"}" target="_blank">wikipedia </a>
    </div>
            `;
        }
    }

    // 7. Substitui o conteúdo da seção HTML pelos resultados da pesquisa.
    section.innerHTML = resultados;

    // 8. Verifica se foram encontrados resultados. Se não, exibe uma mensagem informativa.
    if (resultados === "") {
        section.innerHTML = "<p class='sem-resultados'>Ops! Não encontramos nada para sua pesquisa. Tente usar outras palavras-chave.</p>";
    }
}

function pesquisar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //verifica se nada foi inserido no campopesquisa
    if(!campoPesquisa){
        section.innerHTML = "<p class='erro'>Nada foi encontrado. Você precisa inserir uma palavra de busca.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
 
    // Itera sobre cada objeto no array 'dados'
    for (let dado of dados) {
        titulo =  dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // verifica se o valor inserido no campopesquisa esta presente na lista de dados
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria uma nova div para cada resultado e adiciona os elementos HTML
            resultados += `
            <div class="item-resultado">
            <h2>
                ${dado.titulo}
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">mais informações</a>
            </div>`;
        }
    }

    if(!resultados){
        resultados = "<p class='erro'>O elemento procurado não está na nossa base de dados.</p>"
    }
    // Atribui o HTML gerado ao elemento 'section'
    section.innerHTML = resultados;
}







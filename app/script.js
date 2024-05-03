// Selecione a imagem pelo ID
const criarTopicoImg = document.querySelector('.criar_topico');

// Adicione um ouvinte de evento de clique à imagem
criarTopicoImg.addEventListener('click', function() {
    // Crie o formulário dinamicamente
    const formulario = document.createElement('form');
    
    // Crie o campo de entrada para o assunto
    const campoAssunto = document.createElement('input');
    campoAssunto.type = 'text';
    campoAssunto.placeholder = 'Assunto da pergunta';
    
    // Crie o campo de entrada para a pergunta
    const campoConteudo = document.createElement('textarea');
    campoConteudo.placeholder = 'Conteúdo';
    campoConteudo.rows = 5; // Defina o número de linhas
    
    // Crie o botão de envio
    const botaoEnviar = document.createElement('button');
    botaoEnviar.textContent = 'Enviar';
    
    // Adicione os campos e o botão ao formulário
    formulario.appendChild(campoAssunto);
    formulario.appendChild(campoConteudo);
    formulario.appendChild(botaoEnviar);
    
    // Selecione a div de discussões
    const divDiscussoes = document.querySelector('.card_discussoes');
    
    // Adicione o formulário abaixo da div de discussões
    divDiscussoes.appendChild(formulario);
    
    // Remova o formulário após enviar
    botaoEnviar.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário
        
        // Captura os valores digitados nos campos
        const assunto = campoAssunto.value;
        const conteudo = campoConteudo.value;
        
        // Crie a div de tópicos para o novo tópico
        const novoTopico = document.createElement('div');
        novoTopico.classList.add('topicos');
        
        // Crie a div do título
        const divTitulo = document.createElement('div');
        divTitulo.classList.add('titulo');
        
        // Crie o título
        const tituloTopico = document.createElement('h3');
        tituloTopico.classList.add('titulo-topico');
        tituloTopico.textContent = assunto; // Use o valor do campo de assunto
        
        // Adicione o título à div do título
        divTitulo.appendChild(tituloTopico);
        
        // Crie o parágrafo do autor
        const autor = document.createElement('p');
        autor.textContent = 'Seu nome aqui'; // Altere para o autor real
        
        // Adicione o parágrafo do autor à div do título
        divTitulo.appendChild(autor);
        
        // Crie o parágrafo do texto do tópico
        const textoTopico = document.createElement('p');
        textoTopico.classList.add('topico__texto');
        textoTopico.textContent = conteudo; // Use o valor do campo de conteúdo
        
        // Adicione o texto do tópico à div do título
        divTitulo.appendChild(textoTopico);
        
        // Crie a div dos ícones do tópico
        const divIconesTopico = document.createElement('div');
        divIconesTopico.classList.add('icones__topico');
        
        // Crie as imagens e os parágrafos dos ícones
        const imgMaisInformacoes = document.createElement('img');
        imgMaisInformacoes.src = 'assets/mais_informações.png';
        imgMaisInformacoes.alt = 'Mais informações';
        
        const imgFavoritar = document.createElement('img');
        imgFavoritar.src = 'assets/favoritar.png';
        imgFavoritar.alt = 'Favoritar';
        
        const paragrafoLike = document.createElement('p');
        paragrafoLike.textContent = '1 like';
        
        const paragrafoResposta = document.createElement('p');
        paragrafoResposta.textContent = '1 Resposta';
        
        // Adicione as imagens e os parágrafos à div dos ícones do tópico
        divIconesTopico.appendChild(imgMaisInformacoes);
        divIconesTopico.appendChild(imgFavoritar);
        divIconesTopico.appendChild(paragrafoLike);
        divIconesTopico.appendChild(paragrafoResposta);
        
        // Adicione a div do título e a div dos ícones do tópico à nova div de tópico
        novoTopico.appendChild(divTitulo);
        novoTopico.appendChild(divIconesTopico);
        
        // Adicione a nova div de tópico à div de discussões
        divDiscussoes.appendChild(novoTopico);
        
        // Remova o formulário após enviar
        divDiscussoes.removeChild(formulario);
    });
});
function vermais() {
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btnVermais = document.getElementById("btnVerMais");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnVermais.innerHTML = "Ver mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnVermais.innerHTML = "Ver menos";
    }
}

// Ocultar o texto adicional quando a página carrega
document.getElementById("mais").style.display = "none";

    
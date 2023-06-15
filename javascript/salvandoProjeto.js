// fazer uma função que pegue os textos adicionados nos dois inputs e o codigo inserido no editor (ok-)
//  a cor que está a caixa de texto (ok)
// a linguagem e associe essa ação ao botão salvar projeto (ok)
// ao ser salvo, tudo isso deve ser adicionado a página de comunidade 
// lá deve aparecer o card com a cor, o nome do projeto e a descrição 

// função 1 para a cor 
const preservar = document.querySelector('.preservar')
const botaoSalvar = document.querySelector('#b2')
const tituloDoProjeto = document.querySelector('#text1')
const descricaoDoProjeto = document.querySelector('#text2')
const corDoProjeto = document.querySelector('#b1')
const pegaLinguagem = document.querySelector('.linguagem')
const areaCdg  = document.querySelector('#parteCode')

corDoProjeto.addEventListener('input', function(evento) {
    let corzinha = evento.target.value
    preservar.style = `background: ${corzinha}`;
})

function criarProjeto() {
    var projetinho = {
        'id': atribuiID(), // vou criar 
        'detalhesDoProjeto': {
            'nome': tituloDoProjeto.value,
            'descricao': descricaoDoProjeto.value, 
            'cor': corDoProjeto.value, 
            'language': pegaLinguagem.value, 
            'code': areaCdg.querySelector('code').innerText
        }
    
    }
   return projetinho;
}

botaoSalvar.addEventListener('click', function (evento) {
        const novoProjeto = criarProjeto() 
        console.log(novoProjeto)
})

function atribuiID() {
        return atribuiID
}

var clicks = 0 
console.log(clicks)  

function criarContainer() {
    
    return (` <div class="cardizins">  
  
<div class="preservar">
    <div class="barraSuperior">
        <div id="vermelho">
           <img src="../imagens/vermelho.png" alt="">${projetinho.detalhesDoProjeto.nome}
        </div>
        <div id="amarelo">
            <img src="../imagens/amarelo.png" alt="">
        </div>
        <div id="verde">
            <img src="../imagens/verde.png" alt="">
        </div>
    </div> 
        <code class="preview-hljs" contenteditable="true" aria-label="Editor de código" >socorro</code>
    </div>
       
    <div onmouseover="mOver(this)" onmouseout="mOut(this)" id="descritivo">
        <div id="descricaoProjeto" >
    
            
        </div>
        <img src="../imagens/comentario.png" id="comentario">
        <img src="../imagens/coracao.png" id="coracao">
</div>`)
   
}

criarContainer()

function criaDiv() {
    return (`<div id="recebeCard"> 
        <h1>teste</h1>     
    </div>`)
}

const botaoVaiParaComunidade = document.querySelector("#comunidadeBot")
const divLimpa = document.querySelector('.caixaDeTexto')
const recebeCard = document.querySelector('#cardsCriados')

botaoVaiParaComunidade.addEventListener("click", (evento) => {
    document.querySelector('.caixaDeTexto').style.display = 'none';
    document.querySelector('#contemCards').style.display = 'block';
}) 


    botaoSalvar.addEventListener("click", (evento) => {
            recebeCard.innerHTML += criarContainer()
            console.log(clicks) 
    })









// função com os parametros dos valores que pegou += 
// associar ao click do botão 


















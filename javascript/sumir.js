// usaremos o javascript para mudar o conteúdo que aparece ao passar o mouse por cima 
const comentario = document.getElementById('comentario')
console.log(comentario)

const coracao = document.getElementById('coracao')
console.log(coracao)

const divisao = document.getElementById('descritivo')
console.log(divisao)

function mOver(divisao) {
    divisao.innerHTML= comentario
    divisao.innerHTML= coracao
}

function mOut(divisao) {
    divisao.innerHTML= " "
}






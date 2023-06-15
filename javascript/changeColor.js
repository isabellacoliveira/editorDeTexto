const mudaCor = document.getElementById('b1')
const mudaFundo = document.getElementById('caixa')

mudaCor.addEventListener("input", () => {
    mudaFundo.style.backgroundColor = mudaCor.value;
})
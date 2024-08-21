//vamos aplicar nossa lógica para adicionar os itens da lista 

/*

Lista de tarefas
[x] Saber quando o botão foi clicado
[x] Pegar o texto do input
[ ] Colocar o texto na tela
  [] Deletar a tarefa da tela quando eu clicar no x

*/

//saber quando o botão foi clicado
//uma função só é executada quando ela é chamada

function adicionarTarefa (){
    let input = document.querySelector("input").value //quero pegar somente o valro digitado no input
    let li = document.createElement("li") // ir até o html e criar um elemento,nesse caso uma li
    li.innerHTML = input + '<span onclick="deletarTarefa(this)">❌</span>' //injetar alguma coisa na nossa li

    document.querySelector("ul").appendChild(li) //preciso saber quem é a minha ul indo até o documento html  //o appendChild é pegar um elemento e adicionar um filho a ele.

    input = '' //o input ficará vazio após adicionar uma tarefa.
    


}

function deletarTarefa(li) {
    li.parentElement.remove()
    
}
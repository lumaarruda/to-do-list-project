let text = document.getElementById('texto-tarefa');
let criar = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');

function inserirItem() {
  let item = document.createElement('li');
  item.innerText = text.value;
  console.log(item);
  
  list.appendChild(item);
  text.value = '';

  item.addEventListener('click', selecionarItem);
}

function selecionarItem(e) {
  console.log(e);
  e.target.style.backgroundColor = 'rgb(128,128,128)';
}

window.onload = function () {
  criar.addEventListener('click', inserirItem);
}

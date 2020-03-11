const text = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const btnLimparLista = document.getElementById('apaga-tudo');
const btnFinalizados = document.getElementById('remover-finalizados');
const btnSelecionados = document.getElementById('remover-selecionado');

function selecionarItem(e) {
  e.target.classList.toggle('cinza');
}

function riscar(e) {
  e.target.classList.toggle('completed');
}

function removerFinalizados() {
  if (className = 'completed') {
    list.remove('li')
  }
}

function inserirItem() {
  const item = document.createElement('li');
  item.innerText = text.value;
  list.appendChild(item);
  text.value = '';

  item.addEventListener('click', selecionarItem);
  item.addEventListener('dblclick', riscar);
}

function remover() {
  list.remove(list);
  location.reload();
}

function removerFinalizados(className) { 
  let elements = document.getElementsByClassName('completed'); 
  let first = elements[0]; 
  while (first) { 
      first.remove(); 
      first = elements[0]; 
  } 
}

function removerSelecionados(className) { 
  let elements = document.getElementsByClassName('cinza'); 
  let first = elements[0]; 
  while (first) { 
      first.remove(); 
      first = elements[0]; 
  } 
}

window.onload = function () {
  criar.addEventListener('click', inserirItem);
  btnLimparLista.addEventListener('click', remover);
  btnFinalizados.addEventListener('click', removerFinalizados);
  btnSelecionados.addEventListener('click', removerSelecionados);
};

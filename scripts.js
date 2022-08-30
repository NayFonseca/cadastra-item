let lista = document.getElementById("lista");
console.log(lista.hasChildNodes());
let filhos = lista.children;
console.log(filhos);
for(let filho of filhos) {
    console.log(filho.tagName);
}
let novoItem = document.createElement("li");
novoItem.innerHTML = "Móveis";
lista.appendChild(novoItem);
let item = document.getElementById("item");
console.log(item.previousElementSibling);
console.log(item.nextElementSibling);
console.log(item.parentElement);
var excluir = filhos[0];
lista.removeChild(excluir);


paises = ["alabama","alasca","arizoa","felipe","gustavo","rodrigo","paulista","alasca","arizoa","felipe","gustavo","rodrigo","paulista"]





t = ""
for(i in paises){
t += "<h5>"+paises[i]+"</h5>"
paises[i] = paises[i].toLowerCase()}
lista.innerHTML = t
pesquisa.onkeyup=function(e){
t = this.value
r = new RegExp(t,"g")
for(i in paises){
if( paises[i].match(r) )
lista.children[i].removeAttribute("style")
else
lista.children[i].style.display="none" }}
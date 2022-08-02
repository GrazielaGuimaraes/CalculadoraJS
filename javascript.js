

function calcular(tipo, valor) {



//Se for um valor
if(tipo === 'valor'){

document.getElementById('resultado').value += valor;



//Se for uma ação
} else if(tipo === 'acao'){
// Ações dos botões



if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
    document.getElementById('resultado').value += valor ;
}  

//Faz o cálculo
if(valor === '='){
    var valores = document.getElementById('resultado').value;
    document.getElementById('resultado').value = eval(valores);
  }


  //onclick="calcular('acao', 'c')"
  if(valor === 'c'){
    document.getElementById('resultado').value = '';
  } 




}
}















/*function insert(num)
{
document.getElementById('resultado').value += num;
}
function clean ()
{
document.getElementById('resultado').value = '';
}
function back()
{
var resultado= document.getElementById('resultado').value;
document.getElementById('resultado').value = resultado.substring(0, resultado.length -1);
}


//Calcular
function calcular()
{
var resultado = document.getElementById('resultado').value;
if (resultado)
{
document.getElementById('resultado').value = eval(resultado);
}
else{
    document.getElementById('resultado').value = "Tente Novamente"
}
}*/
function tabuada(){
    var num = parseInt(document.getElementById("num").value)
    var min = parseInt(document.getElementById("min").value)
    var max = parseInt(document.getElementById("max").value)
    var resposta = document.getElementById('resposta')
    var tabuada = ''
  
    for(var valor = min; valor <= max ; valor++)
     tabuada += num + " x " + valor + " = " +
      num * valor + "<br>"
    
    resposta.innerHTML = tabuada
  }
  
  function limparTabuada(){
    num.value = " "
    min.value = " "
    max.value = " "
    tabuada ()
  }
  
  function teclaEnter (e){
    if(e.which == "13"){
      tabuada()
    }
  }
  
  const caixaTexto = document.getElementById("max")
  const botaoGerar = document.getElementById("botao")
  const botaoLimpar = document.getElementById("botao2")
  
  
  caixaTexto.addEventListener("keypress", teclaEnter)
  botaoGerar.addEventListener("click", tabuada)
  botaoLimpar.addEventListener ("click", limparTabuada)